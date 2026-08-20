import { motion } from 'framer-motion';
import { whyFeatures } from '../data/whyEimere';

export default function WhyEimereSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* ── Left: Sticky Manifesto ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-6">
              Why EIMERE
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight text-[#111827] mb-8">
              Most agencies<br />deliver work.<br />
              <span className="text-gray-400">We deliver outcomes.</span>
            </h2>

            <p className="text-base text-gray-500 leading-relaxed max-w-sm">
              Four principles that separate a technology partner from a vendor — and why clients come back.
            </p>
          </motion.div>

          {/* ── Right: Feature List ── */}
          <div className="lg:col-span-7">
            {whyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.09, ease: 'easeOut' }}
                  className="group flex gap-7 py-8 border-b border-gray-100 last:border-b-0 cursor-default"
                >
                  {/* Accent line + icon column */}
                  <div className="flex flex-col items-center gap-3 pt-0.5">
                    <div className="w-px flex-1 bg-gray-200 group-hover:bg-[#111827] transition-colors duration-300 min-h-[2rem]" />
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#F3F4F6] group-hover:bg-[#111827] transition-colors duration-300 shrink-0">
                      <Icon
                        className="w-5 h-5 text-[#111827] group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.75}
                      />
                    </div>
                    <div className="w-px flex-1 bg-gray-200 group-hover:bg-[#111827] transition-colors duration-300 min-h-[2rem]" />
                  </div>

                  {/* Text */}
                  <div className="flex-1 py-1">
                    <h3 className="text-xl font-bold text-[#111827] tracking-tight leading-snug mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-base text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
