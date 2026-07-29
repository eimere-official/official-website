import type { Industry } from '../data/industries';

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <article 
      className="group relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 transition-all duration-250 ease-out shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-300"
    >
      {/* Header: Icon + Title */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#EEF2FF] shrink-0">
          <industry.icon className="w-6 h-6 text-[#4F46E5]" strokeWidth={2} />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[#111827] leading-tight">
          {industry.title}
        </h3>
      </div>

      <div className="flex flex-col flex-grow">
        {/* Problem Section */}
        <div className="mb-6">
          <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
            Problem
          </span>
          <p className="text-base text-gray-600 leading-relaxed">
            {industry.problem}
          </p>
        </div>

        {/* Solution Section */}
        <div className="mb-8">
          <span className="block text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">
            Solution
          </span>
          <p className="text-base text-gray-600 leading-relaxed">
            {industry.solution}
          </p>
        </div>
      </div>

      {/* Result Section */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        <span className="block text-base font-bold text-[#111827]">
          {industry.result}
        </span>
      </div>
    </article>
  );
}
