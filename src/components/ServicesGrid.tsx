import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111827] max-w-3xl mx-auto"
          >
            Everything You Need, Under One Roof
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, // 80ms stagger delay
                ease: "easeOut" 
              }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* CTA Link Below Grid */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="/services"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-900 transition-colors hover:text-gray-600"
          >
            Explore all services in detail
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
