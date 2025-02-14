import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast"; // Import the toast utility
import { Toaster } from "@/components/ui/toaster"; // Import the Toaster component

const Home = () => {
  // Function to handle "Add to Cart" action
  const handleAddToCart = (dishName: string) => {
    toast({
      title: "Added to Cart",
      description: `${dishName} has been added to your cart!`,
      variant: "default", 
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience Luxury in Every Bite
            </h1>
            <p className="text-xl mb-8">
              Discover a world of exquisite flavors delivered right to your doorstep.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-purple-800 hover:bg-purple-900"
            >
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="w-full h-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-purple-800 text-white px-2 py-1 rounded">
                    ${dish.price}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleAddToCart(dish.name)}
                >
                  Add to Cart
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
};

const categories = [
  {
    name: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=2070",
  },
  {
    name: "Lunch",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2070",
  },
  {
    name: "Beverages",
    image:
      "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070",
  },
];

const featuredDishes = [
  {
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with herbs and lemon",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1485704686097-ed47f7263ca4?q=80&w=2070",
  },
  {
    name: "Truffle Pasta",
    description: "Homemade pasta with black truffle sauce",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070",
  },
  {
    name: "Wagyu Steak",
    description: "Premium Japanese Wagyu A5 grade",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
  },
  {
    name: "Lobster Thermidor",
    description: "Classic French dish with fresh lobster",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070",
  },
];

export default Home;
