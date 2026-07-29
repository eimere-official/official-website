import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expertDomains, filterCategories, type DomainData } from '../data/expertTeam';

function FilterTabs({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: string; 
  onFilterChange: (filter: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-10 lg:mb-12">
      {filterCategories.map((category, index) => {
        const isActive = activeFilter === category;
        return (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            onClick={() => onFilterChange(category)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border
              ${isActive 
                ? 'bg-[#111827] text-white border-[#111827]' 
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }
            `}
            aria-pressed={isActive}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}

function DomainCard({ domain }: { domain: DomainData }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // We'll show the first 2 tags normally to match the reference's "+2" logic if there are 4 tags
  // Actually, we can show up to 3 depending on length, but let's stick to 2 + remainder for consistency
  const defaultTagCount = 3;
  const visibleTags = isHovered ? domain.tags : domain.tags.slice(0, defaultTagCount);
  const hiddenCount = domain.tags.length - defaultTagCount;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 transition-all duration-250 ease-out flex flex-col items-start focus-within:ring-2 focus-within:ring-[#111827] focus-within:outline-none"
      tabIndex={0}
    >
      {/* Header: Icon + Title */}
      <motion.div layout="position" className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 shrink-0">
          <domain.icon className="w-6 h-6" strokeWidth={2} />
        </div>
        <h3 className="text-lg lg:text-xl font-bold text-[#111827] leading-tight">
          {domain.title}
        </h3>
      </motion.div>

      {/* Description */}
      <motion.p layout="position" className="text-base text-gray-500 leading-relaxed mb-6">
        {domain.description}
      </motion.p>

      {/* Tags Row */}
      <motion.div layout className="flex flex-wrap gap-2 mt-auto">
        {visibleTags.map(tag => (
          <motion.span 
            layout="position"
            key={tag} 
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full whitespace-nowrap"
          >
            {tag}
          </motion.span>
        ))}
        {!isHovered && hiddenCount > 0 && (
          <motion.span 
            layout="position"
            className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full whitespace-nowrap"
          >
            +{hiddenCount}
          </motion.span>
        )}
      </motion.div>

      {/* Hover Revealed Stats */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-[#111827]">Key Metric</span>
              <span className="text-sm text-blue-600 font-medium">{domain.stat}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ExpertTeamSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredDomains = activeFilter === 'All' 
    ? expertDomains 
    : expertDomains.filter(domain => domain.category === activeFilter);

  return (
    <section className="bg-[#F7F7F8] py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
          >
            Our Expert Team
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#111827] mb-6 max-w-3xl"
          >
            <span className="block">9 Specialist Domains</span>
            <span className="block">Under One Roof</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-[700px] leading-relaxed"
          >
            A close-knit team of 9–10 specialists who've chosen depth over generalism — working together to deliver outcomes that single-discipline agencies can't match.
          </motion.p>
        </div>

        {/* Filter Bar (Mobile gets overflow scroll so all buttons are accessible) */}
        <div className="w-full overflow-x-auto pb-4 -mb-4 no-scrollbar">
          <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredDomains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Helper text below grid */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-10 italic"
        >
          Hover any card to see key stats & full skill stack
        </motion.p>
        
      </div>
    </section>
  );
}
