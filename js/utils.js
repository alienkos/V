const SUPABASE_URL = 'https://nsjdremoodvkjqggasct.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zamRyZW1vb2R2a2pxZ2dhc2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwNTc5MTQsImV4cCI6MjA5OTYzMzkxNH0.Qsv6ZcVGLyoUYLZDcWnW1vSz2F4D4xNDRge_bx7eVW4';

// window.supabase otomatis tersedia karena dimuat via script CDN di head index.html
export const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);