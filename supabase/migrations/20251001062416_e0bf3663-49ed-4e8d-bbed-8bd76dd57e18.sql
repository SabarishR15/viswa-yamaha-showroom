-- Allow public (anon) to view service bookings for admin page
CREATE POLICY "Allow public to view service bookings"
ON public."service booking"
FOR SELECT
TO anon
USING (true);