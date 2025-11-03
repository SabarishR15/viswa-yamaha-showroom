-- Allow authenticated users to insert their own bookings
CREATE POLICY "Authenticated users can create their own bookings"
ON public."service booking"
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);