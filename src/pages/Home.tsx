import { Bot, Cloud, Phone, MessageSquare, Zap, Shield, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation systems that work 24/7.',
    },
    {
      icon: Cloud,
      title: 'Cloud Communication',
      description: 'Scalable cloud-based communication platforms for seamless customer interactions.',
    },
    {
      icon: Phone,
      title: 'Dialer Solutions',
      description: 'Advanced dialer software to boost your team productivity and customer engagement.',
    },
    {
      icon: MessageSquare,
      title: 'Smart Chatbots',
      description: 'AI-powered chatbots that provide instant support and enhance customer experience.',
    },
    {
      icon: Zap,
      title: 'Fast Integration',
      description: 'Quick and seamless integration with your existing systems and workflows.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security measures to protect your data and customer information.',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'TechVentures India',
      content: 'OmniraTech transformed our customer communication system. The AI automation tools have increased our efficiency by 300%.',
      avatar: 'RK',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Director',
      company: 'Global Solutions Ltd',
      content: 'Their cloud dialer solution is exceptional. We have seen a significant improvement in our team productivity and customer satisfaction.',
      avatar: 'PS',
    },
    {
      name: 'Amit Patel',
      role: 'CTO',
      company: 'InnovateCorp',
      content: 'The chatbot implementation was seamless. OmniraTech team is professional, responsive, and delivers quality solutions.',
      avatar: 'AP',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              OmniraTech
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Innovative Technology Solutions & Digital Transformation
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge AI automation, cloud communication, and intelligent dialer solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('products')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 hover:shadow-2xl"
              >
                View Products
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: 'AI Automation', text: 'Intelligent systems that work for you' },
              { icon: Cloud, title: 'Cloud Solutions', text: 'Scalable and secure infrastructure' },
              { icon: Phone, title: 'Dialer Software', text: 'Boost productivity and engagement' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <item.icon className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose OmniraTech?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver innovative solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by leading businesses across industries</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust OmniraTech for their digital transformation journey
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Contact Us Today</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
