import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Filter, Star, Search } from 'lucide-react';
import { productsAPI } from '../services/api';
import { categories } from '../data/products';

const Shop = ({ addToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [stockFilter, setStockFilter] = useState('all'); // all, inStock, lowStock
  const [sortBy, setSortBy] = useState('default'); // default, priceLow, priceHigh, name
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productsAPI.getAll();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    // Filter by stock status
    if (stockFilter === 'inStock') {
      filtered = filtered.filter(p => p.stock >= 10);
    } else if (stockFilter === 'lowStock') {
      filtered = filtered.filter(p => p.stock > 0 && p.stock < 10);
    }
    
    // Sort products
    if (sortBy === 'priceLow') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHigh') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, priceRange, stockFilter, sortBy, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header - Modern Design */}
      <div className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 via-green-700/85 to-green-800/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
                🌿 Fresh from the Farm
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
              Shop Premium Products
            </h1>
            <p className="text-xl text-green-50">
              Browse our selection of farm-fresh vegetables, fruits, and livestock. Every purchase supports youth employment in Gauteng.
            </p>
          </div>
        </div>
      </div>

      <div className="section-container">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-20 transition-all duration-200 text-lg"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <span className="text-xl">×</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="card p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-green-500" />
                <h2 className="text-xl font-heading font-semibold">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === 'all'
                        ? 'bg-green-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-green-500 text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span>{category.icon}</span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>R{priceRange[0]}</span>
                    <span>R{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPriceRange([0, 100])}
                      className="flex-1 text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Under R100
                    </button>
                    <button
                      onClick={() => setPriceRange([0, 5000])}
                      className="flex-1 text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50"
                    >
                      Under R5000
                    </button>
                  </div>
                </div>
              </div>

              {/* Stock Status Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Stock Status</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={stockFilter === 'all'}
                      onChange={() => setStockFilter('all')}
                      className="w-4 h-4 text-green-500 focus:ring-green-500"
                    />
                    <span className="text-sm">All Products</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={stockFilter === 'inStock'}
                      onChange={() => setStockFilter('inStock')}
                      className="w-4 h-4 text-green-500 focus:ring-green-500"
                    />
                    <span className="text-sm">In Stock (10+)</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="stock"
                      checked={stockFilter === 'lowStock'}
                      onChange={() => setStockFilter('lowStock')}
                      className="w-4 h-4 text-green-500 focus:ring-green-500"
                    />
                    <span className="text-sm">Low Stock (&lt;10)</span>
                  </label>
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                  setPriceRange([0, 20000]);
                  setStockFilter('all');
                  setSortBy('default');
                  setSearchParams({});
                }}
                className="w-full btn-outline text-sm py-2"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header with Sort */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-heading font-semibold text-gray-900">
                  {searchTerm ? (
                    `Search Results for "${searchTerm}"`
                  ) : selectedCategory === 'all' ? (
                    'All Products'
                  ) : (
                    categories.find(c => c.id === selectedCategory)?.name
                  )}
                </h2>
                <p className="text-gray-600 mt-1">
                  {searchTerm && (
                    <span>
                      Found {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} matching your search
                    </span>
                  )}
                  {!searchTerm && (
                    <span>
                      Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </p>
              </div>
              
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm text-gray-600 whitespace-nowrap">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="default">Default</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                <p className="mt-4 text-gray-600">Loading products...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <p className="text-xl font-semibold text-red-600 mb-2">Error Loading Products</p>
                  <p className="text-gray-600 mb-6">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn-primary"
                  >
                    Retry
                  </button>
                </div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product._id} className="product-card">
                    <Link to={`/product/${product._id}`}>
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                        />
                        {product.featured && (
                          <div className="absolute top-2 right-2">
                            <span className="badge-gold flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-current" />
                              <span>Featured</span>
                            </span>
                          </div>
                        )}
                        {product.stock < 10 && product.stock > 0 && (
                          <div className="absolute bottom-2 left-2">
                            <span className="badge-red">
                              Low Stock
                            </span>
                          </div>
                        )}
                        <div className="absolute top-2 left-2">
                          <span className="impact-badge">
                            💚 Supports Youth
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div className="p-5">
                      <Link to={`/product/${product._id}`}>
                        <h3 className="font-heading font-semibold text-lg mb-2 hover:text-green-500 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mb-3">
                        <span className="text-xs text-orange-600 font-medium">
                          ✨ Empowering Gauteng's youth
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-green-500">
                            R{product.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500 ml-1">
                            {product.unit}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Stock: {product.stock}
                        </span>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full btn-primary"
                        disabled={product.stock === 0}
                      >
                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-gray-900 mb-2">
                    {searchTerm ? 'No products found' : 'No products in this category'}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {searchTerm 
                      ? `We couldn't find any products matching "${searchTerm}". Try a different search term.`
                      : 'There are no products available in this category at the moment.'}
                  </p>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="btn-primary"
                    >
                      Clear Search
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
