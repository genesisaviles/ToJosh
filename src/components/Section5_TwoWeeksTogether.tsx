import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Section5_TwoWeeksTogether() {
  const data = content.tripOverview;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <h2 className="font-script" style={{ marginBottom: '3rem' }}>{data.title}</h2>
          
          <div style={{ padding: '3rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.2rem' }}>Arrival</p>
              <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{data.arrivalDate}</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.2rem' }}>Duration</p>
              <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{data.duration}</p>
            </div>
            <div>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.2rem' }}>Base</p>
              <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)' }}>{data.baseLocation}</p>
            </div>
          </div>

          {data.placeholderImage.startsWith('./') ? (
            <img 
              src={data.placeholderImage} 
              alt="Two Weeks Together" 
              style={{ width: '100%', marginTop: '3rem', borderRadius: 'var(--border-radius)', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
          ) : (
            <div className="image-placeholder" style={{ marginTop: '3rem', minHeight: '350px' }}>
              {data.placeholderImage}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
