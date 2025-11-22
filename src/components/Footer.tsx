import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-2xl font-bold text-white">OmniraTech</span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering Businesses with AI Automation, Cloud Communication &
              Dialer Technology.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-4 mt-5">
              <a href="https://www.linkedin.com/company/omniratech/" className="hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583815506995" className="hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "products", "services", "about"].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>AI Automation Systems</li>
              <li>Cloud Communication</li>
              <li>Dialer & VoIP Solutions</li>
              <li>Custom Software Development</li>
              <li>Web & Cloud App Development</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1" />
                <span>info@omniratech.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1" />
                <span>+91-9785238446</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} OmniraTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
