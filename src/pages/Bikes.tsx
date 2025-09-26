import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Fuel, Gauge, Zap, Star } from 'lucide-react';
import r15Image from '@/assets/r15.jpg';
import fzImage from '@/assets/fz.jpg';

const Bikes = () => {
  const bikes = [
    {
      id: 'r15',
      name: 'Yamaha R15 V4',
      price: '₹1,81,300',
      image: r15Image,
      category: 'Sports',
      highlights: ['155cc Engine', 'VVA Technology', 'USD Forks', 'Quick Shifter'],
      specs: {
        engine: '155cc, 4-Stroke, SOHC, 4-Valve',
        power: '18.4 PS @ 10,000 RPM',
        torque: '14.2 Nm @ 7,500 RPM',
        mileage: '40 KMPL',
        topSpeed: '136 KMPH',
        fuelTank: '11 Liters'
      },
      colors: ['Racing Blue', 'Monster Energy Black', 'Dark Knight'],
      features: [
        'Variable Valve Actuation (VVA)',
        'Assist & Slipper Clutch',
        'Upside Down (USD) Front Fork',
        'Quick Shifter',
        'Dual Channel ABS',
        'Digital Instrument Cluster'
      ]
    },
    {
      id: 'fz',
      name: 'Yamaha FZ 25',
      price: '₹1,46,300',
      image: fzImage,
      category: 'Naked',
      highlights: ['249cc Engine', 'Fuel Injection', 'LED Lighting', 'Single Channel ABS'],
      specs: {
        engine: '249cc, 4-Stroke, SOHC, 2-Valve',
        power: '20.9 PS @ 8,000 RPM',
        torque: '20.1 Nm @ 6,000 RPM',
        mileage: '45 KMPL',
        topSpeed: '132 KMPH',
        fuelTank: '14 Liters'
      },
      colors: ['Metallic Black', 'Racing Blue', 'Cyan Blue'],
      features: [
        'Fuel Injection System',
        'LED Headlight & Tail Light',
        'Digital Instrument Panel',
        'Single Channel ABS',
        'Side Stand Engine Cut-off Switch',
        'Comfortable Riding Position'
      ]
    },
    {
      id: 'r3',
      name: 'Yamaha R3',
      price: '₹4,64,000',
      image: r15Image,
      category: 'Super Sports',
      highlights: ['321cc Engine', 'Twin Cylinder', 'KYB Suspension', 'Dual Channel ABS'],
      specs: {
        engine: '321cc, 4-Stroke, DOHC, 4-Valve',
        power: '42 PS @ 10,750 RPM',
        torque: '29.5 Nm @ 9,000 RPM',
        mileage: '32 KMPL',
        topSpeed: '180 KMPH',
        fuelTank: '14 Liters'
      },
      colors: ['Yamaha Blue', 'Midnight Black', 'Icon Blue'],
      features: [
        'Liquid-Cooled Twin Cylinder Engine',
        'KYB Suspension',
        'Dual Channel ABS',
        'Assist & Slipper Clutch',
        'Digital Multi-Function Display',
        'Aerodynamic Design'
      ]
    },
    {
      id: 'fz250',
      name: 'Yamaha FZS 25',
      price: '₹1,55,300',
      image: fzImage,
      category: 'Naked',
      highlights: ['249cc Engine', 'Bluetooth Connectivity', 'LED Package', 'ABS'],
      specs: {
        engine: '249cc, 4-Stroke, SOHC, 2-Valve',
        power: '20.9 PS @ 8,000 RPM',
        torque: '20.1 Nm @ 6,000 RPM',
        mileage: '43 KMPL',
        topSpeed: '132 KMPH',
        fuelTank: '14 Liters'
      },
      colors: ['Metallic Black', 'Racing Blue', 'Vintage Red'],
      features: [
        'Bluetooth Connectivity',
        'Y-Connect Mobile App',
        'LED Headlight & Position Light',
        'Single Channel ABS',
        'Side Stand Engine Cut-off',
        'Digital Console'
      ]
    },
    {
      id: 'mt15',
      name: 'Yamaha MT-15',
      price: '₹1,68,300',
      image: r15Image,
      category: 'Naked',
      highlights: ['155cc Engine', 'VVA Technology', 'USD Forks', 'Naked Design'],
      specs: {
        engine: '155cc, 4-Stroke, SOHC, 4-Valve',
        power: '18.4 PS @ 10,000 RPM',
        torque: '14.2 Nm @ 7,500 RPM',
        mileage: '50 KMPL',
        topSpeed: '131 KMPH',
        fuelTank: '10 Liters'
      },
      colors: ['Metallic Black', 'Ice Fluo-Vermillion', 'Cyan Storm'],
      features: [
        'Variable Valve Actuation (VVA)',
        'Upside Down Front Fork',
        'Naked Street Fighter Design',
        'LED Headlight',
        'Digital Instrument Cluster',
        'Side Stand Switch'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Yamaha <span className="text-primary">Motorcycles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the thrill of Yamaha's legendary performance with our complete range of motorcycles. 
            From street-friendly nakeds to track-ready sports bikes.
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="space-y-8">
          {bikes.map((bike, index) => (
            <Card key={bike.id} className="shadow-card hover:shadow-xl transition-smooth overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={bike.image} 
                    alt={bike.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {bike.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-2xl font-bold text-primary">{bike.price}</p>
                      <p className="text-sm text-muted-foreground">Ex-showroom</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-3xl font-bold text-foreground mb-2">
                      {bike.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {bike.highlights.map((highlight, idx) => (
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
                        <p className="font-medium">{bike.specs.power}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Gauge className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Top Speed</p>
                        <p className="font-medium">{bike.specs.topSpeed}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Fuel className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Mileage</p>
                        <p className="font-medium">{bike.specs.mileage}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Engine</p>
                        <p className="font-medium">{bike.specs.engine.split(',')[0]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {bike.features.slice(0, 4).map((feature, idx) => (
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
                      {bike.colors.map((color, idx) => (
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-hero text-primary-foreground shadow-hero">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Can't Decide? Visit Our Showroom!
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Experience all our motorcycles in person and get expert guidance from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/about">Visit Showroom</Link>
                </Button>
                <Button variant="glass" size="lg" asChild>
                  <Link to="/service">Schedule Visit</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Bikes;