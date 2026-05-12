import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

const JournalPost = ({ date, title, description, image, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
        referrerPolicy="no-referrer" 
      />
    </div>
    <div className="px-2">
      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em]">{date}</span>
      <h3 className="text-2xl font-display mt-2 mb-3 leading-tight">{title}</h3>
      <p className="text-sm opacity-60 leading-relaxed font-light">{description}</p>
    </div>
  </motion.div>
);

export default function Journal() {
  const { t } = useLanguage();

  return (
    <section className="p-6 md:p-12 max-w-7xl mx-auto py-20">
      <div className="mb-20">
        <span className="accent-line bg-vibrant-green w-20 h-2 mb-6" />
        <h1 className="text-5xl md:text-7xl font-display mb-4">{t.journal.title}</h1>
        <p className="text-sm uppercase tracking-[0.5em] opacity-40">{t.journal.wip}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-24">
        {t.journal.posts.map((post: any, i: number) => {
          const images = [
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600'
          ];
          return (
            <JournalPost
              key={i}
              index={i}
              date={post.date}
              title={post.title}
              description={post.desc}
              image={images[i]}
            />
          );
        })}
      </div>
    </section>
  );
}

