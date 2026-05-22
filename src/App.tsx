/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Comparison />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

