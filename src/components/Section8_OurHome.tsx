import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Home } from 'lucide-react';

export default function Section8_OurHome() {
  const dataList = (content as any).accommodations;

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
            <Home size={40} color="var(--color-sage)" />
          </div>

          {dataList.map((data: any, index: number) => (
            <div key={data.id} style={{ marginBottom: index === dataList.length - 1 ? '0' : '6rem' }}>
              <h2 className="font-script text-center" style={{ marginBottom: '0.5rem' }}>{data.title}</h2>
              <p className="text-center" style={{ fontWeight: 'bold', color: 'var(--color-sage)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {data.location} • {data.dates}
              </p>
              
              {data.introText && (
                <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontStyle: 'italic' }}>
                  {data.introText}
                </p>
              )}
              
              <div style={{ padding: '3rem', backgroundColor: 'var(--color-white)', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-sage)' }}>{data.propertyName}</h3>
                  {data.link && data.link !== "[ADD LINK]" && (
                    <a href={data.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: 'var(--color-sage)', textDecoration: 'underline' }}>View Airbnb</a>
                  )}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                  {data.bedrooms && (
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Bedrooms</p>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>{data.bedrooms}</p>
                    </div>
                  )}
                  {data.bathrooms && (
                    <div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>Bathrooms</p>
                      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>{data.bathrooms}</p>
                    </div>
                  )}
                </div>

                {data.amenities && data.amenities.length > 0 && (
                  <div style={{ borderTop: '1px solid var(--color-champagne)', paddingTop: '2rem' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase', marginBottom: '1rem' }}>Amenities</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                      {data.amenities.map((amenity: string, idx: number) => (
                        <span key={idx} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-ivory)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {data.placeholderImages.map((img: string, idx: number) => (
                  <React.Fragment key={idx}>
                    {img.startsWith('./') ? (
                       <img src={img} alt={`${data.location} view ${idx + 1}`} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: 'var(--border-radius)', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} />
                    ) : (
                      <div className="image-placeholder" style={{ minHeight: '300px' }}>
                        {img}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {index !== dataList.length - 1 && (
                 <div style={{ borderBottom: '1px solid var(--color-champagne)', width: '100%', margin: '4rem 0' }}></div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
