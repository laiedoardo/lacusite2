import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const menuItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.project, href: '/progetto' },
    { name: t.nav.community, href: '/comunita' },
    { name: t.nav.journal, href: '/journal' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'it', label: 'IT' },
    { code: 'sc', label: 'SC' },
    { code: 'en', label: 'EN' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-100 px-6 py-4 md:px-10 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img 
            src="/logo.png" 
            alt="LACUS" 
            className="h-10 md:h-12 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3 text-[10px] uppercase tracking-widest font-bold">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`transition-colors ${language === lang.code ? 'text-vibrant-pink underline underline-offset-4' : 'text-ink/40 hover:text-ink'}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="w-10 h-10 rounded-full bg-vibrant-blue flex items-center justify-center text-white transition-transform active:scale-95"
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-bg bg-opacity-95 flex items-center justify-center"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-vibrant-pink flex items-center justify-center text-white"
            >
              <X size={28} />
            </button>
            <div className="text-center">
              <nav className="mb-12">
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-5xl md:text-7xl font-bold hover:text-vibrant-blue transition-all uppercase tracking-tighter"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="flex justify-center gap-6 pt-8 border-t border-ink/5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`text-sm uppercase tracking-widest font-bold ${language === lang.code ? 'text-vibrant-pink' : 'opacity-40'}`}
                  >
                    {lang.code === 'it' ? 'Italiano' : lang.code === 'sc' ? 'Sardu' : 'English'}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
