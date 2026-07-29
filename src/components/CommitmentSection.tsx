import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { commitments } from '../data/commitments';

export default function CommitmentSection() {
  return (
    <section className="bg-[#F7F7F8] py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium tracking-widest text-gray-500 uppercase mb-4"
          >
            Our Commitment
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#111827] mb-5 max-w-3xl"
          >
            <span className="block">What You Can</span>
            <span className="block">Count On, Always</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed max-w-[700px]"
          >
            We're building our reputation one project at a time. These are the standards we hold ourselves to — no exceptions.
          </motion.p>
        </div>

        {/* Commitment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-300 transition-all duration-250 ease-out h-full"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-10 h-10 text-gray-400 shrink-0 stroke-[1.5]" />
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-[#111827] leading-tight mb-2">
                    {commitment.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {commitment.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
