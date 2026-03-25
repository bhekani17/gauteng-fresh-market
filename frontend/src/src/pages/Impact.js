import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Sprout, GraduationCap, TrendingUp, Award, ArrowRight, HeartHandshake, MessageCircle } from 'lucide-react';
import MediaGallery from '../components/MediaGallery';

const Impact = () => {
  // Gallery Images - Youth working on farms
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80",
      caption: "Youth learning sustainable farming techniques in Gauteng"
    },
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
      caption: "Harvesting fresh vegetables - Building skills and confidence"
    },
    {
      url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&q=80",
      caption: "Team collaboration during planting season"
    },
    {
      url: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=1200&q=80",
      caption: "Young farmers tending to livestock with care"
    },
    {
      url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80",
      caption: "Learning organic farming practices for a sustainable future"
    },
    {
      url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&q=80",
      caption: "Proud youth displaying their harvest - From street life to farm life"
    }
  ];

  // Video Gallery - Training and Impact Stories
  const galleryVideos = [
    {
      title: "Youth Empowerment Through Agriculture",
      description: "See how we're transforming lives through farming skills and employment",
      thumbnail: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "5:30"
    },
    {
      title: "From Streets to Fields: Thabo's Story",
      description: "A young man's journey from homelessness to becoming a skilled farmer",
      thumbnail: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "4:15"
    },
    {
      title: "Skills Training Program Overview",
      description: "Inside our comprehensive agricultural training program for youth",
      thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "6:45"
    },
    {
      title: "Community Impact: 150+ Lives Changed",
      description: "Hear from families whose lives have been transformed by this program",
      thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "7:20"
    },
    {
      title: "Sustainable Farming Techniques",
      description: "Youth learning eco-friendly farming methods for the future",
      thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "5:50"
    },
    {
      title: "Harvest Day Celebration",
      description: "Celebrating success with our youth farmers and their families",
      thumbnail: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      duration: "3:30"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Thabo M.",
      age: 19,
      story: "Before joining Gauteng Fresh Market, I was on the streets with no direction. Now I'm learning farming skills, earning a living, and supporting my family. This program changed my life.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      id: 2,
      name: "Lerato K.",
      age: 21,
      story: "I never thought agriculture could be my career. The training I received here opened my eyes to sustainable farming. I'm now a team leader and mentor to other youth.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      id: 3,
      name: "Sipho N.",
      age: 18,
      story: "This program saved me from drug abuse. Working with the land and seeing things grow gave me purpose. I'm clean now and building a future for myself.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ];

  const impactAreas = [
    {
      icon: Users,
      title: "Youth Employment",
      description: "150+ young people employed in agriculture",
      stat: "150+",
      color: "orange"
    },
    {
      icon: GraduationCap,
      title: "Skills Training",
      description: "Comprehensive agricultural training programs",
      stat: "200+",
      color: "green"
    },
    {
      icon: Heart,
      title: "Families Supported",
      description: "Helping families break the cycle of poverty",
      stat: "50+",
      color: "earth"
    },
    {
      icon: TrendingUp,
      title: "Community Growth",
      description: "Building sustainable agricultural communities",
      stat: "100%",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-earth-700/90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            Our Impact 💚
          </h1>
          <p className="text-xl text-gray-100">
            Transforming lives through agriculture, one youth at a time
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            More Than Just Fresh Produce
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Gauteng Fresh Market was founded with a powerful mission: to empower youth in our community 
            by providing opportunities in agriculture and farming. We believe that every young person 
            deserves a chance to build a meaningful future, free from the dangers of street life, 
            drug abuse, and harmful activities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you shop with us, you're not just buying fresh products—you're investing in the 
            future of Gauteng's youth, supporting sustainable agriculture, and building stronger communities.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Impact by Numbers</h2>
            <p className="text-xl text-orange-100">Real change, measurable results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <area.icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-bold mb-2">{area.stat}</div>
                <div className="text-xl font-semibold mb-2">{area.title}</div>
                <p className="text-orange-100">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            How We Empower Youth
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive approach to youth development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Sprout className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Skills Training</h3>
            <p className="text-gray-600">
              Comprehensive agricultural training covering farming techniques, livestock management, 
              and sustainable practices. Youth learn valuable skills for lifelong careers.
            </p>
          </div>

          <div className="card p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Employment Opportunities</h3>
            <p className="text-gray-600">
              Direct employment in farming, harvesting, packaging, and delivery. Fair wages and 
              safe working conditions help youth support themselves and their families.
            </p>
          </div>

          <div className="card p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-200 rounded-full mb-4">
              <Heart className="w-8 h-8 text-earth-700" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">Mentorship & Support</h3>
            <p className="text-gray-600">
              Ongoing mentorship, counseling, and community support. We help youth overcome 
              challenges and build confidence for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Media Gallery - Photos and Videos */}
      <section className="section-container bg-gradient-to-b from-white to-earth-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            See Our Impact in Action 🎬
          </h2>
          <p className="text-lg text-gray-600">
            Photos and videos showcasing youth transformation through agriculture
          </p>
        </div>
        
        <MediaGallery images={galleryImages} videos={galleryVideos} />
      </section>

      {/* Success Stories */}
      <section className="section-container bg-earth-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Success Stories 🌟
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from youth whose lives have been transformed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">Age {testimonial.age}</p>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonial.story}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Get Involved 🤝
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            There are many ways you can support our mission and help empower youth in Gauteng
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <ArrowRight className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Shop With Us</h3>
              <p className="text-gray-600 mb-4">
                Every purchase directly supports youth employment and training programs
              </p>
              <Link to="/shop" className="btn-primary w-full">
                Browse Products
              </Link>
            </div>

            <div className="card p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <HeartHandshake className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Share your skills and time to mentor and train young people
              </p>
              <Link to="/contact" className="btn-community w-full">
                Learn More
              </Link>
            </div>

            <div className="card p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-earth-200 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-earth-700" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Help us reach more people by sharing our mission with your network
              </p>
              <a 
                href="https://wa.me/27123456789?text=I'd like to learn more about Gauteng Fresh Market's youth empowerment program"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-donate w-full"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-green text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Together, We Can Change Lives
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join us in empowering Gauteng's youth through agriculture and sustainable farming
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="btn-secondary inline-flex items-center justify-center space-x-2">
              <span>Shop & Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-green-500 inline-flex items-center justify-center space-x-2">
              <span>Get Involved</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
