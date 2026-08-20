import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ClosingCTASection() {
  return (
    <section className="relative bg-[#111827] overflow-hidden border-t border-gray-100">

      {/* Signature: oversized brand watermark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="text-[clamp(120px,20vw,260px)] font-black tracking-tighter leading-none text-white/[0.04] whitespace-nowrap"
          style={{ letterSpacing: '-0.05em' }}
        >
          EIMERE
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
            className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-8"
          >
            Let's Build Together
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white mb-6"
          >
            Have a problem<br />worth solving?
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.16, ease: 'easeOut' }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-lg"
          >
            Whether you're a startup, a scaling enterprise, or a business that knows something needs to change — we have the engineering depth to build the solution.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.24, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-gray-100 text-[#111827] font-semibold text-sm transition-colors shadow-sm"
            >
              Book a Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <span className="text-sm text-gray-600">
              or email us at{' '}
              <a
                href="mailto:info.eimere@gmail.com"
                className="text-gray-400 hover:text-white underline underline-offset-2 transition-colors"
              >
                info.eimere@gmail.com
              </a>
            </span>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
