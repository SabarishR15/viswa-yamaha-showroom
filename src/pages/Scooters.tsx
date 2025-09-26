import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Fuel, Gauge, Zap, Star } from 'lucide-react';
import fascinoImage from '@/assets/yamaha-fascino.jpg';
import rayZrImage from '@/assets/yamaha-rayzr.jpg';
import aeroxImage from '@/assets/yamaha-aerox.jpg';

const Scooters = () => {
  const scooters = [
    {
      id: 'fascino',
      name: 'Yamaha Fascino 125',
      price: '₹81,930',
      image: fascinoImage,
      category: 'Premium',
      highlights: ['125cc Engine', 'Hybrid Technology', 'LED Package', 'Smart Key'],
      specs: {
        engine: '125cc, 4-Stroke, SOHC, 2-Valve',
        power: '8.2 PS @ 6,500 RPM',
        torque: '10.3 Nm @ 5,000 RPM',
        mileage: '68 KMPL',
        topSpeed: '85 KMPH',
        fuelTank: '5.2 Liters'
      },
      colors: ['Metallic White', 'Matte Copper', 'Matte Red', 'Cyan Blue'],
      features: [
        'Hybrid Technology',
        'Smart Key System',
        'LED Headlight & Position Light',
        'Digital Instrument Cluster',
        'USB Charging Port',
        'Bluetooth Connectivity'
      ]
    },
    {
      id: 'rayzr',
      name: 'Yamaha Ray ZR 125',
      price: '₹76,830',
      image: rayZrImage,
      category: 'Street',
      highlights: ['125cc Engine', 'Sporty Design', 'LED Lighting', 'Disc Brake'],
      specs: {
        engine: '125cc, 4-Stroke, SOHC, 2-Valve',
        power: '8.2 PS @ 6,500 RPM',
        torque: '10.3 Nm @ 5,000 RPM',
        mileage: '66 KMPL',
        topSpeed: '85 KMPH',
        fuelTank: '5.2 Liters'
      },
      colors: ['Matte Black', 'Racing Blue', 'Red', 'White'],
      features: [
        'Sporty Street Design',
        'LED Headlight',
        'Digital-Analog Combo Meter',
        'Front Disc Brake',
        'Side Stand Switch',
        'External Fuel Filler'
      ]
    },
    {
      id: 'street-rally',
      name: 'Yamaha Ray ZR Street Rally',
      price: '₹79,230',
      image: rayZrImage,
      category: 'Street',
      highlights: ['125cc Engine', 'Rally Graphics', 'Front Disc', 'Street Fighter Look'],
      specs: {
        engine: '125cc, 4-Stroke, SOHC, 2-Valve',
        power: '8.2 PS @ 6,500 RPM',
        torque: '10.3 Nm @ 5,000 RPM',
        mileage: '66 KMPL',
        topSpeed: '85 KMPH',
        fuelTank: '5.2 Liters'
      },
      colors: ['Matte Black', 'Matte Blue', 'Racing Red'],
      features: [
        'Street Rally Graphics',
        'Aggressive Styling',
        'LED Headlight',
        'Front Disc Brake',
        'Digital-Analog Instrument',
        'Sporty Seat Design'
      ]
    },
    {
      id: 'aerox',
      name: 'Yamaha Aerox 155',
      price: '₹1,43,730',
      image: aeroxImage,
      category: 'Maxi Scooter',
      highlights: ['155cc Engine', 'VVA Technology', 'Maxi Scooter', 'Smart Key'],
      specs: {
        engine: '155cc, 4-Stroke, SOHC, 4-Valve',
        power: '15 PS @ 8,000 RPM',
        torque: '13.9 Nm @ 6,500 RPM',
        mileage: '54 KMPL',
        topSpeed: '110 KMPH',
        fuelTank: '5.5 Liters'
      },
      colors: ['Matte Black', 'Racing Blue', 'Turbo Orange', 'Monster Energy'],
      features: [
        'Variable Valve Actuation (VVA)',
        'Maxi Scooter Design',
        'Smart Key System',
        'Traction Control System',
        'LCD Multi-Information Display',
        'Y-Connect Bluetooth'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Yamaha <span className="text-primary">Scooters</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover Yamaha's elegant and efficient scooter range. Perfect for city commuting with 
            style, comfort, and advanced technology.
          </p>
        </div>

        {/* Scooters Grid */}
        <div className="space-y-8">
          {scooters.map((scooter, index) => (
            <Card key={scooter.id} className="shadow-card hover:shadow-xl transition-smooth overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={scooter.image} 
                    alt={scooter.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {scooter.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-2xl font-bold text-primary">{scooter.price}</p>
                      <p className="text-sm text-muted-foreground">Ex-showroom</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl font-bold text-foreground mb-2">
                      {scooter.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {scooter.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Power</p>
                        <p className="font-medium">{scooter.specs.power}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Top Speed</p>
                        <p className="font-medium">{scooter.specs.topSpeed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Mileage</p>
                        <p className="font-medium">{scooter.specs.mileage}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Engine</p>
                        <p className="font-medium">{scooter.specs.engine.split(',')[0]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scooter.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Colors Available */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Available Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scooter.colors.map((color, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="yamaha" className="flex-1" asChild>
                      <Link to="/service">
                        Book Test Drive <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to="/about">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-16">
          <Card className="bg-gradient-card shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Why Choose Yamaha Scooters?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Fuel className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Excellent Mileage</h4>
                  <p className="text-sm text-muted-foreground">
                    Industry-leading fuel efficiency with advanced engine technology
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Smart Technology</h4>
                  <p className="text-sm text-muted-foreground">
                    Bluetooth connectivity, smart keys, and digital displays
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Elegant Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Stylish and sophisticated designs for modern urban lifestyle
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero text-primary-foreground shadow-hero">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready for Your Perfect Scooter?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Visit our showroom to experience the comfort and efficiency of Yamaha scooters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/about">Visit Showroom</Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/service">Book Test Ride</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Scooters;