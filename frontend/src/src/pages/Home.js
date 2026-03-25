import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Leaf, Star, Heart, Users, Sprout } from 'lucide-react';
import { getFeaturedProducts, categories } from '../data/products';

const Home = ({ addToCart }) => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="inline-block">
                <span className="impact-badge text-sm px-4 py-2">
                  🌱 Empowering Youth Through Agriculture
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-bold text-gray-900 leading-tight">
                Fresh From Farm
                <span className="block text-green-500">To Your Table</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Premium farm-fresh products while empowering Gauteng's youth. Every purchase supports youth employment, skills development, and a brighter future.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-6">
                <div>
                  <div className="text-3xl font-bold text-green-500">150+</div>
                  <div className="text-sm text-gray-600">Youth Employed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-sm text-gray-600">Families Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="btn-primary inline-flex items-center justify-center space-x-2 text-lg px-8 py-4">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/impact" className="btn-outline inline-flex items-center justify-center space-x-2 text-lg px-8 py-4">
                  <span>Our Impact Story</span>
                </Link>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="space-y-4">
                <div className="h-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                    alt="Fresh vegetables"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="h-1/3 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=800&q=80"
                    alt="Fresh fruits"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-1/3 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                    alt="Youth farming"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="h-2/3 rounded-2xl overflow-hidden shadow-xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&q=80"
                    alt="Farm fresh produce"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold mb-1">💚 100% Fresh</p>
                      <p className="text-xs text-gray-200">Harvested daily by our youth team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-green-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Leaf className="w-8 h-8" />
              <div className="text-left">
                <p className="font-semibold">100% Fresh</p>
                <p className="text-sm text-green-100">Harvested Daily</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-8 h-8" />
              <div className="text-left">
                <p className="font-semibold">Fast Delivery</p>
                <p className="text-sm text-green-100">Across Gauteng</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8" />
              <div className="text-left">
                <p className="font-semibold">Quality Guaranteed</p>
                <p className="text-sm text-green-100">Premium Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative section-container overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80')"
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Our Mission: Empowering Youth Through Agriculture 🌱
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Gauteng Fresh Market is more than just a marketplace—we're a movement to transform lives. 
            We provide opportunities for youth in Gauteng, helping them build careers in agriculture and 
            diverting them from street life, drug abuse, and harmful activities.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 text-center hover:shadow-2xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Youth Employment</h3>
            <p className="text-gray-600">
              Creating meaningful jobs and skills development opportunities in agriculture for young people
            </p>
          </div>
          <div className="card p-6 text-center hover:shadow-2xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-200 rounded-full mb-4">
              <Heart className="w-8 h-8 text-earth-700" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Community Impact</h3>
            <p className="text-gray-600">
              Educating communities about healthy living and providing alternatives to street life
            </p>
          </div>
          <div className="card p-6 text-center hover:shadow-2xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Sprout className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Sustainable Future</h3>
            <p className="text-gray-600">
              Building a sustainable agricultural ecosystem that benefits youth, farmers, and customers
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section - Horizontal Scroll */}
      <section className="relative section-container bg-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80')"
          }}
        ></div>
        <div className="relative text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Browse our selection of premium farm-fresh products
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end text-white p-8">
                <span className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-heading font-bold mb-2">{category.name}</h3>
                <p className="text-center text-gray-200 text-sm mb-4">{category.description}</p>
                <div className="inline-flex items-center space-x-2 text-gold-300 font-semibold text-sm">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative section-container bg-gray-50 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&q=80')"
          }}
        ></div>
        <div className="relative text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600">
            Check out our most popular items
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="badge-gold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Featured</span>
                    </span>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="impact-badge">
                      💚 Supports Youth
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-heading font-semibold text-lg mb-2 hover:text-green-500 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="mb-3">
                  <span className="text-xs text-orange-600 font-medium">
                    ✨ Every purchase empowers youth in Gauteng
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-500">
                      R{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">
                      {product.unit}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="w-full btn-primary mt-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-flex items-center space-x-2">
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Video Preview Section */}
      <section className="section-container bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Watch Our Impact Story 🎥
          </h2>
          <p className="text-lg text-gray-600">
            See how we're transforming lives through agriculture
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80"
              alt="Youth empowerment video"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center">
              <Link 
                to="/impact"
                className="bg-white/90 hover:bg-white p-6 rounded-full transform group-hover:scale-110 transition-all duration-300 mb-6"
              >
                <svg className="w-12 h-12 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </Link>
              <h3 className="text-white text-2xl font-heading font-bold mb-2">
                Youth Empowerment Through Agriculture
              </h3>
              <p className="text-white/90 mb-4">Watch the full story on our Impact page</p>
              <Link to="/impact" className="btn-community">
                View All Videos & Photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-green-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
            Every purchase supports youth employment and sustainable farming. Join thousands of customers making an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="bg-white text-green-600 hover:bg-green-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2">
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/impact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <span>See Our Impact</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
