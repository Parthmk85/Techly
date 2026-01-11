'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for your business growth.',

    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',

    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: '🤖',
      title: 'AI & ML',
      description: 'Intelligent automation and machine learning solutions for business optimization.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-blue-50 to-white pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  🚀 Welcome to the Future of IT
                </span>
              </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Techly – <span className="gradient-text">Go Online With Technology</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Techly is a web app development company helping businesses go online with modern technology in Bhavnagar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="btn-primary text-lg px-8 py-4">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/services">
                  <button className="btn-secondary text-lg px-8 py-4">
                    Explore Services
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className={`relative ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-3 opacity-30"></div>
                <div className="relative h-full bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl animate-float">💡</div>
                    <h3 className="text-2xl font-bold text-gray-800">Innovation Meets Excellence</h3>
                    <p className="text-gray-600">Building tomorrow's technology today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          {/* Mobile Carousel - Only visible on mobile */}
          <div className="md:hidden relative max-w-2xl mx-auto">
            {/* Current Service Card */}
            <div className="card group cursor-pointer min-h-[400px] flex flex-col justify-center">
              <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                {services[currentServiceIndex].icon}
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <h3 className="text-3xl font-bold text-gray-800">{services[currentServiceIndex].title}</h3>
                {services[currentServiceIndex].comingSoon && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-gray-600 leading-relaxed text-center text-lg mb-6">
                {services[currentServiceIndex].description}
              </p>

            </div>

            {/* Left Arrow Button */}
            <button
              onClick={() => setCurrentServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => setCurrentServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentServiceIndex 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid - Only visible on tablet and above */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group cursor-pointer"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  {service.comingSoon && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button className="btn-primary text-lg px-8 py-4">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="gradient-text">Techly</span>?
              </h2>
              <p className="text-xl text-gray-600">
                We're not just another IT company. We're your technology partner committed to your success.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Expert Team', desc: 'Certified professionals with years of industry experience' },
                  { title: '24/7 Support', desc: 'Round-the-clock assistance whenever you need it' },
                  { title: 'Proven Track Record', desc: 'Successfully delivered 500+ projects worldwide' },
                  { title: 'Cutting-Edge Tech', desc: 'Always using the latest and most efficient technologies' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white transition-colors">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg shrink-0 flex items-center justify-center text-white font-bold text-xl">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-600 mb-6">
                    Let's discuss how we can help transform your business with innovative IT solutions.
                  </p>
                  <Link href="/contact">
                    <button className="btn-primary w-full text-lg py-4">
                      Schedule a Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied clients who have revolutionized their operations with Techly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Contact Us Now
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
