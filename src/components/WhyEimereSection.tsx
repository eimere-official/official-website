import { motion } from 'framer-motion';
import { whyFeatures } from '../data/whyEimere';

export default function WhyEimereSection() {
  return (
    <section className="bg-[#F7F7F8] py-20 lg:py-24 overflow-hidden">
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
            Why EIMERE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#111827] max-w-3xl mx-auto"
          >
            <span className="block">Built Different.</span>
            <span className="block">Delivering Different.</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
          {whyFeatures.map((feature, index) => {
            const isFeatured = feature.isFeatured;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08, 
                  ease: "easeOut" 
                }}
                className={`
                  group relative flex flex-col h-full bg-white rounded-2xl p-6 md:p-8 
                  transition-all duration-250 ease-out hover:shadow-xl hover:-translate-y-1
                  ${isFeatured 
                    ? 'shadow-xl lg:scale-[1.02] z-10' 
                    : 'shadow-sm z-0'
                  }
                `}
              >
                {/* Icon */}
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 mb-6 transition-colors duration-250 ease-out bg-[#F3F4F6] text-gray-900 group-hover:bg-[#111827] group-hover:text-white"
                >
                  <feature.icon className="w-6 h-6 transition-colors duration-250 ease-out" strokeWidth={isFeatured ? 2.5 : 2} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-lg md:text-xl font-bold text-[#111827] leading-tight mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-base text-gray-500 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
