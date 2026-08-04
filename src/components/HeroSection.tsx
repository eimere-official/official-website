import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Subtle center depth glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 50% at 50% 47%, rgba(234,234,250,0.70) 0%, transparent 70%)',
        }}
      />

      {/* ── Hero content ── */}
      <div
        className="relative flex flex-col items-center text-center w-full max-w-4xl mx-auto px-6"
        style={{ zIndex: 1 }}
      >
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
            padding: '0.38rem 1.05rem',
            borderRadius: '9999px',
            border: '1px solid rgba(0,0,0,0.09)',
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(12px)',
            marginBottom: '1.5rem',
          }}
        >
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: '#111', display: 'inline-block', flexShrink: 0 }}
          />
          <span style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.17em', color: '#555', textTransform: 'uppercase' }}>
            Technology Consulting &amp; AI Solutions
          </span>
        </motion.div>

        {/* EIMERE Wordmark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.87, filter: 'blur(14px)' }}
          animate={{ opacity: 1, scale: 1,    filter: 'blur(0px)'  }}
          transition={{ duration: 1.05, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}
        >
          <img
            src="/logo.svg"
            alt="EIMERE"
            style={{
              width: '100%', maxWidth: 610, height: 'auto',
              filter: 'drop-shadow(0 4px 22px rgba(0,0,0,0.07))',
            }}
          />
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem', transformOrigin: 'center' }}
        >
          <div style={{ width: 56, height: 1, background: 'linear-gradient(to right, transparent, #CBCDD5)' }} />
          <motion.div
            animate={{ scale: [1, 1.85, 1], opacity: [0.38, 0.9, 0.38] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 6, height: 6, borderRadius: '50%', background: '#AAABB8' }}
          />
          <div style={{ width: 56, height: 1, background: 'linear-gradient(to left, transparent, #CBCDD5)' }} />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(12.5px, 1.78vw, 19px)',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#0F0F16',
            marginBottom: '1.75rem',
            lineHeight: 1.7,
          }}
        >
          Where Business Meets{' '}
          <span style={{ color: '#A9ABB7' }}>Innovation</span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.87, ease: 'easeOut' }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', justifyContent: 'center' }}
        >
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 10px 32px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.87rem 2.05rem',
              borderRadius: '0.5rem',
              background: '#0F0F16',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.025em',
              textDecoration: 'none',
              border: '2px solid #0F0F16',
              whiteSpace: 'nowrap',
            }}
          >
            Book a Consultation
            <ArrowRight style={{ width: 15, height: 15 }} />
          </motion.a>

          <motion.a
            href="/#services"
            whileHover={{ scale: 1.04, background: '#F3F3F7', boxShadow: '0 6px 22px rgba(0,0,0,0.06)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.87rem 2.05rem',
              borderRadius: '0.5rem',
              background: '#FFFFFF',
              color: '#0F0F16',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.025em',
              textDecoration: 'none',
              border: '2px solid #E1E3EA',
              whiteSpace: 'nowrap',
            }}
          >
            Explore Our Solutions
            <ArrowRight style={{ width: 15, height: 15 }} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <span style={{
          fontSize: '0.57rem', letterSpacing: '0.3em', textTransform: 'uppercase',
          color: '#A9ABB7', marginBottom: '0.4rem', fontWeight: 500,
        }}>
          Scroll to Explore
        </span>
        <div style={{ position: 'relative', width: 1.5, height: 44, background: '#E1E3EA', borderRadius: 4 }}>
          <motion.div
            animate={{ top: ['0%', '72%', '0%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: '50%', transform: 'translateX(-50%)',
              width: 7, height: 7, borderRadius: '50%', background: '#A9ABB7',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
