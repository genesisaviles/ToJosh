import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Section2_BirthdayLetter() {
  const data = content.birthdayLetter;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-script text-center" style={{ marginBottom: '3rem' }}>
            {data.title}
          </h2>
          
          <div style={{ padding: '3rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            {data.paragraphs.map((text, idx) => (
              <p key={idx} style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-dark)' }}>
                {text}
              </p>
            ))}
          </div>

          {data.placeholderImage.startsWith('./') ? (
            <img 
              src={data.placeholderImage} 
              alt="Together" 
              style={{ width: '100%', marginTop: '4rem', borderRadius: 'var(--border-radius)', display: 'block', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
            />
          ) : (
            <div className="image-placeholder" style={{ marginTop: '4rem', minHeight: '400px' }}>
              {data.placeholderImage}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
