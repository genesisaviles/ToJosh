import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { ShoppingBag } from 'lucide-react';

export default function Section11B_Shopping() {
  const shopping = (content as any).shopping;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="font-script text-center" style={{ marginBottom: '4rem' }}>Groceries, Shopping & Souvenirs</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
          {shopping.map((shop: any, idx: number) => (
            <motion.div
              key={shop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              style={{ padding: '1.5rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 5px 20px rgba(0,0,0,0.03)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sage)' }}>{shop.name}</h3>
                <ShoppingBag size={18} color="var(--color-gold)" />
              </div>
              
              {shop.placeholderImage.startsWith('/') ? (
                <div style={{ marginBottom: '1.5rem', overflow: 'hidden', borderRadius: 'var(--border-radius)', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <img src={shop.placeholderImage} alt={shop.name} style={{ width: '100%', height: '150px', objectFit: 'cover', display: 'block' }} />
                </div>
              ) : (
                <div className="image-placeholder" style={{ minHeight: '150px', marginBottom: '1.5rem' }}>
                  {shop.placeholderImage}
                </div>
              )}

              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Category</p>
                <p>{shop.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
