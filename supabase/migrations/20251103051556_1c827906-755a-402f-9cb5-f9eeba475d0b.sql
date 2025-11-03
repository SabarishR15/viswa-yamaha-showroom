-- Complete the security fixes - drop existing policies first
-- Drop ALL existing policies on "service booking" table
DROP POLICY IF EXISTS "Users can view their own bookings" ON public."service booking";
DROP POLICY IF EXISTS "Users can update their own bookings" ON public."service booking";
DROP POLICY IF EXISTS "Users can delete their own bookings" ON public."service booking";
DROP POLICY IF EXISTS "Admins can view all bookings" ON public."service booking";
DROP POLICY IF EXISTS "Admins can update all bookings" ON public."service booking";
DROP POLICY IF EXISTS "Admins can delete all bookings" ON public."service booking";
DROP POLICY IF EXISTS "Allow public to insert service bookings" ON public."service booking";

-- Drop ALL existing policies on vehicles table
DROP POLICY IF EXISTS "Only admins can insert vehicles" ON public.vehicles;
DROP POLICY IF EXISTS "Only admins can update vehicles" ON public.vehicles;
DROP POLICY IF EXISTS "Only admins can delete vehicles" ON public.vehicles;
DROP POLICY IF EXISTS "Allow public to view vehicles" ON public.vehicles;

-- Now create the correct policies for "service booking"
-- Keep public insert for booking form
CREATE POLICY "Public can submit bookings"
ON public."service booking"
FOR INSERT
TO anon
WITH CHECK (true);

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

-- Create correct policies for vehicles table
-- Keep public read for vehicle catalog
CREATE POLICY "Public can view vehicles"
ON public.vehicles
FOR SELECT
TO anon, authenticated
USING (true);

-- Only admins can manage vehicles
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