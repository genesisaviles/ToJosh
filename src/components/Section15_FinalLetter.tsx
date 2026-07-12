import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { RotateCcw } from 'lucide-react';

export default function Section15_FinalLetter() {
  const data = content.finalLetter;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2 }}
        >
          <div style={{ padding: '4rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 20px 50px rgba(0,0,0,0.08)' }}>
            
            {data.paragraphs.map((text, idx) => (
              <p key={idx} style={{ marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '2', color: 'var(--color-text-dark)', fontStyle: idx === 0 ? 'italic' : 'normal' }}>
                {text}
              </p>
            ))}

            <p className="font-script" style={{ fontSize: '2.5rem', color: 'var(--color-sage)', marginTop: '4rem', marginBottom: '0.5rem' }}>
              {data.closing}
            </p>
            
            <p className="font-script" style={{ fontSize: '3.5rem', color: 'var(--color-gold)', lineHeight: '1.2', whiteSpace: 'pre-line' }}>
              {data.signature}
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '5rem' }}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'transparent', color: 'var(--color-sage)', border: '1px solid var(--color-sage)' }}
            >
              <RotateCcw size={18} />
              {data.replayButtonText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
