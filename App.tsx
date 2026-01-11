
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Facilities from './components/Facilities';
import ClientPortfolio from './components/ClientPortfolio';
import Awards from './components/Awards';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <div id="about">
           {/* Section placeholder for about content if needed, though integrated elsewhere */}
        </div>
        <Services />
        <Facilities />
        <ClientPortfolio />
        <Awards />
        <ContactForm />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
