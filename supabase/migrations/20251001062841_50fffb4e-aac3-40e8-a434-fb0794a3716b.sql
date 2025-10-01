-- Add created_at column to service booking table
ALTER TABLE public."service booking"
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();