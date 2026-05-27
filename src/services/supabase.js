import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dpvkzjtzobhemgvlbaxn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdmt6anR6b2JoZW1ndmxiYXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NjY4NjcsImV4cCI6MjA5NTA0Mjg2N30._kOoorMY1yDrPDt3dWISxIAlOBSXHOdrqe5Dbv08qrQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
