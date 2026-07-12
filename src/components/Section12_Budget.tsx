import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';

export default function Section12_Budget() {
  const { flights, rentalCar, activities, restaurants, budgetConfig } = content;
  const accommodations = (content as any).accommodations || [];

  // Calculations
  const flightsTotal = flights.reduce((sum, flight) => sum + flight.price, 0);
  const accommodationTotal = accommodations.reduce((sum: number, acc: any) => {
    return sum + (acc.total || ((acc.pricePerNight * Number(acc.bedrooms || 1)) + acc.cleaningFee));
  }, 0);
  const carTotal = rentalCar.total || (rentalCar.dailyRate * 14); // estimate 14 days if total is 0
  
  const dests = (content as any).destinations;
  const allDestinations = [...(dests.sanJose || []), ...(dests.guanacaste || []), ...(dests.limon || [])];
  const destinationsTotal = allDestinations.reduce((sum, dest) => sum + (dest.entryFee || 0), 0);
  
  const activitiesTotal = activities.reduce((sum, act) => sum + act.price, 0) + destinationsTotal;
  const fuelTotal = 250; // set fuel manually based on request
  
  const transportationTotal = flightsTotal + carTotal + fuelTotal;
  const livingTotal = accommodationTotal; // food is just dashes now
  const extrasTotal = activitiesTotal; // other extras removed
  
  const grandTotal = transportationTotal + livingTotal + extrasTotal;
  const perPersonTotal = grandTotal / 2;

  const formatValue = (val: number | string) => 
    typeof val === 'string' ? val : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

  const renderRow = (label: string, value: number | string, isSubtotal = false, isTotal = false) => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem 0', 
      borderBottom: isTotal ? 'none' : '1px solid var(--color-champagne)',
      fontWeight: isSubtotal || isTotal ? 'bold' : 'normal',
      color: isTotal ? 'var(--color-gold)' : 'inherit',
      fontSize: isTotal ? '1.5rem' : '1rem'
    }}>
      <span>{label}</span>
      <span>{formatValue(value)}</span>
    </div>
  );

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-script text-center" style={{ marginBottom: '1rem' }}>Trip Budget</h2>
          <p className="text-center" style={{ fontStyle: 'italic', marginBottom: '4rem' }}>A transparent look at our adventure</p>

          <div style={{ backgroundColor: 'var(--color-ivory)', padding: '3rem', borderRadius: 'var(--border-radius)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', color: 'var(--color-sage)' }}>Transportation</h3>
            {renderRow("Flights", flightsTotal)}
            {renderRow("Rental Car", carTotal)}
            {renderRow("Fuel (Estimated)", fuelTotal)}
            {renderRow("Transportation Subtotal", transportationTotal, true)}

            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '3rem 0 1.5rem 0', color: 'var(--color-sage)' }}>Accommodation & Living</h3>
            {renderRow("Airbnb / Hotels", accommodationTotal)}
            {renderRow("Restaurants (Estimated)", "-")}
            {renderRow("Groceries", "-")}
            {renderRow("Living Subtotal", livingTotal, true)}

            <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '3rem 0 1.5rem 0', color: 'var(--color-sage)' }}>Experiences & Extras</h3>
            {renderRow("Activities & Tours", activitiesTotal)}
            {renderRow("Shopping / Souvenirs", "-")}
            {renderRow("Extras Subtotal", extrasTotal, true)}

            <div style={{ borderTop: '2px solid var(--color-gold)', marginTop: '3rem', paddingTop: '1rem' }}>
              {renderRow("Grand Total", grandTotal, false, true)}
              <div style={{ textAlign: 'right', color: 'var(--color-text-light)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.5rem' }}>
                Estimated {formatValue(perPersonTotal)} per person
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
