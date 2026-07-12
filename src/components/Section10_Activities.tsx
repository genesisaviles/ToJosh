import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Compass } from 'lucide-react';

export default function Section10_Activities() {
  const { activities } = content;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="font-script text-center" style={{ marginBottom: '4rem' }}>Experiences We'll Share</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {activities.map((act, idx) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              <div style={{ flex: '1 1 400px' }}>
                <div className="image-placeholder" style={{ minHeight: '350px' }}>
                  {act.placeholderImage}
                </div>
              </div>
              
              <div style={{ flex: '1 1 300px', padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Compass size={24} color="var(--color-sage)" />
                  <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>{act.name}</h3>
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.1rem' }}>{act.description}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Location</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>{act.location}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Duration</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>{act.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
