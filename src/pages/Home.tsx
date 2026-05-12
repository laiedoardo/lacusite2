import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <div className="overflow-hidden" data-sb-object-id="content/translations.json">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={t.hero.image}
            alt="Lacus Hero"
            data-sb-field-path={`${language}.hero.image`}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=2000";
            }}
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <img 
              src="/logo.png" 
              alt="Lacus Logo" 
              className="w-48 md:w-64 mx-auto mb-6"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <h1 
              className="text-6xl md:text-9xl font-display text-white drop-shadow-lg tracking-tighter"
              data-sb-field-path={`${language}.hero.title`}
            >
              {t.hero.title}
            </h1>
            <p 
              className="text-xl md:text-2xl text-white font-light mt-4 drop-shadow-md"
              data-sb-field-path={`${language}.hero.subtitle`}
            >
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Il Progetto in tre punti */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.project.points.map((point: string, i: number) => {
            const colors = ['bg-vibrant-blue', 'bg-vibrant-pink', 'bg-vibrant-yellow'];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="vibrant-card flex flex-col items-center text-center group hover:scale-[1.02] transition-transform"
              >
                <div className={`w-12 h-1 mb-6 ${colors[i % colors.length]}`} />
                <p className="text-lg leading-relaxed opacity-80">{point}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Radici e Futuro */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center border-y border-black/5 py-16">
          <h2 
            className="text-4xl font-display mb-8"
            data-sb-field-path={`${language}.roots.title`}
          >
            {t.roots.title}
          </h2>
          <p 
            className="text-xl font-light leading-loose opacity-80"
            data-sb-field-path={`${language}.roots.description`}
          >
            {t.roots.description}
          </p>
        </div>
      </section>

      {/* Stato dei lavori */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 
              className="text-4xl font-display"
              data-sb-field-path={`${language}.status.title`}
            >
              {t.status.title}
            </h2>
            <p 
              className="text-lg opacity-60 mt-2"
              data-sb-field-path={`${language}.status.description`}
            >
              {t.status.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.status.images.map((img: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square bg-gray-100 rounded-2xl overflow-hidden group relative"
              data-sb-field-path={`${language}.status.images.${i}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                data-sb-field-path=".src"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span 
                  className="text-white font-display text-xl"
                  data-sb-field-path=".title"
                >
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Locali */}
      <section className="py-20 px-6 max-w-7xl mx-auto mb-20">
        <div className="vibrant-card text-center bg-gradient-to-r from-gray-50 to-white">
          <h2 
            className="text-3xl font-display mb-4"
            data-sb-field-path={`${language}.partners.title`}
          >
            {t.partners.title}
          </h2>
          <p 
            className="opacity-60 mb-12"
            data-sb-field-path={`${language}.partners.description`}
          >
            {t.partners.description}
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale filter">
            {t.partners.list.map((partner: string, i: number) => (
              <span 
                key={i} 
                className="text-lg font-display uppercase tracking-widest hover:opacity-100 transition-opacity cursor-default"
                data-sb-field-path={`${language}.partners.list.${i}`}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

