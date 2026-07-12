import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Section3_OurStory() {
  const data = content.ourStory;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="font-script text-center" style={{ marginBottom: '5rem', fontSize: '3.5rem' }}>{data.title}</h2>
        
        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            backgroundColor: 'var(--color-champagne)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}></div>

          {data.timeline.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '4rem',
                  position: 'relative',
                  width: '100%',
                  zIndex: 2
                }}
              >
                {/* Center Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '20px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: 'var(--color-sage)',
                  borderRadius: '50%',
                  transform: 'translateX(-50%)',
                  boxShadow: '0 0 0 4px var(--color-white)'
                }}></div>

                {/* Content Box */}
                <div style={{
                  width: '45%',
                  padding: '2rem',
                  backgroundColor: 'var(--color-ivory)',
                  borderRadius: 'var(--border-radius)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  border: '1px solid var(--color-champagne)'
                }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-sage)', marginBottom: '1rem', fontStyle: 'italic' }}>{item.heading}</h3>
                  <p style={{ color: 'var(--color-text-dark)', lineHeight: '1.8' }}>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
