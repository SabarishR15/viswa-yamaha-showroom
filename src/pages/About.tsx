import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Award, 
  Users, 
  Wrench,
  ArrowRight,
  Calendar,
  MessageCircle
} from 'lucide-react';

const About = () => {
  const contact = {
    address: 'Kozhinjampara, Palakkad, Kerala 678555',
    phone: '+91 8281302641',
    email: 'viswayamaha70@gmail.com',
    hours: {
      weekdays: '9:00 AM - 7:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: 'Closed'
    }
  };

  const team = [
    {
      name: 'Arun',
      role: 'Showroom Manager',
      experience: '8+ years',
      expertise: 'Sales & Customer Relations'
    },
    {
      name: 'Ranjith',
      role: 'Chief Technician',
      experience: '15+ years',
      expertise: 'Engine & Transmission'
    },
    {
      name: 'Mahindran',
      role: 'mechanic',
      experience: '8+ years',
      expertise: 'Customer Service & Scheduling'
    },
    {
      name: 'Ebin',
      role: 'Parts Manager',
      experience: '10+ years',
      expertise: 'Genuine Parts & Inventory'
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Yamaha Excellence Award',
      year: '2023',
      description: 'Best Dealer Performance - South India'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: '5000+ Happy Customers',
      year: 'Since 2015',
      description: 'Serving the community with quality'
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Certified Service Center',
      year: '2020',
      description: 'Yamaha Authorized Service Excellence'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: '4.8/5 Customer Rating',
      year: 'Current',
      description: 'Based on 1200+ reviews'
    }
  ];

  const services = [
    'New Vehicle Sales',
    'Used Vehicle Trading',
    'Genuine Parts & Accessories',
    'Authorized Service & Repair',
    'Insurance Assistance',
    'Finance & Loan Assistance',
    'Extended Warranty Plans',
    'Annual Maintenance Contracts'
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Viswa Yamaha</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Your trusted Yamaha partner in Palakkad since 2015. We bring you the finest motorcycles, 
            scooters, and unmatched service experience in Kerala.
          </p>
          <Badge className="bg-primary text-primary-foreground text-sm px-4 py-2">
            Authorized Yamaha Dealer
          </Badge>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Established in 2015, Viswa Yamaha has been serving the people of Palakkad and 
                  surrounding areas with dedication and commitment to excellence. What started as 
                  a small dealership has grown into one of Kerala's most trusted Yamaha partners.
                </p>
                <p>
                  Located in the heart of Kozhinjampara, we have witnessed thousands of dreams 
                  come true as customers found their perfect Yamaha companion. From the first-time 
                  rider to the seasoned enthusiast, we cater to every need with personalized service.
                </p>
                <p>
                  Our commitment extends beyond just selling vehicles. We believe in building 
                  relationships, providing genuine advice, and ensuring every customer experiences 
                  the true joy of owning a Yamaha.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2500+</div>
                  <div className="text-sm text-muted-foreground">Vehicles Sold</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Services Done</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Recognition of our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-card hover-lift transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{achievement.title}</h3>
                  <Badge variant="secondary" className="mb-2">{achievement.year}</Badge>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for all your Yamaha needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-smooth">
                <CardContent className="p-4 text-center">
                  <div className="h-2 w-2 bg-primary rounded-full mx-auto mb-3"></div>
                  <p className="text-sm font-medium text-foreground">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to serving you better
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover-lift transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <Badge variant="outline" className="text-xs mb-2">{member.experience}</Badge>
                  <p className="text-xs text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Showroom</h2>
            <p className="text-lg text-muted-foreground">
              Come and experience the Yamaha difference at our showroom
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Address</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{contact.address}</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Phone</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary">{contact.phone}</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Email</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{contact.email}</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon - Fri</span>
                    <span className="font-medium">{contact.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">{contact.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">{contact.hours.sunday}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder & Actions */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground mb-2">Interactive Map Coming Soon</p>
                      <p className="text-sm text-muted-foreground">
                        Located in Kozhinjampara, Palakkad, Kerala
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="shadow-card hover-lift transition-smooth">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Schedule a Visit</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Book an appointment for a personalized experience
                    </p>
                    <Button variant="yamaha" size="sm" asChild>
                      <Link to="/service">
                        Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover-lift transition-smooth">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Get Directions</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Call us for detailed directions to our showroom
                    </p>
                    <Button variant="outline" size="sm">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero text-primary-foreground shadow-hero">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Yamaha?</h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Visit us today and discover why thousands of customers trust Viswa Yamaha 
                for their riding dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/bikes">Explore Bikes</Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/scooters">View Scooters</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;