import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Users, Award, Truck, Shield, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Split Layout */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-green-100 text-green-600 text-sm px-4 py-2 rounded-full font-semibold">
                  🌱 Our Story
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 leading-tight">
                Empowering Youth Through
                <span className="block text-green-500">Fresh Agriculture</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bringing farm-fresh quality to Gauteng families while transforming young lives since 2020.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">150+</p>
                    <p className="text-sm text-gray-600">Youth Employed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
                alt="Farm fresh produce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Gauteng Fresh Market was founded with a powerful dual mission: to provide the freshest, 
            highest-quality produce and livestock to families across Gauteng, while simultaneously 
            empowering youth through agriculture. We believe that every young person deserves an 
            opportunity to build a meaningful future, free from the dangers of street life and harmful activities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            What started as a small community initiative has grown into a thriving social enterprise. 
            We've trained and employed over 150 young people, giving them valuable agricultural skills, 
            steady income, and hope for the future. When you shop with us, you're not just buying 
            fresh products—you're investing in the transformation of young lives and building stronger communities.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Leaf className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Freshness First</h3>
            <p className="text-gray-600">
              We harvest and deliver products at peak freshness, ensuring maximum flavor and nutrition.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Community Focus</h3>
            <p className="text-gray-600">
              Supporting local farmers and building stronger communities through sustainable agriculture.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Customer Care</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority. We're here to serve you with excellence.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Quality Guaranteed</h3>
            <p className="text-gray-600">
              Every product meets our strict quality standards before reaching your door.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Truck className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Reliable, timely delivery across Gauteng to keep your products fresh.
            </p>
          </div>

          <div className="card p-8 text-center hover:shadow-2xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-8 h-8 text-gold-300" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Trust & Transparency</h3>
            <p className="text-gray-600">
              Honest pricing, clear sourcing, and open communication with our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-600 to-green-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">5000+</div>
              <div className="text-lg text-green-50">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-lg text-green-50">Local Farmers</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">100+</div>
              <div className="text-lg text-green-50">Products</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">4+</div>
              <div className="text-lg text-green-50">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            Why Choose Gauteng Fresh Market?
          </h2>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                🌱 Direct from Farm to Table
              </h3>
              <p className="text-gray-700">
                We eliminate middlemen, working directly with farmers to bring you the freshest 
                products at fair prices. This means better quality for you and better income for farmers.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                🏆 Quality You Can Trust
              </h3>
              <p className="text-gray-700">
                Every product is carefully inspected and selected to meet our high standards. 
                We stand behind everything we sell with our quality guarantee.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                🚚 Convenient Delivery
              </h3>
              <p className="text-gray-700">
                Order online and have fresh products delivered right to your door. We serve 
                all areas across Gauteng with fast, reliable delivery service.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                💚 Supporting Local Communities
              </h3>
              <p className="text-gray-700">
                When you shop with us, you're supporting local farmers and contributing to 
                sustainable agriculture in South Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied customers who trust Gauteng Fresh Market 
            for their fresh produce and livestock needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline inline-flex items-center justify-center space-x-2">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
