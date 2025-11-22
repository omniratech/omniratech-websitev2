import { Bot, Cloud, Code, TrendingUp, Puzzle, Workflow, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Bot,
      title: 'AI Automation Setup',
      description: 'End-to-end implementation of intelligent automation systems tailored to your business needs. We analyze your workflows, identify automation opportunities, and deploy AI-powered solutions that reduce manual effort and increase accuracy.',
      features: [
        'Workflow analysis and optimization',
        'Custom AI model development',
        'Process automation implementation',
        'Integration with existing systems',
        'Training and documentation',
        'Ongoing support and maintenance',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud Communication Integration',
      description: 'Seamless migration and integration of cloud-based communication platforms. We help you transition from legacy systems to modern cloud solutions, ensuring zero downtime and maximum efficiency.',
      features: [
        'Cloud infrastructure setup',
        'Voice, video, and messaging integration',
        'Legacy system migration',
        'Multi-channel communication setup',
        'Security and compliance configuration',
        'Performance monitoring and optimization',
      ],
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions designed to address your unique business challenges. Our expert development team creates scalable, secure, and user-friendly applications using the latest technologies.',
      features: [
        'Full-stack web development',
        'Mobile app development',
        'Enterprise software solutions',
        'API development and integration',
        'Database design and optimization',
        'Quality assurance and testing',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to modernize your business operations and embrace digital technologies. We help you develop and execute comprehensive transformation roadmaps that drive growth and innovation.',
      features: [
        'Technology assessment and strategy',
        'Digital roadmap development',
        'Change management support',
        'Technology stack recommendations',
        'ROI analysis and optimization',
        'Best practices implementation',
      ],
    },
    {
      icon: Puzzle,
      title: 'API Integrations',
      description: 'Connect your systems and applications with powerful API integrations. We build bridges between different platforms, enabling seamless data flow and automated processes across your technology ecosystem.',
      features: [
        'Third-party API integration',
        'Custom API development',
        'Middleware solutions',
        'Data synchronization',
        'Real-time integration monitoring',
        'API security implementation',
      ],
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent workflow automation. We design and implement automated workflows that eliminate bottlenecks, reduce errors, and accelerate operations.',
      features: [
        'Process mapping and analysis',
        'Automated approval workflows',
        'Task scheduling and management',
        'Business rules engine setup',
        'Integration with business tools',
        'Performance tracking and reporting',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive IT services and solutions to power your digital transformation journey
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 p-8"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business needs and objectives' },
              { step: '02', title: 'Strategy', description: 'Developing a customized solution roadmap' },
              { step: '03', title: 'Implementation', description: 'Executing the plan with precision and expertise' },
              { step: '04', title: 'Support', description: 'Ongoing optimization and technical assistance' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team of experts is ready to help you achieve your digital transformation goals
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
