import { Bot, Cloud, Phone, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const products = [
    {
      icon: Bot,
      title: 'AI Automation Tools',
      description: 'Intelligent automation systems that streamline workflows, reduce manual tasks, and optimize business operations with cutting-edge artificial intelligence.',
      benefits: [
        'Reduce operational costs by up to 60%',
        'Automated workflow management',
        'Intelligent task prioritization',
        'Real-time performance analytics',
        '24/7 automated operations',
        'Seamless integration with existing systems',
      ],
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Cloud,
      title: 'Cloud Communication Platform',
      description: 'Enterprise-grade cloud communication solution that enables seamless voice, video, and messaging capabilities across your organization.',
      benefits: [
        'Scalable infrastructure for any business size',
        'Multi-channel communication support',
        'HD voice and video quality',
        'Global reach with local presence',
        'Advanced call routing and IVR',
        '99.99% uptime guarantee',
      ],
      color: 'from-teal-600 to-teal-800',
    },
    {
      icon: Phone,
      title: 'Dialer Software',
      description: 'Advanced cloud-based dialer system designed to maximize agent productivity and improve customer connection rates with intelligent calling features.',
      benefits: [
        'Predictive and progressive dialing',
        'Automatic call distribution',
        'CRM integration capabilities',
        'Real-time monitoring and reporting',
        'Call recording and quality monitoring',
        'Compliance management tools',
      ],
      color: 'from-green-600 to-green-800',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot & Engagement Systems',
      description: 'AI-powered conversational platforms that provide instant customer support, lead qualification, and personalized engagement across multiple channels.',
      benefits: [
        'Natural language processing',
        'Multi-language support',
        'Omnichannel deployment',
        'Sentiment analysis and insights',
        'Seamless human handoff',
        'Continuous learning and improvement',
      ],
      color: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <product.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg inline-flex items-center space-x-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="flex-1 w-full">
                  <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Active Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with our innovative technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
            >
              Contact Sales
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
