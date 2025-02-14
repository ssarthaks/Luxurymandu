import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Wagyu Steak",
    description: "Premium Japanese Wagyu A5 grade beef, carefully selected and grilled to perfection. Served with seasonal vegetables and truffle mashed potatoes.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069",
    details: [
      "Grade: A5 Japanese Wagyu",
      "Origin: Miyazaki Prefecture, Japan",
      "Serving Size: 8oz (225g)",
      "Accompaniments: Seasonal vegetables, truffle mashed potatoes",
      "Preparation: Grilled to your preference",
    ],
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-3xl font-semibold text-purple-800">
              ${product.price}
            </p>
            <p className="text-gray-600">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Product Details</h2>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-800 rounded-full" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button size="lg" className="w-full">
              <Link to="/cart">Add to Cart - ${(product.price * quantity).toFixed(2)}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;