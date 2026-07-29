import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAFAFA]">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Dots Loop Animation */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-300 rounded-full opacity-40"
        />
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-gray-300 rounded-full opacity-30"
        />
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"
        />
        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-gray-300 rounded-full opacity-40"
        />
        {/* Additional dots to match reference */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-gray-300 rounded-full opacity-30"
        />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute top-[20%] right-[10%] w-2 h-2 bg-gray-200 rounded-full opacity-60"
        />
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute bottom-[15%] left-[15%] w-1 h-1 bg-gray-400 rounded-full opacity-40"
        />
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
          className="absolute bottom-[20%] right-[15%] w-1.5 h-1.5 bg-gray-300 rounded-full opacity-50"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm mb-12 sm:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          <span className="text-xs sm:text-[13px] font-semibold tracking-[0.15em] text-gray-500 uppercase">
            Technology Consulting & Digital Transformation
          </span>
        </motion.div>

        {/* Logo / Wordmark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(4px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ 
            duration: 0.7, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1] // premium spring-like settle
          }}
          className="mb-10 w-full max-w-3xl flex justify-center relative"
        >
          {/* Subtle Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[120%] bg-blue-100/40 rounded-[100%] blur-[40px] pointer-events-none -z-10" />

          {/* EIMERE Logo SVG (Loaded from public folder) */}
          <img 
            src="/logo.svg" 
            alt="EIMERE Logo" 
            className="w-full h-auto max-w-[180px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[420px]"
            style={{
              filter: "drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.08))"
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-[#111827] mb-6 max-w-4xl"
        >
          Technology That Moves <span className="text-gray-600 font-medium">as Fast as Your Business Does.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="text-sm md:text-base text-gray-400 leading-relaxed max-w-[740px] mb-12"
        >
          EIMERE is a full-stack technology partner — AI/ML, software engineering, 
          data analytics, cloud, and cybersecurity — delivering end-to-end solutions 
          with measurable business impact. From quick fixes to full builds, we deliver 
          real solutions, fast.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.a
              href="/#contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02, backgroundColor: "#000" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#111] text-white font-medium text-base transition-colors shadow-lg shadow-gray-900/10"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            
            <motion.a
              href="/#services"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.85, ease: "easeOut" }}
              whileHover={{ scale: 1.02, borderColor: "#d1d5db" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white border border-gray-200 text-gray-900 font-medium text-base transition-all hover:bg-gray-50"
            >
              Explore Our Solutions
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </motion.a>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            className="text-xs text-gray-400 mt-4"
          >
            No commitment. 30-minute discovery call.
          </motion.p>
        </div>

      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
      >
        <span className="text-xs text-gray-400 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
