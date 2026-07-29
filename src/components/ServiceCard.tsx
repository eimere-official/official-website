import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article 
      className={`
        group relative flex flex-col h-full bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 
        transition-all duration-250 ease-out
        ${service.isFeatured 
          ? 'shadow-xl border-gray-300' 
          : 'shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-300'
        }
      `}
    >
      {/* Header: Icon + Title */}
      <div className="flex items-center gap-4 mb-5">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#EEF2FF] shrink-0">
          <service.icon className="w-6 h-6 text-[#4F46E5]" strokeWidth={2} />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#111827] leading-tight">
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-base text-gray-500 mb-8 flex-grow leading-relaxed">
        {service.description}
      </p>

      {/* Footer Link */}
      <div className="mt-auto pt-2">
        <a 
          href={service.link}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors duration-200 group-hover:text-[#4F46E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 rounded"
          onClick={(e) => {
            if (service.link === '#') e.preventDefault();
          }}
          aria-label={`Learn more about ${service.title}`}
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </a>
      </div>
      
      {/* Absolute hidden overlay for whole-card clickable area (accessibility trick) */}
      <a 
        href={service.link} 
        className="absolute inset-0 z-10"
        aria-hidden="true"
        tabIndex={-1}
        onClick={(e) => {
          if (service.link === '#') e.preventDefault();
        }}
      >
        <span className="sr-only">Go to {service.title}</span>
      </a>
    </article>
  );
}
