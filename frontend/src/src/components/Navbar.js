import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf, Phone, Mail } from 'lucide-react';

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/impact', label: 'Our Impact' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar with Contact Info */}
      <div className="bg-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+27123456789" className="flex items-center space-x-2 hover:text-gold-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+27 12 345 6789</span>
              </a>
              <a href="mailto:info@gautengfreshmarket.co.za" className="flex items-center space-x-2 hover:text-gold-300 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">info@gautengfreshmarket.co.za</span>
              </a>
            </div>
            <div className="text-xs hidden md:block">
              <span>🌿 Farm Fresh Quality | Supporting Youth Employment</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-green p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-green-500">
                Gauteng Fresh Market
              </span>
              <span className="text-xs text-gray-600">Farm Fresh Quality 🌿</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-green-500 border-b-2 border-green-500'
                    : 'text-gray-700 hover:text-green-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2 hover:bg-green-50 rounded-lg transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6 text-green-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-green-500" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-green-50 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-green-500" />
              ) : (
                <Menu className="w-6 h-6 text-green-500" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-green-50 text-green-500'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
