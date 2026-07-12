import React from 'react';
import Section1_Cover from './components/Section1_Cover';
import Section2_BirthdayLetter from './components/Section2_BirthdayLetter';
import Section3_OurStory from './components/Section3_OurStory';
import Section4_CostaRicaReveal from './components/Section4_CostaRicaReveal';
import Section5_TwoWeeksTogether from './components/Section5_TwoWeeksTogether';
import Section6_Flights from './components/Section6_Flights';
import Section7_RentalCar from './components/Section7_RentalCar';
import Section8_OurHome from './components/Section8_OurHome';
import Section9_Destinations from './components/Section9_Destinations';

import Section11_Restaurants from './components/Section11_Restaurants';
import Section11B_Shopping from './components/Section11B_Shopping';
import Section12_Itinerary from './components/Section12_Itinerary';
import Section12_Budget from './components/Section12_Budget';

import Section14_Countdown from './components/Section14_Countdown';
import Section15_FinalLetter from './components/Section15_FinalLetter';

function App() {
  return (
    <div className="app-container">
      <Section1_Cover />
      <Section2_BirthdayLetter />
      <Section3_OurStory />
      <Section4_CostaRicaReveal />
      <Section5_TwoWeeksTogether />
      <Section6_Flights />
      <Section7_RentalCar />
      <Section8_OurHome />
      <Section9_Destinations />

      <Section11_Restaurants />
      <Section11B_Shopping />
      <Section12_Itinerary />
      <Section12_Budget />

      <Section14_Countdown />
      <Section15_FinalLetter />
    </div>
  );
}

export default App;
