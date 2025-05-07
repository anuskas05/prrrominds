 // App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroImageSlider from './components/HeroImageSlider';
import PropertyInfo from './components/PropertyInfo';
import PropertyCard from './components/PropertyCard';
function App() {
  return (
    <div>
      <Navbar />
      <HeroImageSlider />
      <PropertyInfo/>
      <PropertyCard/>
    </div>
  );
}

export default App;
