import { useEffect } from 'react';
import { motion } from 'framer-motion';

const privacySections = [
  {
    title: 'Purpose',
    content: 'This Privacy Policy explains how EIMERE collects, uses, stores, and protects personal and professional information.'
  },
  {
    title: 'Use of Information',
    content: 'Information is used to manage operations, process payments, evaluate performance, maintain security, comply with legal obligations, and improve internal processes. It shall not be used for unrelated purposes without consent.'
  },
  {
    title: 'Data Sharing',
    content: 'EIMERE does not sell or rent personal information. Data may be shared only as required for projects, legal compliance, or protection of EIMERE and its members.'
  },
  {
    title: 'Confidentiality',
    content: 'All non-public information, including credentials, business strategies, source code, and client data, shall remain confidential and be used only for authorized purposes during and after association with EIMERE. Unauthorized disclosure or misuse is a policy violation.'
  },
  {
    title: 'Data & Information Security',
    content: 'EIMERE maintains reasonable safeguards to protect information. Members shall follow security practices, protect credentials, use authorized systems, and report security incidents promptly.'
  },
  {
    title: 'Data Retention',
    content: 'Personal and work-related information shall be retained only as necessary or required by law, then securely deleted or anonymized.'
  }
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>
        </div>
      </section>

      {/* Main Content - Left Aligned Document Layout */}
      <section className="px-5 sm:px-12 lg:px-20 py-14 sm:py-24">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-4xl space-y-12 sm:space-y-14">
            {privacySections.map((item, index) => (
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
