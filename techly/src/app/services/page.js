export const metadata = {
  title: 'Our Services - Techly',
  description: 'Explore our comprehensive IT services including web development, cloud solutions, cybersecurity, and more.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications that engage your audience and drive results.',
      features: [
        'Custom Website Design',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'CMS Development',
        'API Integration',
        'Performance Optimization'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud and scale your infrastructure with our comprehensive cloud services.',
      features: [
        'Cloud Migration',
        'AWS/Azure/GCP Setup',
        'Cloud Architecture',
        'DevOps Services',
        'Container Orchestration',
        'Cloud Security'
      ],
      color: 'from-cyan-500 to-cyan-700',
      comingSoon: true
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions and best practices.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Firewall Configuration',
        'Data Encryption',
        'Compliance Management',
        'Incident Response'
      ],
      color: 'from-red-500 to-red-700',
      comingSoon: true
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android that users love.',
      features: [
        'Native iOS Apps',
        'Native Android Apps',
        'Cross-Platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes and gain valuable insights.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Chatbot Development',
        'Recommendation Systems',
        'Model Training & Deployment'
      ],
      color: 'from-green-500 to-green-700'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Mining',
        'Reporting Automation'
      ],
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive user experiences that delight your customers.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
        'Brand Identity'
      ],
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: '⚙️',
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions.',
      features: [
        'Technology Assessment',
        'Digital Strategy',
        'System Integration',
        'Process Optimization',
        'Vendor Selection',
        'Change Management'
      ],
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Comprehensive IT solutions designed to accelerate your digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                      {service.comingSoon && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-blue-600 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="relative">
            {/* Shared Process Data */}
            {(() => {
              const processSteps = [
                { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
                { step: '02', title: 'Planning', desc: 'Creating a detailed roadmap' },
                { step: '03', title: 'Execution', desc: 'Building your solution' },
                { step: '04', title: 'Delivery', desc: 'Launch and ongoing support' }
              ];

              return (
                <>
                  {/* Desktop View (Grid) - Hidden on Mobile */}
                  <div className="hidden md:grid grid-cols-4 gap-8">
                    {processSteps.map((item, index) => (
                      <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-20 h-20 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:shadow-blue-200">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mobile View (Timeline) - Visible only on Mobile */}
                  <div className="md:hidden relative py-4">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200"></div>

                    {processSteps.map((item, index) => (
                      <div key={index} className={`flex items-center justify-between w-full mb-12 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                        {/* Content Side */}
                        <div className={`w-[42%] ${index % 2 === 0 ? 'text-right pr-4' : 'text-left pl-4'}`}>
                          <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>

                        {/* Center Step Circle */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 border-4 border-white">
                          {item.step}
                        </div>

                        {/* Empty Side for Balance */}
                        <div className="w-[42%]"></div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our services can help achieve your business goals
          </p>
          <a href="/contact">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
