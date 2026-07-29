import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F7F7F8] py-20 lg:py-24">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-[#111827] mb-6 max-w-xl">
              A Full Spectrum of Technology Services
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mb-8">
              From strategy to production — 11 specialist domains working as one integrated 
              team to solve your most complex technology challenges.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02, borderColor: "#d1d5db" }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-900 font-medium text-base transition-all hover:bg-gray-50 shadow-sm"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </motion.button>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] lg:aspect-auto">
              <img 
                src="/what_we_do_laptop.png" 
                alt="Technology Services and Analytics Dashboard" 
                className="w-full h-full object-cover rounded-2xl lg:min-h-[450px]"
                loading="lazy"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
