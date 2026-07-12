import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Plane } from 'lucide-react';

export default function Section6_Flights() {
  const { flights, flightsClosingText } = content;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Plane size={32} color="var(--color-sage)" />
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {flights.map((flight) => (
              <div key={flight.id} style={{ 
                backgroundColor: 'var(--color-white)', 
                padding: '2rem', 
                borderRadius: 'var(--border-radius)', 
                boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                border: '1px solid var(--color-champagne)'
              }}>
                <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sage)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-champagne)', paddingBottom: '0.5rem' }}>
                  {flight.label}
                </h3>
                
                {flight.placeholderImage && flight.placeholderImage.startsWith('/') && (
                  <div style={{ marginBottom: '2rem' }}>
                    <img src={flight.placeholderImage} alt={flight.label} style={{ width: '100%', borderRadius: 'var(--border-radius)', display: 'block', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }} />
                  </div>
                )}
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>From</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>{flight.departureAirport}</p>
                    {flight.departureTime && (
                      <p style={{ color: 'var(--color-sage)', marginTop: '0.5rem' }}>{flight.departureTime}</p>
                    )}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>To</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>{flight.arrivalAirport}</p>
                    {flight.arrivalTime && (
                      <p style={{ color: 'var(--color-sage)', marginTop: '0.5rem' }}>{flight.arrivalTime}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {(content as any).priceSummaryImage && (
            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
              <img src={(content as any).priceSummaryImage} alt="Price Summary" style={{ maxWidth: '100%', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
            </div>
          )}

          <h3 className="font-script text-center" style={{ marginTop: '4rem', fontSize: '2.5rem' }}>
            {flightsClosingText}
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
