import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Car } from 'lucide-react';

export default function Section7_RentalCar() {
  const data = content.rentalCar;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Car size={32} color="var(--color-sage)" />
          </div>
          <h2 className="font-script text-center" style={{ marginBottom: '1rem' }}>{data.title}</h2>
          <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontStyle: 'italic' }}>
            {data.introText}
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              {data.placeholderImage.startsWith('./') ? (
                <img 
                  src={data.placeholderImage} 
                  alt="Rental Car" 
                  style={{ width: '100%', borderRadius: 'var(--border-radius)', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                />
              ) : (
                <div className="image-placeholder" style={{ minHeight: '300px' }}>
                  {data.placeholderImage}
                </div>
              )}
            </div>
            
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ padding: '2rem', backgroundColor: 'var(--color-ivory)', borderRadius: 'var(--border-radius)' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Vehicle</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>{data.company} - {data.model}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Pick-up</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>{data.pickupLocation}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Drop-off</p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>{data.dropoffLocation}</p>
                  </div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Total Price (14 Days)</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-sage)' }}>${data.total.toLocaleString()} USD</p>
                </div>
                <div>
                  <a href={data.reservationLink} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-sage)', textDecoration: 'underline' }}>View Reservation</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
