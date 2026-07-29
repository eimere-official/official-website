import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ClosingCTASection() {
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white flex flex-col items-center justify-center text-center border-t border-gray-100">
      
      {/* Background Dot Grid */}
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

      {/* Floating Dots Loop Animation (Subtle Pulse) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-6"
        >
          Let's Build Together
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight text-[#111827] mb-6 max-w-3xl"
        >
          <span className="block">Have a Problem Worth Solving?</span>
          <span className="block">Let's Build the Solution Together.</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-[750px] mb-3"
        >
          Whether you're a shop owner, a manufacturing firm, or a fast-growing tech company — if you have a real problem, we have the engineering depth to solve it.
        </motion.p>

        {/* Italic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-base italic text-gray-400 mb-10 md:mb-12"
        >
          From quick fixes to full builds — EIMERE delivers real solutions, fast.
        </motion.p>

        {/* Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.38, ease: "easeOut" }}
            className="w-full sm:w-auto"
          >
            <a
              href="/#contact"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-gray-900 bg-white text-[#111827] font-semibold text-base transition-all duration-250 hover:bg-[#111827] hover:text-white hover:scale-[1.03]"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
          
          {/* Secondary Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.46, ease: "easeOut" }}
            className="w-full sm:w-auto"
          >
            <a
              href="/#case-studies"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-300 bg-white text-[#111827] font-medium text-base transition-all duration-250 hover:border-gray-400 hover:bg-gray-50 hover:scale-[1.03]"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
