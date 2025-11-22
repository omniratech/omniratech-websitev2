import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our innovative technology solutions
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT SIDE – INFO */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have a question or ready to start your digital transformation journey? Our team is here to help.
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* EMAIL */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@omniratech.in</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 1 hour</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91-9785238446</p>
                    <p className="text-sm text-gray-500 mt-1">Mon–Fri, 9am – 6pm IST</p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">India</p>
                    <p className="text-sm text-gray-500 mt-1">Serving clients globally</p>
                  </div>
                </div>

                {/* PREMIUM BUSINESS HOURS BLOCK (Only One) */}
                <div className="mt-8 p-6 bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm rounded-2xl border border-blue-200 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">Business Hours</h3>

                  <div className="space-y-1.5 text-sm text-gray-800">
                    <p className="font-medium text-gray-900">🌍 Global Support: 24/7</p>
                    <p className="text-gray-600">Available across all time zones</p>

                    <hr className="my-3 border-gray-300/60" />

                    <p className="font-medium text-gray-900">Operational Hours (IST)</p>
                    <p>Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                    <p>Saturday: 10:00 AM – 2:00 PM IST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – FORM */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* NAME */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>

                    {/* COMPANY */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="max-w-3xl mx-auto text-left space-y-6 mt-12">
              {/* FAQ 1 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What services do you offer?</h3>
                <p className="text-gray-600">
                  We specialize in AI automation, cloud communication platforms, dialer software solutions,
                  chatbot development, custom software development, and digital transformation consulting.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary based on complexity and scope. Small projects may take 2–4 weeks,
                  while enterprise solutions can take 3–6 months. We provide detailed timelines during the consultation phase.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600">
                  Yes, we offer comprehensive support and maintenance packages to ensure your systems run smoothly.
                  Our support team is available 24/7 for critical issues.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
