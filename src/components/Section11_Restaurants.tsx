import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Utensils } from 'lucide-react';

export default function Section11_Restaurants() {
  const { restaurants } = content;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="font-script text-center" style={{ marginBottom: '4rem' }}>Tastes to Remember</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {restaurants.map((rest, idx) => (
            <motion.div
              key={rest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              style={{ padding: '2rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sage)' }}>{rest.name}</h3>
                <Utensils size={20} color="var(--color-gold)" />
              </div>
              
              {rest.placeholderImage.startsWith('./') ? (
                <div style={{ marginBottom: '1.5rem', overflow: 'hidden', borderRadius: 'var(--border-radius)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <img src={rest.placeholderImage} alt={rest.name} style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
                </div>
              ) : (
                <div className="image-placeholder" style={{ minHeight: '150px', marginBottom: '1.5rem' }}>
                  {rest.placeholderImage}
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Category</p>
                <p>{rest.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
