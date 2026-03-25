import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-500 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Gauteng Fresh Market
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted source for premium farm-fresh livestock, vegetables, and fruits in Gauteng, South Africa. Quality you can taste! 🌿
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-300 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-gold-300 transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-gold-300 transition-colors duration-200">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=livestock" className="hover:text-gold-300 transition-colors duration-200">
                  🐄 Livestock
                </Link>
              </li>
              <li>
                <Link to="/shop?category=vegetables" className="hover:text-gold-300 transition-colors duration-200">
                  🥦 Vegetables
                </Link>
              </li>
              <li>
                <Link to="/shop?category=fruits" className="hover:text-gold-300 transition-colors duration-200">
                  🍎 Fruits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Farm Road, Pretoria<br />
                  Gauteng, South Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-300 flex-shrink-0" />
                <a href="tel:+27123456789" className="text-sm hover:text-gold-300 transition-colors duration-200">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-300 flex-shrink-0" />
                <a href="mailto:info@gautengfreshmarket.co.za" className="text-sm hover:text-gold-300 transition-colors duration-200">
                  info@gautengfreshmarket.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Gauteng Fresh Market. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="hover:text-gold-300 transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-gold-300 transition-colors duration-200">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
