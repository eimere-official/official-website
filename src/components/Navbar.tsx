import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown,
  Menu,
  X,
  Plus,
  Minus
} from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { serviceCategories } from '../data/servicesData';

const navLinks = [
  { name: 'Home', href: '/#home', isActive: true },
  { name: 'About Us', href: '/#about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Contact', href: '/#contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/eimere/', baseClass: 'text-gray-500', hoverClass: 'hover:text-[#0077b5]' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/eimere.in', baseClass: 'text-gray-500', hoverClass: 'hover-instagram' },
  { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com', baseClass: 'text-gray-500', hoverClass: 'hover:text-[#1877F2]' },
  { name: 'X', icon: FaXTwitter, href: 'https://x.com', baseClass: 'text-gray-500', hoverClass: 'hover:text-black' },
];

// Motion variants for staggered mobile menu animation
const containerVariants = {
  open: { 
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  },
  closed: { 
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  closed: { opacity: 0, y: 15, transition: { duration: 0.3 } }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <linearGradient id="instagram-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#f09433" offset="0%" />
          <stop stopColor="#e6683c" offset="25%" />
          <stop stopColor="#dc2743" offset="50%" />
          <stop stopColor="#cc2366" offset="75%" />
          <stop stopColor="#bc1888" offset="100%" />
        </linearGradient>
      </svg>
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' 
            : 'bg-white'
        }`}
      >
        <div className="mx-auto max-w-[1400px] h-[65px] px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex-shrink-0 group flex items-center">
            <img 
              src="/logo.svg" 
              alt="EIMERE Logo" 
              className="h-[28px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-2xl font-bold tracking-widest text-gray-900 font-inter transition-all duration-300 ease-out group-hover:tracking-[0.15em] group-hover:text-blue-600">
              EIMERE
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div 
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <a 
                  href={link.href}
                  className={`flex items-center gap-1 text-[17px] font-medium transition-colors duration-300 py-2 relative ${
                    link.isActive ? 'text-gray-950' : 'text-gray-700 group-hover:text-gray-950'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Underline Animation */}
                <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-black transition-all duration-300 ease-in-out ${
                  link.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
                
                {/* Full Mega Menu: All Categories + All Sub-services listed directly underneath */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[1160px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-100 p-7 overflow-hidden"
                      >
                        {/* Top Header Bar */}
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <h3 className="text-sm font-bold text-gray-950">Technology Services</h3>
                            <span className="text-xs text-gray-400">· 10 Specialized Pillars</span>
                          </div>
                          <a
                            href="/services"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-semibold text-gray-900 hover:text-black transition-colors"
                          >
                            Explore All Services &rarr;
                          </a>
                        </div>

                        {/* 10 Categories in a 5-Column Grid with Spacious Typography */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-7 gap-y-7">
                          {serviceCategories.map((cat) => {
                            const Icon = cat.icon;
                            const mainItems = cat.items.slice(0, 3);
                            const remainingCount = cat.items.length - 3;

                            return (
                              <div key={cat.id} className="space-y-2.5">
                                {/* Category Title */}
                                <a
                                  href={`/services#cat-${cat.id}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="group flex items-center gap-2 font-bold text-[13px] text-gray-950 hover:text-black transition-colors pb-1 border-b border-gray-100"
                                >
                                  <div className="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                                    <Icon className="w-3.5 h-3.5 text-gray-700 group-hover:text-white" strokeWidth={1.75} />
                                  </div>
                                  <span className="truncate">{cat.title}</span>
                                </a>

                                {/* Featured Key Services */}
                                <div className="space-y-1 pl-0.5">
                                  {mainItems.map((sub, idx) => (
                                    <a
                                      key={idx}
                                      href={`/services#cat-${cat.id}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="block text-[12.5px] text-gray-500 hover:text-gray-950 transition-colors line-clamp-1 py-0.5"
                                      title={sub.title}
                                    >
                                      {sub.title}
                                    </a>
                                  ))}
                                  {remainingCount > 0 && (
                                    <a
                                      href={`/services#cat-${cat.id}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="inline-block text-[11px] font-semibold text-gray-400 hover:text-gray-950 transition-colors pt-0.5"
                                    >
                                      +{remainingCount} more &rarr;
                                    </a>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side: Button + Social Icons */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/#contact" className="relative px-5 py-1.5 text-[15px] font-medium text-white rounded-full bg-gray-900 group overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              <span className="relative z-10">Get Started</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx} 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex items-center justify-center transition-all duration-250 ease-in-out hover:scale-110 ${social.baseClass} ${social.hoverClass}`}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-gray-900 p-2 -mr-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] bg-white shadow-2xl z-[70] rounded-l-2xl flex flex-col lg:hidden overflow-hidden"
            >
              <div className="p-6 flex justify-end">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-2">
                <motion.div 
                  variants={containerVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col gap-6"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <div 
                        className="flex items-center justify-between cursor-pointer group"
                        onClick={() => {
                          if (link.hasDropdown) {
                            setMobileServicesOpen(!mobileServicesOpen);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        <a
                          href={link.href}
                          className={`text-[17px] font-medium transition-colors ${
                            link.isActive ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                          }`}
                          onClick={(e) => {
                            if (link.hasDropdown) {
                              e.preventDefault();
                              setMobileServicesOpen(!mobileServicesOpen);
                            } else {
                              setIsMobileMenuOpen(false);
                            }
                          }}
                        >
                          {link.name}
                        </a>
                        {link.hasDropdown && (
                          <button className="text-gray-500">
                            {mobileServicesOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile Dropdown — All Categories & All Sub-services */}
                      {link.hasDropdown && (
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-4 pt-4 pb-2 pl-4 border-l border-gray-100 ml-2 mt-2">
                                {serviceCategories.map((cat) => (
                                  <div key={cat.id} className="space-y-1">
                                    <div
                                      onClick={() => setMobileExpandedCat(mobileExpandedCat === cat.id ? null : cat.id)}
                                      className="flex items-center justify-between cursor-pointer text-sm font-semibold text-gray-800 py-1"
                                    >
                                      <span>{cat.title}</span>
                                      <Plus className={`w-3.5 h-3.5 transition-transform ${mobileExpandedCat === cat.id ? 'rotate-45' : ''}`} />
                                    </div>

                                    {mobileExpandedCat === cat.id && (
                                      <div className="pl-3 space-y-1 py-1 border-l border-gray-200">
                                        {cat.items.map((sub, sIdx) => (
                                          <a
                                            key={sIdx}
                                            href={`/services#cat-${cat.id}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-xs text-gray-500 hover:text-gray-900 py-0.5"
                                          >
                                            {sub.title}
                                          </a>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div variants={itemVariants} className="pt-4">
                    <a href="/#contact" className="w-full relative px-6 py-3 font-medium text-white rounded-full bg-gray-900 group overflow-hidden shadow-sm flex justify-center">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                      <span className="relative z-10">Get Started</span>
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Mobile Social Icons */}
              <div className="p-8 border-t border-gray-100 flex justify-center gap-8">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={idx} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`transition-all duration-250 ease-in-out hover:scale-110 ${social.baseClass} ${social.hoverClass}`}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
