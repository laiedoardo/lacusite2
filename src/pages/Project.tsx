import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Project() {
  const { language, t } = useLanguage();

  const details = [
    { title: t.project.studioTitle, desc: t.project.studioDesc, color: 'bg-vibrant-blue', path: 'studio' },
    { title: t.project.residencyTitle, desc: t.project.residencyDesc, color: 'bg-vibrant-pink', path: 'residency' },
    { title: t.project.visionTitle, desc: t.project.visionDesc, color: 'bg-vibrant-yellow', path: 'vision' },
  ];

  return (
    <section className="p-6 md:p-12 max-w-7xl mx-auto py-20" data-sb-object-id="content/translations.json">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="accent-line bg-vibrant-blue w-20 h-2 mb-6" />
        <h1 
          className="text-5xl md:text-7xl font-display mb-8"
          data-sb-field-path={`${language}.project.title`}
        >
          {t.project.title}
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="vibrant-card"
          >
            <div className={`w-10 h-1 mb-6 ${detail.color}`} />
            <h2 
              className="text-2xl font-display mb-6"
              data-sb-field-path={`${language}.project.${detail.path}Title`}
            >
              {detail.title}
            </h2>
            <p 
              className="text-lg opacity-70 leading-relaxed font-light"
              data-sb-field-path={`${language}.project.${detail.path}Desc`}
            >
              {detail.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-20 rounded-3xl overflow-hidden aspect-[21/9]"
      >
        <img
          src={t.project.image}
          alt="Lacus Studio Detail"
          data-sb-field-path={`${language}.project.image`}
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}

