import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-white">OmniraTech</span>
            </div>
            <p className="text-sm text-gray-400">
              Innovative Technology Solutions & Digital Transformation
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-blue-400 transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>AI Automation</li>
              <li>Cloud Communication</li>
              <li>Dialer Solutions</li>
              <li>Custom Development</li>
              <li>Digital Transformation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@omniratech.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+91-9785238446</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} OmniraTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
