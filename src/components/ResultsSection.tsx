import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { caseStudies, type CaseStudy } from '../data/caseStudies';

function CaseStudyCard({ study }: { study: CaseStudy }) {
  // Show first 4 tags
  const visibleTags = study.tags.slice(0, 4);
  const hiddenCount = study.tags.length - 4;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 transition-all duration-250 ease-out flex flex-col h-full group">
      
      {/* Badges */}
      <div className="flex items-center gap-3 mb-5">
        <span 
          className="bg-gray-900 text-white rounded-full px-3 py-1 text-xs font-medium"
          title="Illustrative project showcasing our capabilities"
        >
          {study.badge}
        </span>
        <span className="text-xs text-gray-500 font-medium">
          {study.industry}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-[#111827] leading-tight">
        {study.title}
      </h3>
      
      <p className="text-base text-gray-500 mt-3 leading-relaxed flex-grow">
        {study.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {visibleTags.map(tag => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full whitespace-nowrap">
            +{hiddenCount}
          </span>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 mt-8 pt-6 border-t border-gray-100">
        {study.stats.map((stat, i) => {
          // Determine borders to create the internal cross divider
          let borderClasses = "";
          if (i === 0) borderClasses = "border-b border-r border-gray-100 pb-5 pr-4";
          if (i === 1) borderClasses = "border-b border-gray-100 pb-5 pl-4";
          if (i === 2) borderClasses = "border-r border-gray-100 pt-5 pr-4";
          if (i === 3) borderClasses = "pt-5 pl-4";

          return (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${borderClasses}`}>
              <div className="text-2xl sm:text-3xl font-black text-[#111827] mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 leading-tight">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ResultsSection() {
  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
            >
              Proof of Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#111827] mb-5"
            >
              Results We're Built to Deliver
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed"
            >
              Concept projects showcasing EIMERE's capability across industries — the same engineering depth applied to your real challenges.
            </motion.p>
          </div>
          
          <motion.a 
            href="/case-studies"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group inline-flex items-center gap-2 text-base font-semibold text-[#111827] hover:text-blue-600 transition-colors duration-200 lg:pb-2"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              className="h-full"
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
