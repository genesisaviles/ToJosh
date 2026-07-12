import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Calendar } from 'lucide-react';

export default function Section12_Itinerary() {
  const { itinerary } = content;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="font-script text-center" style={{ marginBottom: '4rem' }}>Our Journey Unfolds</h2>
        
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Timeline vertical line */}
          <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', backgroundColor: 'var(--color-champagne)' }}></div>

          {itinerary.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              style={{ position: 'relative', marginBottom: '4rem' }}
            >
              {/* Timeline dot */}
              <div style={{ 
                position: 'absolute', left: '-2.3rem', top: '0.5rem', width: '12px', height: '12px', 
                backgroundColor: 'var(--color-sage)', borderRadius: '50%', boxShadow: '0 0 0 4px var(--color-white)' 
              }}></div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sage)' }}>{day.day}</h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{day.date}</span>
              </div>

              <div style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: '0 5px 20px rgba(0,0,0,0.03)', border: '1px solid var(--color-champagne)' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{day.notes}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {day.destination !== "[ADD DESTINATION]" && (
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Destination</p>
                      <p>{day.destination}</p>
                    </div>
                  )}
                  {day.activity !== "[ADD ACTIVITY]" && (
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Activity</p>
                      <p>{day.activity}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
