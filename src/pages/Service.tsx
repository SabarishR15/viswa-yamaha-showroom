import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { CalendarDays, Clock, Wrench, CheckCircle, User, Bike, FileText } from 'lucide-react';

const Service = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    vehicleModel: '',
    vehicleNumber: '',
    complaints: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['customerName', 'phone', 'vehicleModel', 'vehicleNumber', 'preferredDate', 'preferredTime'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking confirmation
    toast({
      title: "Service Booked Successfully!",
      description: `Your service slot has been confirmed for ${formData.preferredDate} at ${formData.preferredTime}. We'll contact you soon.`,
    });

    // Reset form
    setFormData({
      customerName: '',
      phone: '',
      email: '',
      vehicleModel: '',
      vehicleNumber: '',
      complaints: '',
      serviceType: '',
      preferredDate: '',
      preferredTime: ''
    });
  };

  const serviceTypes = [
    'General Service',
    'Oil Change',
    'Brake Service',
    'Engine Tuning',
    'Electrical Issues',
    'Tire Replacement',
    'Battery Service',
    'Transmission Service',
    'Emergency Repair'
  ];

  const vehicleModels = [
    'Yamaha R15',
    'Yamaha FZ 25',
    'Yamaha R3',
    'Yamaha FZS 25',
    'Yamaha MT-15',
    'Yamaha Fascino 125',
    'Yamaha Ray ZR 125',
    'Yamaha Aerox 155',
    'Other'
  ];

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Service <span className="text-primary">Booking</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule your Yamaha service appointment with our certified technicians. 
            Quality service, genuine parts, professional care.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Info */}
          <div className="space-y-6">
            {/* Service Features */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  <span>Our Services</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    'Certified Yamaha Technicians',
                    'Genuine Yamaha Parts',
                    'Comprehensive Diagnostics',
                    'Extended Warranty Options',
                    'Quick Turnaround Time',
                    'Transparent Pricing'
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Hours */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Service Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Saturday</span>
                    <span className="text-sm font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sunday</span>
                    <span className="text-sm font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Emergency Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">For urgent repairs:</p>
                  <p className="font-semibold text-primary">+91 8289945641</p>
                  <p className="text-xs text-muted-foreground">Available 24/7 for emergency services</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Service Slot</CardTitle>
                <p className="text-muted-foreground">Fill in the details below to schedule your appointment</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Customer Information */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <User className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Customer Information</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="customerName">Full Name *</Label>
                        <Input
                          id="customerName"
                          placeholder="Enter your full name"
                          value={formData.customerName}
                          onChange={(e) => handleInputChange('customerName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Bike className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Vehicle Information</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicleModel">Vehicle Model *</Label>
                        <Select onValueChange={(value) => handleInputChange('vehicleModel', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your vehicle model" />
                          </SelectTrigger>
                          <SelectContent>
                            {vehicleModels.map((model) => (
                              <SelectItem key={model} value={model}>
                                {model}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicleNumber">Vehicle Number *</Label>
                        <Input
                          id="vehicleNumber"
                          placeholder="Enter vehicle registration number"
                          value={formData.vehicleNumber}
                          onChange={(e) => handleInputChange('vehicleNumber', e.target.value.toUpperCase())}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Service Details</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type</Label>
                      <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type of service needed" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="complaints">Issues/Complaints</Label>
                      <Textarea
                        id="complaints"
                        placeholder="Describe any issues or specific services needed..."
                        rows={4}
                        value={formData.complaints}
                        onChange={(e) => handleInputChange('complaints', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <CalendarDays className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Preferred Appointment</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t">
                    <Button type="submit" variant="booking" size="lg" className="w-full">
                      Book Your Service Slot
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      * Required fields. We'll confirm your appointment within 2 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <Card className="bg-gradient-hero text-primary-foreground shadow-hero">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Why Service at Viswa Yamaha?</h3>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                <div>
                  <Badge className="bg-white/20 text-primary-foreground mb-2">Certified</Badge>
                  <p className="text-sm text-primary-foreground/90">Yamaha certified technicians</p>
                </div>
                <div>
                  <Badge className="bg-white/20 text-primary-foreground mb-2">Genuine</Badge>
                  <p className="text-sm text-primary-foreground/90">Only authentic Yamaha parts</p>
                </div>
                <div>
                  <Badge className="bg-white/20 text-primary-foreground mb-2">Fast</Badge>
                  <p className="text-sm text-primary-foreground/90">Quick service turnaround</p>
                </div>
                <div>
                  <Badge className="bg-white/20 text-primary-foreground mb-2">Warranty</Badge>
                  <p className="text-sm text-primary-foreground/90">Service warranty included</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;