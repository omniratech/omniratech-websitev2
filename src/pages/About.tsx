import { Target, Eye, Heart, Award, Users, Globe } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honesty and transparency guide our relationships with clients and partners.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as trusted partners in their success.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace emerging technologies and continuously push boundaries.',
    },
  ];

  const teamMembers = [
    {
      name: 'Deepak Kumar Kumawat',
      role: 'Chief Executive Officer',
      avatar: 'DK',
      color: 'from-blue-600 to-blue-800',
    },
    {
      name: 'Prahlad Prajapat',
      role: 'Chief Technology Officer',
      avatar: 'PP',
      color: 'from-teal-600 to-teal-800',
    },
    {
      name: 'Lokesh',
      role: 'Head of Product',
      avatar: 'LC',
      color: 'from-green-600 to-green-800',
    },
    {
      name: 'Raj',
      role: 'Head of Engineering',
      avatar: 'Rk',
      color: 'from-purple-600 to-purple-800',
    },
   
    {
      name: 'Kashish Arya',
      role: 'Head of Legel Department',
      avatar: 'KA',
      color: 'from-orange-600 to-orange-800',
    },
    
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About OmniraTech</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of business technology with innovative solutions that drive digital transformation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                OmniraTech is a leading technology solutions provider specializing in AI automation, cloud communication, and digital transformation services. Founded with a vision to empower businesses through innovative technology, we have grown into a trusted partner for organizations across various industries.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team of experienced professionals combines deep technical expertise with a passion for solving complex business challenges. We believe in building long-term relationships with our clients, understanding their unique needs, and delivering solutions that create measurable value.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a customer-first approach and commitment to excellence, we continue to push the boundaries of what's possible in business technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-teal-900 mb-2">50+</div>
                <div className="text-gray-700">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-green-900 mb-2">1000+</div>
                <div className="text-gray-700">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-900 mb-2">15+</div>
                <div className="text-gray-700">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses worldwide with cutting-edge technology solutions that drive efficiency, innovation, and growth. We are committed to delivering excellence through AI automation, cloud communication platforms, and transformative digital services that help our clients stay ahead in an ever-evolving technological landscape.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-10 border-2 border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in innovative technology solutions, recognized for transforming businesses through intelligent automation and cloud-based platforms. We envision a future where every organization, regardless of size, has access to enterprise-grade technology that enables them to compete, innovate, and thrive in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4`}>
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with OmniraTech and transform your business with innovative technology solutions
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
