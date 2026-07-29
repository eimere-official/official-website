import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.round(current));
  
  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatsBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    { value: 9, suffix: '+', label: 'Specialist Domains', type: 'number' },
    { value: 100, suffix: '%', label: 'End-to-End Delivery', type: 'number' },
    { text: 'AI-First', label: 'Engineering Approach', type: 'text' },
    { value: 8, suffix: '+', label: 'Industries Served', type: 'number' },
  ];

  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 lg:gap-y-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`flex flex-col items-center text-center 
                ${index > 0 ? 'lg:border-l lg:border-gray-200' : ''} 
                ${index % 2 !== 0 ? 'md:border-l md:border-gray-200' : ''} 
                ${index === 2 ? 'md:border-l-0 lg:border-l' : ''}
              `}
            >
              <div className="text-4xl md:text-5xl font-black text-[#111827] mb-2 tracking-tight">
                {stat.type === 'number' ? (
                  <>
                    <AnimatedNumber value={stat.value as number} />
                    {stat.suffix}
                  </>
                ) : (
                  <span>{stat.text}</span>
                )}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
