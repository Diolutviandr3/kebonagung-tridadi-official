Add-Type -AssemblyName System.Drawing

$assetsPath = (Resolve-Path "src/assets").Path
$files = Get-ChildItem -Path $assetsPath | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' -and $_.Name -ne 'hero.png' }

$totalOriginal = 0
$totalOptimized = 0
$count = 0

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host " Memulai Optimasi Gambar Dokumentasi Padukuhan  " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq 'JPEG' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]82)

foreach ($file in $files) {
    $filePath = $file.FullName
    $originalSize = $file.Length
    $totalOriginal += $originalSize

    # Read image from memory stream to avoid file locking
    $bytes = [System.IO.File]::ReadAllBytes($filePath)
    $ms = New-Object System.IO.MemoryStream($bytes, 0, $bytes.Length)
    $img = [System.Drawing.Image]::FromStream($ms)

    # Handle EXIF orientation tag (0x0112)
    try {
        if ($img.PropertyIdList -contains 0x0112) {
            $prop = $img.GetPropertyItem(0x0112)
            $orientation = [BitConverter]::ToUInt16($prop.Value, 0)
            switch ($orientation) {
                2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                4 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipX) }
                5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }
    } catch {
        # ignore exif errors if not present
    }

    # Calculate new dimensions (max 1600px)
    $maxDim = 1600
    $width = $img.Width
    $height = $img.Height
    $ratio = 1.0

    if ($width -gt $maxDim -or $height -gt $maxDim) {
        if ($width -gt $height) {
            $ratio = $maxDim / $width
        } else {
            $ratio = $maxDim / $height
        }
    }

    $newWidth = [int][Math]::Max(1, [Math]::Round($width * $ratio))
    $newHeight = [int][Math]::Max(1, [Math]::Round($height * $ratio))

    $newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graph = [System.Drawing.Graphics]::FromImage($newBmp)
    $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graph.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)

    # Save to temp file
    $tempPath = "$filePath.tmp"
    $newBmp.Save($tempPath, $jpegCodec, $encoderParams)

    $graph.Dispose()
    $newBmp.Dispose()
    $img.Dispose()
    $ms.Dispose()

    # Overwrite original
    Move-Item -Path $tempPath -Destination $filePath -Force

    $newSize = (Get-Item $filePath).Length
    $totalOptimized += $newSize
    $count++

    $origMB = ($originalSize / 1MB).ToString("0.00")
    $newKB = ($newSize / 1KB).ToString("0.0")
    $savedPct = (((($originalSize - $newSize) / $originalSize) * 100)).ToString("0.0")

    Write-Host "[$count/$($files.Count)] $($file.Name): $origMB MB -> $newKB KB ($savedPct% hemat)" -ForegroundColor Green
}

$totOrigMB = ($totalOriginal / 1MB).ToString("0.00")
$totOptMB = ($totalOptimized / 1MB).ToString("0.00")
$totSavedPct = (((($totalOriginal - $totalOptimized) / $totalOriginal) * 100)).ToString("0.0")

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host " RINGKASAN OPTIMASI FOTO DOKUMENTASI            " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "Total Ukuran Awal   : $totOrigMB MB" -ForegroundColor Yellow
Write-Host "Total Ukuran Akhir  : $totOptMB MB" -ForegroundColor Green
Write-Host "Total Penghematan   : $totSavedPct% Lebih Ringan!" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
