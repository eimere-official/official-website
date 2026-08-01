import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { serviceCategories, startupLaunchPack, type ServiceCategory } from '../data/servicesData';

// ─── Individual Service Row (Accordion) ───────────────────────────────────────
function ServiceRow({
  category,
  index,
}: {
  category: ServiceCategory;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const Icon = category.icon;
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.045 }}
      className="border-b border-gray-100 last:border-b-0"
    >
      {/* ── Clickable Row Header ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group"
        aria-expanded={isOpen}
      >
        <div className={`flex items-center gap-5 sm:gap-8 py-5 px-3 sm:px-5 transition-colors duration-200 ${isOpen ? 'bg-[#F7F7F8]' : 'hover:bg-[#F7F7F8]'}`}>
          {/* Number */}
          <span className="text-sm font-mono text-gray-300 shrink-0 w-7 select-none">
            {num}
          </span>

          {/* Icon */}
          <div
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              isOpen ? 'bg-[#111827]' : 'bg-[#F3F4F6] group-hover:bg-[#111827]'
            }`}
          >
            <Icon
              className={`w-5 h-5 transition-colors duration-200 ${
                isOpen ? 'text-white' : 'text-[#111827] group-hover:text-white'
              }`}
              strokeWidth={1.75}
            />
          </div>

          {/* Title + count */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3">
              <span className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                {category.title}
              </span>
              <span className="text-xs text-gray-400 font-medium hidden sm:inline shrink-0">
                {category.items.length} services
              </span>
            </div>
            {!isOpen && (
              <p className="text-sm text-gray-400 mt-0.5 hidden sm:block truncate max-w-xl">
                {category.tagline}
              </p>
            )}
          </div>

          {/* Plus / Close icon */}
          <div
            className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 ${
              isOpen
                ? 'border-[#111827] bg-[#111827] text-white'
                : 'border-gray-200 text-gray-400 group-hover:border-[#111827] group-hover:bg-[#111827] group-hover:text-white'
            }`}
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
              <Plus className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </button>

      {/* ── Accordion Body ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-[#F7F7F8] border-t border-gray-100 px-4 sm:px-6 lg:px-10 py-6">
              {/* Sub-services Grid (Only Service Names) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-2xs hover:border-gray-200 transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111827] shrink-0" />
                      <span className="text-sm font-medium text-gray-900 leading-snug truncate">
                        {item.title}
                      </span>
                    </div>
                    {item.isPopular && (
                      <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
                        Popular
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ServicesLandingSection() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#111827] max-w-xl"
            >
              Everything You Need,<br /> Under One Roof
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="shrink-0"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111827] hover:bg-black text-white font-medium text-sm transition-colors shadow-sm"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* ── Service Accordion List ── */}
        <div className="border-t border-gray-100 rounded-2xl overflow-hidden">
          {serviceCategories.map((cat, i) => (
            <ServiceRow key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* ── Startup Launch Pack ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 lg:mt-20"
        >
          <div className="relative bg-black rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="p-10 sm:p-14 lg:border-r border-b lg:border-b-0 border-white/10">
                <span className="inline-block text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
                  Featured Pack
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Startup Launch Pack
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  {startupLaunchPack.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-100 text-black text-sm font-semibold rounded-full transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              {/* Right */}
              <div className="p-10 sm:p-14">
                <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
                  What's Included
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {startupLaunchPack.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
