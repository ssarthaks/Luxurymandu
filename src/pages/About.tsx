import { motion } from 'framer-motion';
import { Award, Clock, Truck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2020, Luxurymandu has been bringing the finest dining experiences
            to your doorstep. We believe that luxury dining shouldn't be confined to
            restaurants – it should be accessible in the comfort of your home.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <feature.icon className="h-12 w-12 text-purple-800 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-gray-600">
              To revolutionize the food delivery experience by bringing restaurant-quality
              luxury dining to homes across Nepal, while maintaining the highest standards
              of quality and service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="text-gray-600">
              To become Nepal's premier luxury food delivery service, known for our
              exceptional quality, innovative cuisine, and outstanding customer service.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-purple-800 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients and expert preparation",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot and fresh delivery within 45 minutes",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced chefs and delivery professionals",
  },
  {
    icon: Truck,
    title: "Wide Coverage",
    description: "Serving all major areas in Kathmandu Valley",
  },
];

const team = [
  {
    name: "Aarav Sharma",
    role: "Executive Chef",
    description: "15 years of experience in luxury restaurants across Asia",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2068",
  },
  {
    name: "Priya Patel",
    role: "Operations Manager",
    description: "Ensuring smooth delivery and customer satisfaction",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961",
  },
  {
    name: "Raj Kumar",
    role: "Customer Experience",
    description: "Dedicated to providing the best service possible",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
  },
];

export default About;