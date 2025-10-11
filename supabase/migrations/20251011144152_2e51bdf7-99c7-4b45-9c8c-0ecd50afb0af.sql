-- Function to detect if no admins exist (avoids recursion in RLS)
CREATE OR REPLACE FUNCTION public.no_admins_exist()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT NOT EXISTS (
    SELECT 1 FROM public.user_roles WHERE role = 'admin'
  );
$$;

-- Policy to allow the first authenticated user to become admin automatically
DROP POLICY IF EXISTS "Bootstrap first admin" ON public.user_roles;
CREATE POLICY "Bootstrap first admin"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.no_admins_exist());