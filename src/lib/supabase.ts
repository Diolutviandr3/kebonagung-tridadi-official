import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://klxfejxdganyjymkhkkz.supabase.co';
const supabaseKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
  'sb_publishable_VKezWVRuZ8CiTOdOJ40TVQ_3610FoFN';

export const supabase = createClient(supabaseUrl, supabaseKey);
