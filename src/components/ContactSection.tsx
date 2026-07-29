import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 lg:py-24 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Contact Info */}
          <div className="flex-1 lg:max-w-md">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-[#111827] mb-6"
            >
              Let's Build Something Great.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed mb-10"
            >
              Whether you're looking to modernize legacy systems, build a new product from scratch, or scale your engineering team, we're here to help.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Email Us</div>
                  <a href="mailto:hello@eimere.com" className="text-base font-semibold text-[#111827] hover:text-blue-600 transition-colors">
                    hello@eimere.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Call Us</div>
                  <a href="tel:+15551234567" className="text-base font-semibold text-[#111827] hover:text-blue-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500">Headquarters</div>
                  <span className="text-base font-semibold text-[#111827]">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex-1 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/40 relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#111827]">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all outline-none"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#111827]">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#111827]">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all outline-none"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#111827]">How can we help?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#111827] focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project or challenges..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#111827] hover:bg-black text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
