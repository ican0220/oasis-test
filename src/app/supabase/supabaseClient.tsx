import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './types'

// const supabaseUrl = process.env.SUPABASE_URL;
const supabaseUrl = "https://libzvrknqvfygoryvxfo.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpYnp2cmtucXZmeWdvcnl2eGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3NjY4ODIsImV4cCI6MjAzNDM0Mjg4Mn0.ggJmshImFC3Bcq3pTonZaJVXS5JAjVyHNS52HFMedKM";

const supabase: SupabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;