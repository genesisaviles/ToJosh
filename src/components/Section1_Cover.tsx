import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';
import { Play } from 'lucide-react';

export default function Section1_Cover() {
  const [isOpen, setIsOpen] = useState(false);
  const data = content.cover;

  return (
    <section className="section text-center" style={{ minHeight: '100vh', position: 'relative' }}>
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--color-ivory)', zIndex: 50 }}
          >
            <h1 className="font-script" style={{ marginBottom: '2rem' }}>A Journey Made for Us</h1>
            
            {/* Wax Seal / Open Button */}
            <button 
              onClick={() => setIsOpen(true)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-sage)',
                border: '2px solid var(--color-gold)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Open Invitation"
            >
              <Play size={24} fill="white" />
            </button>
            <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>
              {data.ctaText}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="coverContent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ width: '100%', maxWidth: 'var(--max-width)', margin: '0 auto', padding: '2rem' }}
          >
            <h2 className="font-script" style={{ fontSize: '4rem', marginBottom: '1rem' }}>{data.mainTitle}</h2>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-sage)', marginBottom: '0.5rem' }}>{data.subtitle}</h3>
            <p style={{ fontStyle: 'italic', marginBottom: '3rem' }}>{data.date}</p>
            
            {data.placeholderCoverImage.startsWith('./') ? (
              <img 
                src={data.placeholderCoverImage} 
                alt="Cover" 
                style={{ width: '100%', maxWidth: '800px', margin: '0 auto 3rem auto', borderRadius: 'var(--border-radius)', display: 'block', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
              />
            ) : (
              <div className="image-placeholder" style={{ marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                {data.placeholderCoverImage}
              </div>
            )}
            
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
              {data.introText}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
