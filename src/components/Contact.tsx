import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
      <section id="contact" className="py-24 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <span className="break-all">bibinhashley@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <span>+917293232727</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <span>Kerala, India</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}