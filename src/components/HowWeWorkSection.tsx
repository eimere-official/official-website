import { motion } from 'framer-motion';
import { processSteps } from '../data/process';

export default function HowWeWorkSection() {
  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#111827] mb-6"
          >
            A Proven End-to-End Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-[700px] leading-relaxed"
          >
            Every engagement follows a rigorous, collaborative workflow — designed to minimize risk and maximize speed to value.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-2xl mx-auto lg:max-w-none">
          
          {/* Mobile/Tablet Vertical Connecting Line */}
          <div className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-gray-100 lg:hidden z-0">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-gray-300 origin-top"
            />
          </div>

          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute left-8 right-8 top-[31px] h-[2px] bg-gray-100 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gray-300 origin-left"
            />
          </div>

          {/* Steps */}
          <ol className="relative z-10 flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between">
            {processSteps.map((step, index) => {
              const isActive = step.active;
              
              return (
                <li 
                  key={step.id} 
                  className="flex flex-row lg:flex-col items-start lg:items-center relative lg:flex-1 lg:px-2"
                >
                  {/* Step Circle */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + (index * 0.1), // Staggered to sync with line drawing
                      ease: "easeOut" 
                    }}
                    className={`
                      flex items-center justify-center w-16 h-16 shrink-0 rounded-full text-lg font-bold transition-all duration-300
                      ${isActive 
                        ? 'bg-[#111827] text-white shadow-xl scale-110 border-0' 
                        : 'bg-white text-gray-500 border-2 border-gray-300'
                      }
                    `}
                  >
                    {step.number}
                  </motion.div>

                  {/* Step Text Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + (index * 0.1), 
                      ease: "easeOut" 
                    }}
                    className="ml-6 lg:ml-0 lg:mt-6 text-left lg:text-center w-full max-w-[280px] lg:max-w-[180px] xl:max-w-[200px]"
                  >
                    <h3 className="text-base xl:text-lg font-bold text-[#111827] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>

        </div>
      </div>
    </section>
  );
}
