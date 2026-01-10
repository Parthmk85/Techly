export const metadata = {
  title: 'About Us - Techly',
  description: 'Learn about Techly, our mission, values, and the team behind innovative IT solutions.',
};

export default function AboutPage() {
  const team = [
    { name: 'Parth Patel', role: 'CEO & Founder', emoji: '👨‍💼' },
    { name: 'Utsav Jetani', role: 'CTO', emoji: '👩‍💻' },
    { name: 'Kaushik Baraiya', role: 'Lead Developer', emoji: '👨‍💻' },
    { name: 'Dhruve Balar', role: 'UX Designer', emoji: '👩‍🎨' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering solutions that exceed expectations.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex problems.'
    },
    {
      icon: '🌟',
      title: 'Customer Focus',
      description: 'Your success is our success. We put our clients at the center of everything we do.'
    }
  ];

  const milestones = [
    { year: '2009', event: 'Company Founded', desc: 'Started with a vision to transform IT services' },
    { year: '2012', event: 'First 100 Clients', desc: 'Reached our first major milestone' },
    { year: '2016', event: 'Global Expansion', desc: 'Opened offices in 5 countries' },
    { year: '2020', event: 'Innovation Award', desc: 'Recognized for excellence in technology' },
    { year: '2024', event: '500+ Projects', desc: 'Successfully delivered over 500 projects' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Techly
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Pioneering digital transformation since 2009
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2009, Techly began with a simple mission: to help businesses harness the power 
                of technology to achieve their goals. What started as a small team of passionate developers 
                has grown into a global IT solutions provider.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve over 200 clients worldwide, from startups to Fortune 500 companies. 
                Our team of 50+ experts brings together diverse skills and experiences to deliver 
                innovative solutions that drive real business results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just service providers – we're your technology partners, committed to your 
                long-term success and growth.
              </p>
            </div>

            <div className="relative">
              <div className="card p-8 bg-linear-to-br from-blue-50 to-white">
                <div className="text-center space-y-6">
                  <div className="text-7xl">🚀</div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-gray-600 text-lg">
                    To empower businesses worldwide with innovative technology solutions that drive 
                    growth, efficiency, and digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="card">
                      <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-blue-600 rounded-full items-center justify-center text-white font-bold z-10 shrink-0">
                    {index + 1}
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The talented people behind Techly's success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group">
                <div className="w-24 h-24 bg-linear-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-linear-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Get in Touch
              </button>
            </a>
            <a href="/services">
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                View Our Services
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
