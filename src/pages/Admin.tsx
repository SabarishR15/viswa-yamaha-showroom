import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CalendarDays, Clock, User, Phone, Car, FileText, Trash2, CheckCircle, Shield } from 'lucide-react';

interface ServiceBooking {
  id: string;
  customer_name: string;
  contact_number: string;
  vehicle_model: string;
  vehicle_number: string;
  complaints: string;
  preferred_date: string;
  preferred_time: string;
  vehicle_type: string;
  created_at?: string;
}

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<ServiceBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    checkAdminAccess();
  }, [navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchBookings();
    }
  }, [isAdmin]);

  useEffect(() => {
    if (!isAdmin) return;
    
    // Set up real-time subscription for new bookings
    const channel = supabase
      .channel('service-bookings')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'service booking' },
        (payload) => {
          console.log('New booking received:', payload);
          setBookings(prev => [payload.new as ServiceBooking, ...prev]);
          
          // Show notification
          toast({
            title: "New Service Booking!",
            description: `${(payload.new as ServiceBooking).customer_name} booked a service for ${(payload.new as ServiceBooking).preferred_date}`,
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast, isAdmin]);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/auth');
        return;
      }

      // Check if user has admin role
      const { data: roleData, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id)
        .eq('role', 'admin')
        .maybeSingle();

      // If no admins exist, automatically make this user an admin
      if (!roleData) {
        const { error: insertError } = await supabase
          .from('user_roles')
          .insert({ user_id: session.user.id, role: 'admin' });

        if (!insertError) {
          setIsAdmin(true);
          setCheckingAuth(false);
          toast({
            title: "Welcome Admin!",
            description: "You've been granted admin access as the first user.",
          });
          return;
        }
      }

      if (error || !roleData) {
        setIsAdmin(false);
        setCheckingAuth(false);
        return;
      }

      setIsAdmin(true);
    } catch (error) {
      console.error('Error checking admin access:', error);
      setIsAdmin(false);
    } finally {
      setCheckingAuth(false);
    }
  };

  const fetchBookings = async () => {
    try {
    const { data, error } = await supabase
      .from('service booking')
      .select('*')
      .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bookings:', error);
        toast({
          title: "Error",
          description: "Failed to fetch service bookings",
          variant: "destructive"
        });
        return;
      }

      setBookings(data || []);
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id: string) => {
    try {
      const { error } = await supabase
        .from('service booking')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete booking",
          variant: "destructive"
        });
        return;
      }

      setBookings(prev => prev.filter(booking => booking.id !== id));
      toast({
        title: "Success",
        description: "Booking deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  if (checkingAuth || loading) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {checkingAuth ? 'Checking access...' : 'Loading bookings...'}
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen py-8 flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-muted-foreground mb-6">
              You don't have permission to access this page. Admin access is required.
            </p>
            <Button onClick={() => navigate('/')}>
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Service <span className="text-primary">Bookings</span>
          </h1>
          <p className="text-muted-foreground">
            Manage all service appointments and customer requests
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CalendarDays className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                  <p className="text-2xl font-bold">{bookings.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-orange-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Today's Appointments</p>
                  <p className="text-2xl font-bold">
                    {bookings.filter(b => b.preferred_date === new Date().toISOString().split('T')[0]).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold">
                    {bookings.filter(b => {
                      const bookingDate = new Date(b.preferred_date);
                      const now = new Date();
                      const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
                      return bookingDate >= weekStart;
                    }).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold">
                    {bookings.filter(b => {
                      const bookingDate = new Date(b.preferred_date);
                      const now = new Date();
                      return bookingDate.getMonth() === now.getMonth() && bookingDate.getFullYear() === now.getFullYear();
                    }).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Service Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            {bookings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No service bookings yet.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Complaints</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{booking.customer_name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{booking.contact_number}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Car className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{booking.vehicle_model}</p>
                              <p className="text-sm text-muted-foreground">{booking.vehicle_number}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <p className="font-medium">{new Date(booking.preferred_date).toLocaleDateString()}</p>
                              <p className="text-sm text-muted-foreground">{booking.preferred_time}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {booking.complaints || 'No complaints'}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => deleteBooking(booking.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;