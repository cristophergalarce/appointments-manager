// app/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xjiaaqccsijhdjietxrd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqaWFhcWNjc2lqaGRqaWV0eHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1OTU5NDQsImV4cCI6MjAzMDE3MTk0NH0.btOzISc_SkutVJ-HRTJTNSH0RDTT2G6ZAvZF2icJ8KY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);