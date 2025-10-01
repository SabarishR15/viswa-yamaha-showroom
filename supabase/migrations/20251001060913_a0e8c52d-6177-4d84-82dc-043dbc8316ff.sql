-- Enable RLS on service booking table (if not already enabled)
ALTER TABLE public."service booking" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert service bookings (public booking form)
CREATE POLICY "Allow public to insert service bookings"
ON public."service booking"
FOR INSERT
TO public
WITH CHECK (true);

-- Allow authenticated users to view all service bookings (for admin panel)
CREATE POLICY "Allow authenticated users to view service bookings"
ON public."service booking"
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update service bookings (for admin panel)
CREATE POLICY "Allow authenticated users to update service bookings"
ON public."service booking"
FOR UPDATE
TO authenticated
USING (true);

-- Allow authenticated users to delete service bookings (for admin panel)
CREATE POLICY "Allow authenticated users to delete service bookings"
ON public."service booking"
FOR DELETE
TO authenticated
USING (true);

-- Enable RLS on vehicles table
ALTER TABLE public.vehicles ENABLE ROW LEVEL SECURITY;

-- Allow public to view vehicles
CREATE POLICY "Allow public to view vehicles"
ON public.vehicles
FOR SELECT
TO public
USING (true);

-- Allow authenticated users to manage vehicles (for admin panel)
CREATE POLICY "Allow authenticated users to insert vehicles"
ON public.vehicles
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update vehicles"
ON public.vehicles
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Allow authenticated users to delete vehicles"
ON public.vehicles
FOR DELETE
TO authenticated
USING (true);