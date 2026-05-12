import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-200 pt-12">
        <div>
          <span className="font-display text-2xl uppercase tracking-[0.2em]">Lacus</span>
          <p className="text-[10px] opacity-40 mt-2 tracking-widest">{t.footer.location}</p>
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.3em] font-medium opacity-60">
          <a href="#" className="hover:text-vibrant-blue transition-colors">Instagram</a>
          <a href="#" className="hover:text-vibrant-blue transition-colors">{t.nav.contacts}</a>
        </div>
        <div className="text-right flex flex-col items-center md:items-end">
          <p className="text-[10px] opacity-30 font-sans tracking-[0.1em]">
            {t.footer.designed}
          </p>
          <p className="text-[10px] opacity-30 mt-1 font-sans tracking-[0.1em]">
            &copy; {new Date().getFullYear()} Lacus Hub. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
