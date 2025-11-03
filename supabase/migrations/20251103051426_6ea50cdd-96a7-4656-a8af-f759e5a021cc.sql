-- Fix security issues for "service booking" table (note: table name has a space)
-- First, add user_id column to track booking ownership
ALTER TABLE public."service booking" 
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE;

-- Drop the insecure public view policy
DROP POLICY IF EXISTS "Allow public to view service bookings" ON public."service booking";

-- Drop the overly permissive authenticated policies
DROP POLICY IF EXISTS "Allow authenticated users to view service bookings" ON public."service booking";
DROP POLICY IF EXISTS "Allow authenticated users to update service bookings" ON public."service booking";
DROP POLICY IF EXISTS "Allow authenticated users to delete service bookings" ON public."service booking";

-- Create secure policies for service booking
-- Users can only view their own bookings
CREATE POLICY "Users can view their own bookings"
ON public."service booking"
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Users can only update their own bookings
CREATE POLICY "Users can update their own bookings"
ON public."service booking"
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Users can only delete their own bookings
CREATE POLICY "Users can delete their own bookings"
ON public."service booking"
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Admins can view all bookings
CREATE POLICY "Admins can view all bookings"
ON public."service booking"
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Admins can update all bookings
CREATE POLICY "Admins can update all bookings"
ON public."service booking"
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete all bookings
CREATE POLICY "Admins can delete all bookings"
ON public."service booking"
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix security issues for vehicles table
-- Drop the overly permissive policies
DROP POLICY IF EXISTS "Allow authenticated users to insert vehicles" ON public.vehicles;
DROP POLICY IF EXISTS "Allow authenticated users to update vehicles" ON public.vehicles;
DROP POLICY IF EXISTS "Allow authenticated users to delete vehicles" ON public.vehicles;

-- Create admin-only policies for vehicle management
CREATE POLICY "Only admins can insert vehicles"
ON public.vehicles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update vehicles"
ON public.vehicles
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete vehicles"
ON public.vehicles
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));