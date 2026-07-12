import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Section4_CostaRicaReveal() {
  const data = content.costaRicaReveal;

  return (
    <section className="section text-center" style={{ backgroundColor: 'var(--color-sage)', color: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="font-script" style={{ color: 'var(--color-ivory)', fontSize: '3.5rem', marginBottom: '0.5rem' }}>
            {data.title}
          </h2>
          <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--color-cream)' }}>
            {data.subtitle}
          </h3>

          {data.placeholderImage.startsWith('./') ? (
            <img 
              src={data.placeholderImage} 
              alt="Costa Rica" 
              style={{ width: '100%', marginBottom: '3rem', borderRadius: 'var(--border-radius)', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }} 
            />
          ) : (
            <div className="image-placeholder" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.3)', color: 'var(--color-white)', minHeight: '400px', marginBottom: '3rem' }}>
              {data.placeholderImage}
            </div>
          )}

          <div style={{ padding: '0 2rem' }}>
            {data.paragraphs.map((text, idx) => (
              <p key={idx} style={{ color: 'var(--color-ivory)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                {text}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
