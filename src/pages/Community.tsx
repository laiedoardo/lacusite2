import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Community() {
  const { language, t } = useLanguage();

  return (
    <section className="p-6 md:p-12 max-w-7xl mx-auto py-20 min-h-[80vh]" data-sb-object-id="content/translations.json">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <span className="accent-line bg-vibrant-yellow w-20 h-2 mx-auto mb-6" />
        <h1 
          className="text-5xl md:text-7xl font-display mb-8"
          data-sb-field-path={`${language}.partners.title`}
        >
          {t.partners.title}
        </h1>
        <p 
          className="text-xl font-light opacity-70 max-w-2xl mx-auto"
          data-sb-field-path={`${language}.partners.description`}
        >
          {t.partners.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.partners.list.map((partner: string, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="vibrant-card flex items-center justify-center h-48 group hover:border-vibrant-yellow transition-all"
            data-sb-field-path={`${language}.partners.list.${i}`}
          >
            <span className="text-sm font-display text-center uppercase tracking-widest leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
              {partner}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-12 text-center bg-white rounded-3xl shadow-card"
      >
        <h3 className="text-2xl font-display mb-4">Vuoi far parte della nostra rete?</h3>
        <p className="mb-8 opacity-60">Siamo sempre alla ricerca di nuove collaborazioni con il territorio.</p>
        <a href="mailto:info@lacus.it" className="inline-block px-10 py-4 bg-black text-white rounded-full font-display uppercase tracking-widest hover:scale-105 transition-transform">
          Contattaci
        </a>
      </motion.div>
    </section>
  );
}

