const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

// Sample products data
const products = [
  // LIVESTOCK
  {
    name: "Premium Beef Cattle",
    category: "livestock",
    price: 15000,
    unit: "per head",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    description: "Healthy, grass-fed beef cattle. Perfect for farming or meat production. Well-maintained and vaccinated.",
    stock: 12,
    featured: true,
    rating: 4.8
  },
  {
    name: "Dairy Cows",
    category: "livestock",
    price: 18000,
    unit: "per head",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
    description: "High-yield dairy cows producing quality milk. Healthy and well-cared for.",
    stock: 8,
    featured: false,
    rating: 4.7
  },
  {
    name: "Free-Range Chickens",
    category: "livestock",
    price: 150,
    unit: "per chicken",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    description: "Healthy free-range chickens. Great for eggs or meat. Organically raised.",
    stock: 50,
    featured: true,
    rating: 4.9
  },
  {
    name: "Boer Goats",
    category: "livestock",
    price: 3500,
    unit: "per goat",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
    description: "Premium Boer goats for meat production. Hardy and fast-growing breed.",
    stock: 15,
    featured: false,
    rating: 4.6
  },
  {
    name: "Sheep (Dorper)",
    category: "livestock",
    price: 2800,
    unit: "per sheep",
    image: "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=800&q=80",
    description: "Dorper sheep known for quality meat. Adaptable to various climates.",
    stock: 20,
    featured: false,
    rating: 4.5
  },
  {
    name: "Pigs (Large White)",
    category: "livestock",
    price: 2500,
    unit: "per pig",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
    description: "Large White pigs for pork production. Fast-growing and efficient.",
    stock: 18,
    featured: false,
    rating: 4.4
  },

  // VEGETABLES
  {
    name: "Fresh Tomatoes",
    category: "vegetables",
    price: 25,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&q=80",
    description: "Vine-ripened tomatoes. Perfect for salads and cooking. Harvested daily.",
    stock: 200,
    featured: true,
    rating: 4.9
  },
  {
    name: "Organic Spinach",
    category: "vegetables",
    price: 30,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80",
    description: "Fresh organic spinach. Rich in iron and nutrients. Pesticide-free.",
    stock: 150,
    featured: true,
    rating: 4.8
  },
  {
    name: "Carrots",
    category: "vegetables",
    price: 20,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
    description: "Crunchy fresh carrots. High in beta-carotene. Great for snacking.",
    stock: 180,
    featured: false,
    rating: 4.7
  },
  {
    name: "Bell Peppers",
    category: "vegetables",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=800&q=80",
    description: "Colorful bell peppers. Sweet and crisp. Perfect for stir-fries.",
    stock: 120,
    featured: true,
    rating: 4.8
  },
  {
    name: "Lettuce",
    category: "vegetables",
    price: 18,
    unit: "per head",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=800&q=80",
    description: "Crisp fresh lettuce. Ideal for salads. Grown hydroponically.",
    stock: 100,
    featured: false,
    rating: 4.6
  },
  {
    name: "Potatoes",
    category: "vegetables",
    price: 15,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    description: "Fresh potatoes. Versatile for any dish. Locally grown.",
    stock: 300,
    featured: false,
    rating: 4.5
  },
  {
    name: "Onions",
    category: "vegetables",
    price: 22,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=80",
    description: "Fresh yellow onions. Essential cooking ingredient. Long shelf life.",
    stock: 250,
    featured: false,
    rating: 4.6
  },
  {
    name: "Butternut Squash",
    category: "vegetables",
    price: 28,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1570268302770-756ee9f5c9e7?w=800&q=80",
    description: "Sweet butternut squash. Perfect for soups and roasting.",
    stock: 90,
    featured: false,
    rating: 4.7
  },

  // FRUITS
  {
    name: "Fresh Strawberries",
    category: "fruits",
    price: 45,
    unit: "per punnet",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    description: "Sweet juicy strawberries. Perfect for desserts. Picked fresh daily.",
    stock: 80,
    featured: true,
    rating: 4.9
  },
  {
    name: "Apples (Golden Delicious)",
    category: "fruits",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    description: "Crisp Golden Delicious apples. Sweet and crunchy. Great for snacking.",
    stock: 200,
    featured: true,
    rating: 4.8
  },
  {
    name: "Oranges",
    category: "fruits",
    price: 30,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80",
    description: "Juicy sweet oranges. High in Vitamin C. Perfect for fresh juice.",
    stock: 250,
    featured: false,
    rating: 4.7
  },
  {
    name: "Bananas",
    category: "fruits",
    price: 25,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    description: "Fresh ripe bananas. Energy-packed and delicious. Perfect for smoothies.",
    stock: 300,
    featured: false,
    rating: 4.8
  },
  {
    name: "Grapes (Red)",
    category: "fruits",
    price: 50,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1599819177908-4e3b1c4c1e10?w=800&q=80",
    description: "Sweet seedless red grapes. Perfect for snacking. Antioxidant-rich.",
    stock: 100,
    featured: true,
    rating: 4.9
  },
  {
    name: "Watermelon",
    category: "fruits",
    price: 20,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784210?w=800&q=80",
    description: "Sweet juicy watermelon. Refreshing and hydrating. Summer favorite.",
    stock: 150,
    featured: false,
    rating: 4.7
  },
  {
    name: "Avocados",
    category: "fruits",
    price: 40,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
    description: "Creamy ripe avocados. Nutrient-dense superfood. Perfect for toast.",
    stock: 120,
    featured: true,
    rating: 4.9
  },
  {
    name: "Mangoes",
    category: "fruits",
    price: 55,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&q=80",
    description: "Sweet tropical mangoes. Juicy and aromatic. Rich in vitamins.",
    stock: 80,
    featured: false,
    rating: 4.8
  }
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${products.length} products`);

    // Disconnect
    await mongoose.disconnect();
    console.log('👋 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeder
seedProducts();
