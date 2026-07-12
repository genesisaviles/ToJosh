import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { MapPin } from 'lucide-react';

export default function Section9_Destinations() {
  const destinations = (content as any).destinations;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="font-script text-center" style={{ marginBottom: '4rem' }}>Places We'll Discover</h2>
        
        {['San José', 'Guanacaste', 'Limón'].map((region) => {
          const key = region === 'San José' ? 'sanJose' : region === 'Limón' ? 'limon' : region.toLowerCase();
          const dests = destinations[key] || [];
          
          if (dests.length === 0) return null;

          return (
            <div key={region} style={{ marginBottom: '6rem' }}>
              <h3 className="font-script text-center" style={{ fontSize: '2.5rem', color: 'var(--color-sage)', marginBottom: '3rem' }}>{region}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {dests.map((dest: any, idx: number) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                    style={{ backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                  >
                    {dest.placeholderImage.startsWith('/') ? (
                       <img src={dest.placeholderImage} alt={dest.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    ) : (
                      <div className="image-placeholder" style={{ minHeight: '250px', borderRadius: '0' }}>
                        {dest.placeholderImage}
                      </div>
                    )}
                    <div style={{ padding: '2rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sage)', marginBottom: '1rem' }}>{dest.name}</h3>
                      <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>{dest.description}</p>
                      
                      {dest.entryFee > 0 && (
                        <p style={{ fontWeight: 'bold', color: 'var(--color-gold)', marginBottom: '1rem' }}>Entry: ${dest.entryFee.toFixed(2)} USD</p>
                      )}
                      
                      {(dest.distance || dest.travelTime) && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                          <MapPin size={16} />
                          {dest.distance} {dest.distance && dest.travelTime && '•'} {dest.travelTime}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
