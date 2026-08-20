import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';

export default function IndustriesSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
            >
              Industries We Solve For
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111827] max-w-xl"
            >
              Real Problems.<br />Real Industries.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0 max-w-sm"
          >
            <p className="text-base text-gray-500 leading-relaxed">
              We don't sell generic technology. We understand your industry's specific pain points and engineer solutions that move the needle.
            </p>
          </motion.div>
        </div>

        {/* ── Editorial Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="group border-t-2 border-gray-100 hover:border-[#111827] pt-6 pb-8 transition-colors duration-300"
              >
                <Icon
                  className="w-5 h-5 text-gray-400 group-hover:text-[#111827] mb-4 transition-colors duration-300"
                  strokeWidth={1.75}
                />
                <h3 className="text-lg font-bold text-[#111827] tracking-tight leading-snug mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA link ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-100 flex justify-end"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#111827] hover:text-gray-500 transition-colors"
          >
            Work with us
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
