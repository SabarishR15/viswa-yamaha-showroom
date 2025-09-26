import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Star, Shield, Wrench, MapPin, Phone, Mail } from 'lucide-react';
import heroImage from '@/assets/yamaha-hero.jpg';

const Home = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Premium Quality',
      description: 'Authentic Yamaha motorcycles and scooters with genuine parts and accessories.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Warranty Support',
      description: 'Comprehensive warranty coverage and reliable after-sales service support.',
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Expert Service',
      description: 'Certified technicians providing professional maintenance and repair services.',
    },
  ];

  const quickStats = [
    { label: 'Years of Service', value: '15+' },
    { label: 'Happy Customers', value: '5000+' },
    { label: 'Bikes Sold', value: '2500+' },
    { label: 'Service Records', value: '10000+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Trusted
              <span className="block bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Yamaha Partner
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience the thrill of Yamaha at Viswa Yamaha, Kozhinjampara. 
              Premium motorcycles, professional service, and unmatched expertise in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/bikes">
                  Explore Bikes <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/service">Book Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From high-performance sports bikes to elegant scooters, discover the perfect Yamaha for your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover-lift shadow-card hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-primary-foreground font-bold">🏍️</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Motorcycles</h3>
                <p className="text-muted-foreground mb-6">
                  Discover our range of high-performance motorcycles including R15, FZ, R3, FZ250, and MT15.
                </p>
                <Button variant="yamaha" asChild>
                  <Link to="/bikes">
                    View Bikes <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift shadow-card hover:shadow-xl transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-primary-foreground font-bold">🛵</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Scooters</h3>
                <p className="text-muted-foreground mb-6">
                  Explore our elegant scooter collection featuring Fascino, Ray ZR, Street Rally, and Aerox 155.
                </p>
                <Button variant="yamaha" asChild>
                  <Link to="/scooters">
                    View Scooters <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Viswa Yamaha?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to quality, service, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-6 group-hover:scale-110 transition-bounce">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-hero text-primary-foreground shadow-hero">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Yamaha?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Visit our showroom in Kozhinjampara or book a service appointment today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/about">Visit Showroom</Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/service">Book Service</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;