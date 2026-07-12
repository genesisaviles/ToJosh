import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Check } from 'lucide-react';

export default function Section13_Checklist() {
  const items = content.checklistItems;
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem('tripChecklist');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse checklist from localStorage');
      }
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    localStorage.setItem('tripChecklist', JSON.stringify(updated));
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all checklist progress?")) {
      setCheckedItems({});
      localStorage.removeItem('tripChecklist');
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-script text-center" style={{ marginBottom: '3rem' }}>Preparation Checklist</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
            {items.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '1.5rem',
                    backgroundColor: 'var(--color-white)',
                    border: '1px solid',
                    borderColor: isChecked ? 'var(--color-sage)' : 'var(--color-champagne)',
                    borderRadius: 'var(--border-radius)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isChecked ? '0 5px 15px rgba(157, 193, 131, 0.2)' : '0 5px 15px rgba(0,0,0,0.02)'
                  }}
                  aria-pressed={isChecked}
                >
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: '2px solid',
                    borderColor: isChecked ? 'var(--color-sage)' : 'var(--color-dusty-rose)',
                    backgroundColor: isChecked ? 'var(--color-sage)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    {isChecked && <Check size={14} color="white" strokeWidth={3} />}
                  </div>
                  <span style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '1.1rem',
                    color: isChecked ? 'var(--color-text-light)' : 'var(--color-text-dark)',
                    textDecoration: isChecked ? 'line-through' : 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-center">
            <button 
              onClick={handleReset}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-text-light)',
                textDecoration: 'underline',
                fontSize: '0.8rem',
                cursor: 'pointer',
                opacity: 0.7
              }}
            >
              Reset Checklist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
