'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['2067B, street no 8, Akshardham-2, Bhavnagar - 364002']
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: ['Parthmk85@gmail.com']
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: ['+91 9725942209', 'Mon-Fri, 9AM-6PM ']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Let's discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Contact <span className="gradient-text">Information</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a question or want to work together? We'd love to hear from you.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg shrink-0 flex items-center justify-center text-2xl">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                {status.message && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="+91 1234-56789-0"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=akshardham%202%20street%20no%208%20kaliyabid%20bhavnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="Techly Location"
        ></iframe>
      </section>
    </div>
  );
}
