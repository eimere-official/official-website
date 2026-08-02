import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface FooterLink {
  label: string;
  href: string;
  type: 'scroll' | 'route' | 'external';
}

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/eimere/', baseClass: 'text-gray-500', hoverClass: 'hover:text-[#0077b5]' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/eimere.in', baseClass: 'text-gray-500', hoverClass: 'hover-instagram' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com', baseClass: 'text-gray-500', hoverClass: 'hover:text-[#1877F2]' },
  { name: 'X', icon: FaXTwitter, href: 'https://x.com', baseClass: 'text-gray-500', hoverClass: 'hover:text-black' },
];

const serviceLinks: FooterLink[] = [
  { label: 'Web Development', href: '/#services', type: 'scroll' },
  { label: 'Mobile App Development', href: '/#services', type: 'scroll' },
  { label: 'UI/UX Design', href: '/#services', type: 'scroll' },
  { label: 'AI Solutions', href: '/#services', type: 'scroll' },
  { label: 'Data Analytics', href: '/#services', type: 'scroll' },
  { label: 'Cloud Services & DevOps', href: '/#services', type: 'scroll' },
  { label: 'Cybersecurity', href: '/#services', type: 'scroll' },
];

const industryLinks: FooterLink[] = [
  { label: 'Retail & E-commerce', href: '/#industries', type: 'scroll' },
  { label: 'Healthcare', href: '/#industries', type: 'scroll' },
  { label: 'Manufacturing', href: '/#industries', type: 'scroll' },
  { label: 'FinTech & Finance', href: '/#industries', type: 'scroll' },
  { label: 'Logistics & Supply Chain', href: '/#industries', type: 'scroll' },
];

const companyLinks: FooterLink[] = [
  { label: 'About Us', href: '/#about', type: 'scroll' },
  { label: 'Careers', href: '/careers', type: 'route' },
  { label: 'Case Studies', href: '/#case-studies', type: 'scroll' },
  { label: 'AI Solutions', href: '/#services', type: 'scroll' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('success');
      // Simulate backend logic
      setTimeout(() => setStatus('idle'), 3000);
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  const renderLink = (link: FooterLink) => {
    if (link.type === 'route') {
      return (
        <Link
          key={link.label}
          to={link.href}
          className="block text-sm text-gray-500 hover:text-[#111827] transition-colors duration-200"
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.label}
        href={link.href}
        className="block text-sm text-gray-500 hover:text-[#111827] transition-colors duration-200"
      >
        {link.label}
      </a>
    );
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white border-t border-gray-200 pt-16 pb-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="lg:pr-8 flex flex-col items-start">
            <a href="/" className="flex items-center gap-2 mb-4 group">
              <img
                src="/logo.svg"
                alt="EIMERE Logo"
                className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-xl font-bold tracking-widest text-gray-900 group-hover:text-blue-600 transition-colors">
                EIMERE
              </span>
            </a>

            <p className="font-bold text-base text-[#111827] mb-2 leading-snug">
              Engineering Intelligence. Empowering Enterprises.
            </p>
            <p className="text-sm text-gray-500 max-w-sm mb-8 leading-relaxed">
              A full-stack technology partner solving real industry problems through AI, software, data, and cloud.
            </p>

            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Follow EIMERE
            </h4>
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white transition-all duration-200 group hover:border-gray-400 hover:shadow-sm ${social.hoverClass}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <Icon className="w-4 h-4 text-gray-400 group-hover:text-current transition-colors" />
                  </a>
                );
              })}
            </div>

            <h4 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">
              Stay in the loop
            </h4>
            <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-[340px] relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Your email"
                className={`w-full py-2.5 pl-4 pr-28 text-sm rounded-full border ${status === 'error' ? 'border-red-400' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors`}
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-4 text-xs font-semibold rounded-full border border-gray-900 bg-white text-[#111827] hover:bg-[#111827] hover:text-white transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
            {status === 'success' && (
              <p className="text-xs text-green-600 mt-2">Thanks for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-500 mt-2">Please enter a valid email.</p>
            )}
            <p className="text-[10px] text-gray-400 mt-2">
              (Note: Newsletter backend is not yet connected)
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Services
            </h3>
            <div className="flex flex-col gap-3.5 mb-6">
              {serviceLinks.map(renderLink)}
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-[#111827] hover:text-blue-600 transition-colors"
            >
              View all
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Column 3: Industries & Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Industries
            </h3>
            <div className="flex flex-col gap-3.5 mb-6">
              {industryLinks.map(renderLink)}
            </div>
            <Link
              to="/industries"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-[#111827] hover:text-blue-600 transition-colors mb-8"
            >
              View all
              <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>

            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Company
            </h3>
            <div className="flex flex-col gap-3.5">
              {companyLinks.map(renderLink)}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Contact
            </h3>
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="mailto:info.eimere@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#111827] transition-colors group"
              >
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                info.eimere@gmail.com
              </a>

              <a
                href="tel:+919025032244"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-[#111827] transition-colors group"
              >
                <Phone className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                +91 90250 32244
              </a>
            </div>

            <a
              href="/#contact"
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-full border border-gray-900 bg-white text-[#111827] hover:bg-[#111827] hover:text-white transition-all duration-250 hover:scale-[1.02]"
            >
              Book a Consultation
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} EIMERE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
