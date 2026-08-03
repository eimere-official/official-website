import { useEffect } from 'react';
import { motion } from 'framer-motion';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    content: 'By joining or representing EIMERE in any capacity, you agree to these Terms & Conditions, the Privacy Policy, and the Code Breach & Disciplinary Policy.'
  },
  {
    title: 'Scope of Engagement',
    content: 'Your role, responsibilities, and deliverables are defined in your engagement documents. These Terms apply alongside any signed agreement.'
  },
  {
    title: 'Contribution Points & Compensation',
    content: 'Contribution points, revenue share, or compensation shall be based on documented work, accurate reporting, and compliance with company standards.'
  },
  {
    title: 'Intellectual Property',
    content: 'All work created during your engagement with EIMERE shall belong exclusively to EIMERE unless agreed otherwise in writing.'
  },
  {
    title: 'Termination',
    content: 'Either party may terminate the engagement in accordance with the applicable agreement, subject to notice, handover, and company policies.'
  },
  {
    title: 'Limitation of Liability',
    content: 'EIMERE shall not be liable for indirect or consequential losses except where required by law.'
  },
  {
    title: 'Governing Law',
    content: "These Terms shall be governed by the laws applicable to EIMERE's place of incorporation."
  },
  {
    title: 'Amendments',
    content: 'EIMERE may update these Terms at any time. Continued association constitutes acceptance of the revised Terms.'
  }
];

export default function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-5 sm:px-12 lg:px-20 border-b border-gray-100 bg-white">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-gray-400 uppercase mb-4 sm:mb-6"
          >
            Legal & Compliance
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900 max-w-4xl"
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </section>

      {/* Main Content - Left Aligned Document Layout */}
      <section className="px-5 sm:px-12 lg:px-20 py-14 sm:py-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-4xl space-y-12 sm:space-y-14">
            {termsSections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="space-y-3"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                  {index + 1}. {item.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
