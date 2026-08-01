import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { serviceCategories, startupLaunchPack } from '../data/servicesData';

export default function ServicesPage() {
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const catId = location.hash.replace('#cat-', '');
      if (catId) {
        setExpandedCat(catId);
        const element = document.getElementById(`cat-${catId}`);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 150);
        }
      }
    }
  }, [location]);

  const toggleCategory = (id: string) => {
    setExpandedCat(expandedCat === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* Hero */}
      <section className="min-h-[85vh] flex items-end px-6 sm:px-12 lg:px-20 pb-20 pt-32">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-gray-400 mb-6"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-gray-900 max-w-4xl"
          >
            We help companies design, build, and scale digital products.
          </motion.h1>
        </div>
      </section>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 origin-left"
      >
        <div className="h-px bg-gray-200" />
      </motion.div>

      {/* Services Accordion */}
      <section className="px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-[1400px] mx-auto">
          {serviceCategories.map((category, catIdx) => {
            const isExpanded = expandedCat === category.id;

            return (
              <motion.div
                key={category.id}
                id={`cat-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: catIdx * 0.04 }}
                className="border-b border-gray-200 scroll-mt-28"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left py-7 sm:py-9 flex items-center justify-between gap-8 group"
                >
                  <h2 className={`text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight transition-colors duration-200 ${
                    isExpanded ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-900'
                  }`}>
                    {category.title}
                  </h2>

                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isExpanded
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900'
                  }`}>
                    {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 pt-2">
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 }}
                          className="text-base text-gray-500 leading-relaxed max-w-2xl mb-10"
                        >
                          {category.description}
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                          {category.items.map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.08 + i * 0.04 }}
                            >
                              <h3 className="text-base font-semibold text-gray-900 mb-1">
                                {item.title}
                              </h3>
                              <p className="text-sm text-gray-400 leading-relaxed">
                                {item.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {category.techStack && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="mt-10 pt-6 border-t border-gray-100"
                          >
                            <p className="text-xs text-gray-300 uppercase tracking-wider mb-3">Technologies</p>
                            <p className="text-sm text-gray-400">
                              {category.techStack.join(' · ')}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Startup Launch Pack — Single Full Screen Layout */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 bg-black text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Header & Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-gray-900"
          >
            <div className="max-w-2xl">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">All-in-one founder ecosystem</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 text-white">
                Startup Launch Pack
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                {startupLaunchPack.description}
              </p>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 shrink-0">
              <div>
                <p className="text-2xl font-bold text-white">10</p>
                <p className="text-xs text-gray-500 mt-1">Deliverables</p>
              </div>
              <div className="h-8 w-px bg-gray-800" />
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-500 mt-1">IP Ownership</p>
              </div>
              <div className="h-8 w-px bg-gray-800" />
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Get started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Deliverables Grid — 2 columns fitting cleanly on 1 screen */}
          <div className="pt-10">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">What's included in the pack</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
              {startupLaunchPack.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="py-3 border-b border-gray-900 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-600 w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm sm:text-base text-gray-200 font-medium">{item}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Included</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 sm:px-12 lg:px-20 py-28 bg-[#fafafa]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-10"
        >
          <div>
            <p className="text-sm text-gray-400 mb-4">Get in touch</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Have a project in mind?
            </h2>
          </div>
          <a
            href="mailto:contact@eimere.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors shrink-0"
          >
            Contact us <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

    </div>
  );
}
