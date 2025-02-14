import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDishes = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, prepared with the finest ingredients
            and served with elegance.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/product/${item.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-purple-800 text-white px-3 py-1 rounded-full">
                      ${item.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Button className="w-full">View Details</Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
  { label: 'Beverages', value: 'beverages' },
];

const menuItems = [
  {
    id: 1,
    name: "Eggs Benedict",
    description: "Poached eggs on English muffin with hollandaise sauce",
    price: 16.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2070",
  },
  {
    id: 2,
    name: "Wagyu Burger",
    description: "Premium Wagyu beef with truffle mayo and aged cheddar",
    price: 29.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070",
  },
  {
    id: 3,
    name: "Lobster Risotto",
    description: "Creamy risotto with fresh lobster and parmesan",
    price: 42.99,
    category: "dinner",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=2069",
  },
  {
    id: 4,
    name: "Artisanal Coffee",
    description: "Single-origin coffee with your choice of milk",
    price: 5.99,
    category: "beverages",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070",
  },
  {
    id: 5,
    name: "Vegan salad bowl",
    description: "Fresh greens, avocado, cherry tomatoes, and balsamic vinaigrette",
    price: 14.99,
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Seared Tuna Bowl",
    description: "Fresh tuna with quinoa, avocado, and ponzu sauce",
    price: 26.99,
    category: "lunch",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2069",
  },
];

export default Menu;