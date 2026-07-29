import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';
import IndustryCard from './IndustryCard';

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-16 lg:mb-20">
          
          {/* Left Side: Text Content */}
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
            >
              Industries We Solve For
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-[#111827] mb-6"
            >
              <span className="block">Real Problems.</span>
              <span className="block">Real Industries.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed max-w-[500px]"
            >
              We don't sell generic technology. We understand your industry's specific pain points and build targeted solutions.
            </motion.p>
          </div>

          {/* Right Side: CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="shrink-0"
          >
            <a 
              href="/industries"
              className="group inline-flex items-center gap-2 text-base font-semibold text-[#111827] transition-colors hover:text-blue-600"
            >
              See all industries
              <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + (index * 0.08), // 80ms stagger delay after initial delay
                ease: "easeOut" 
              }}
              className="h-full"
            >
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
