import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { differenceInSeconds, format } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';

export default function Section14_Countdown() {
  const data = content.countdown;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [currentTimeOntario, setCurrentTimeOntario] = useState('');
  const [currentTimeCostaRica, setCurrentTimeCostaRica] = useState('');

  useEffect(() => {
    // Construct the exact target UTC time based on the Toronto timezone
    const targetDateUtc = toDate(data.targetDate, { timeZone: data.targetTimeZone });

    const timer = setInterval(() => {
      const now = new Date();
      const diffSeconds = differenceInSeconds(targetDateUtc, now);

      if (diffSeconds <= 0) {
        setIsFinished(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diffSeconds / (3600 * 24)),
          hours: Math.floor((diffSeconds % (3600 * 24)) / 3600),
          minutes: Math.floor((diffSeconds % 3600) / 60),
          seconds: diffSeconds % 60
        });
      }

      // Update current times
      setCurrentTimeOntario(formatInTimeZone(now, data.targetTimeZone, 'MMM d, yyyy h:mm:ss a'));
      setCurrentTimeCostaRica(formatInTimeZone(now, data.costaRicaTimeZone, 'MMM d, yyyy h:mm:ss a'));
      
    }, 1000);

    return () => clearInterval(timer);
  }, [data]);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-ivory)', borderTop: '1px solid var(--color-champagne)' }}>
      <div className="container text-center" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {isFinished ? (
            <h2 className="font-script" style={{ fontSize: '4rem', color: 'var(--color-sage)' }}>
              {data.finishedMessage}
            </h2>
          ) : (
            <>
              <h2 className="font-script" style={{ marginBottom: '1rem' }}>{data.label}</h2>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '4rem' }}>{data.syncLabel}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', 
                    padding: '2rem', backgroundColor: 'var(--color-white)', 
                    borderRadius: 'var(--border-radius)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    minWidth: '120px'
                  }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'var(--color-sage)', lineHeight: '1' }}>
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginTop: '1rem', color: 'var(--color-text-light)' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', borderTop: '1px solid var(--color-champagne)', paddingTop: '3rem' }}>
                <div>
                  <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Current Time in Ontario</h4>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-text-dark)' }}>{currentTimeOntario}</p>
                </div>
                <div>
                  <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>Current Time in Costa Rica</h4>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: 'var(--color-text-dark)' }}>{currentTimeCostaRica}</p>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
