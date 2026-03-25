// Product database for Gauteng Fresh Market
export const products = [
  // LIVESTOCK 🐄
  {
    id: 1,
    name: "Premium Beef Cattle",
    category: "livestock",
    price: 15000,
    unit: "per head",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    description: "Healthy, grass-fed beef cattle. Perfect for farming or meat production. Well-maintained and vaccinated.",
    stock: 12,
    featured: true
  },
  {
    id: 2,
    name: "Dairy Cows",
    category: "livestock",
    price: 18000,
    unit: "per head",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
    description: "High-yield dairy cows producing quality milk. Healthy and well-cared for.",
    stock: 8,
    featured: false
  },
  {
    id: 3,
    name: "Free-Range Chickens",
    category: "livestock",
    price: 150,
    unit: "per chicken",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
    description: "Healthy free-range chickens. Great for eggs or meat. Organically raised.",
    stock: 50,
    featured: true
  },
  {
    id: 4,
    name: "Boer Goats",
    category: "livestock",
    price: 3500,
    unit: "per goat",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
    description: "Premium Boer goats for meat production. Hardy and fast-growing breed.",
    stock: 15,
    featured: false
  },
  {
    id: 5,
    name: "Sheep (Dorper)",
    category: "livestock",
    price: 2800,
    unit: "per sheep",
    image: "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=800&q=80",
    description: "Dorper sheep, well-suited for South African climate. Quality meat production.",
    stock: 20,
    featured: false
  },

  // VEGETABLES 🥦
  {
    id: 6,
    name: "Fresh Spinach",
    category: "vegetables",
    price: 25,
    unit: "per bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&q=80",
    description: "Crisp, fresh spinach harvested daily. Rich in iron and nutrients.",
    stock: 100,
    featured: true
  },
  {
    id: 7,
    name: "Organic Tomatoes",
    category: "vegetables",
    price: 30,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1546470427-e26264be0b0d?w=800&q=80",
    description: "Juicy, vine-ripened tomatoes. Grown without pesticides.",
    stock: 150,
    featured: true
  },
  {
    id: 8,
    name: "Fresh Cabbage",
    category: "vegetables",
    price: 20,
    unit: "per head",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80",
    description: "Crisp green cabbage. Perfect for salads, stews, and traditional dishes.",
    stock: 80,
    featured: false
  },
  {
    id: 9,
    name: "Butternut Squash",
    category: "vegetables",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1591271300850-c0f0c3f6d1b0?w=800&q=80",
    description: "Sweet butternut squash. Great for soups and roasting.",
    stock: 60,
    featured: false
  },
  {
    id: 10,
    name: "Green Beans",
    category: "vegetables",
    price: 40,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1599818403341-c6e4f2e3b14f?w=800&q=80",
    description: "Fresh, crisp green beans. Hand-picked daily.",
    stock: 70,
    featured: false
  },
  {
    id: 11,
    name: "Carrots",
    category: "vegetables",
    price: 22,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
    description: "Sweet, crunchy carrots. Rich in beta-carotene.",
    stock: 90,
    featured: false
  },
  {
    id: 12,
    name: "Potatoes",
    category: "vegetables",
    price: 18,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    description: "Fresh potatoes. Perfect for any meal.",
    stock: 200,
    featured: true
  },

  // FRUITS 🍎
  {
    id: 13,
    name: "Fresh Apples",
    category: "fruits",
    price: 45,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80",
    description: "Crisp, sweet apples. Locally grown in Gauteng.",
    stock: 120,
    featured: true
  },
  {
    id: 14,
    name: "Ripe Bananas",
    category: "fruits",
    price: 28,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
    description: "Sweet, ripe bananas. Perfect for snacking.",
    stock: 150,
    featured: false
  },
  {
    id: 15,
    name: "Juicy Oranges",
    category: "fruits",
    price: 35,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=800&q=80",
    description: "Fresh, juicy oranges. High in Vitamin C.",
    stock: 100,
    featured: true
  },
  {
    id: 16,
    name: "Strawberries",
    category: "fruits",
    price: 65,
    unit: "per punnet",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&q=80",
    description: "Sweet, fresh strawberries. Perfect for desserts.",
    stock: 40,
    featured: false
  },
  {
    id: 17,
    name: "Watermelon",
    category: "fruits",
    price: 50,
    unit: "per melon",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784670?w=800&q=80",
    description: "Sweet, refreshing watermelon. Perfect for summer.",
    stock: 30,
    featured: false
  },
  {
    id: 18,
    name: "Grapes",
    category: "fruits",
    price: 55,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1599819177331-6d69a5f4a0c7?w=800&q=80",
    description: "Sweet, seedless grapes. Great for snacking.",
    stock: 80,
    featured: false
  },
  {
    id: 19,
    name: "Peaches",
    category: "fruits",
    price: 48,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1629828874514-944d8c5e8f3f?w=800&q=80",
    description: "Juicy, ripe peaches. Locally sourced.",
    stock: 60,
    featured: false
  },
  {
    id: 20,
    name: "Avocados",
    category: "fruits",
    price: 40,
    unit: "per avocado",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
    description: "Creamy, ripe avocados. Perfect for salads and toast.",
    stock: 70,
    featured: true
  }
];

// Get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Categories
export const categories = [
  {
    id: 'livestock',
    name: 'Livestock',
    icon: '🐄',
    description: 'Quality cattle, chickens, goats, and more',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: '🥦',
    description: 'Fresh, organic vegetables daily',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80'
  },
  {
    id: 'fruits',
    name: 'Fruits',
    icon: '🍎',
    description: 'Sweet, ripe fruits from local farms',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80'
  }
];
