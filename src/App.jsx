import React from 'react';
import { Route, Routes } from 'react-router-dom';
 import Services from './pages/Services';
import Program from './pages/Program';
import Team from './pages/Team';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/program" element={<Program />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
