-- Ensure schema usage for REST roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Service booking table grants
GRANT INSERT ON TABLE public."service booking" TO anon;
GRANT SELECT, UPDATE, DELETE ON TABLE public."service booking" TO authenticated;

-- Vehicles table grants
GRANT SELECT ON TABLE public.vehicles TO anon;
GRANT INSERT, UPDATE, DELETE ON TABLE public.vehicles TO authenticated;