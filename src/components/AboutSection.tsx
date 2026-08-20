import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight 
} from 'lucide-react';
import { useRef } from 'react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#F8F9FA] py-20 lg:py-28 overflow-hidden">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Top Section: Story + Visual & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story & Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start pt-2"
          >
            {/* Tag indicator */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-7 h-[2px] bg-gray-900 rounded-full inline-block" />
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-gray-700">
                ABOUT US
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-gray-900 leading-[1.12] tracking-tight mb-7">
              Building The Future, Together.
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5 font-normal">
              EIMERE is a forward-thinking technology partner helping businesses transform 
              ideas into intelligent, scalable, and impactful digital solutions.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-9 font-normal">
              From startups to established enterprises, we empower brands with innovative strategies, 
              cutting-edge technologies, and end-to-end solutions that drive real growth.
            </p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black text-white font-semibold text-base shadow-md transition-all hover:bg-neutral-800 group cursor-pointer"
            >
              <span>Let's Build Something Amazing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Right Column: Visual Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Image Container */}
            <div className="relative w-full">
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100/80 bg-gray-100 aspect-[16/9] sm:aspect-[16/9.5] w-full">
                <img 
                  src="/about_team_meeting.png" 
                  alt="Eimere Team Boardroom Strategy Meeting" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
