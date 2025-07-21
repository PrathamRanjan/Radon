import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, LazyMotion, domAnimation } from "motion/react";
import { MacbookScroll } from "./components/MacbookScroll";
import { MacbookScrollDemo } from "./components/MacbookScrollDemo";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "./components/TextRevealCard";
import { BackgroundBoxesDemo } from "./components/BackgroundBoxesDemo";
import { DockDemo } from "./components/DockDemo";
import { OrbitingLogosDemo } from "./components/OrbitingLogosDemo";
import { AnimatedBeamDemo } from "./components/AnimatedBeamDemo";
import { TechStackOrbit } from "./components/TechStackOrbit";
import "./styles/orbit.css";
import deloitte from './assets/deloitte.png';
import oai from './assets/oai.png';
import ntu from './assets/ntu.png';
import omni from './assets/omni.png';
import paypal from './assets/Paypal_2014_logo.png';
import dell from './assets/Dell_Logo.png';
import sap from './assets/SAP_SE-Logo.wine.png';
import accenture from './assets/Accenture.svg.webp';


// Auto-sliding Logo Carousel - EXACTLY like Aerospike with proper alignment
const GoogleGeminiEffectWrapper = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLengths = [
    useTransform(scrollYProgress, [0, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.1, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.3, 0.8], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.8], [0, 1]),
  ];

  return (
    <div ref={ref} className="relative min-h-[200vh] bg-gradient-to-br from-blue-50 to-purple-50">
      <GoogleGeminiEffect
        pathLengths={pathLengths}
        title="Build with Radon"
        description="Scroll this component and see the neural networks come to life. Experience the power of intelligent automation that adapts and learns in real-time."
        className=""
      />
    </div>
  );
};

const LogoCarousel = () => {
  // Logo data with imported images - only original client logos
  const logos = [
    { name: "DELOITTE", logo: deloitte, logoHeight: '50px', logoWidth: '140px' },
    { name: "OMNI OFFSHORE", logo: omni, logoHeight: '40px', logoWidth: '120px' },
    { name: "OAI", logo: oai, logoHeight: '45px', logoWidth: '100px' },
    { name: "NTU", logo: ntu, logoHeight: '55px', logoWidth: '130px' }
  ];
  
  return (
    <div className="relative z-30 -mt-20 -mb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden min-h-[180px] flex items-center">
          {/* Text positioned and centered vertically */}
          <div className="relative z-10 flex-shrink-0 w-1/3">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Why leading companies
              </h3>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                choose Radon
              </h3>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                See all customer stories 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Clean Carousel */}
          <div className="flex-1 ml-8">
            <div className="h-[120px] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
              <InfiniteMovingCards 
                items={logos} 
                direction="left" 
                speed="normal"
                pauseOnHover={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-gradient-to-b from-slate-900 from-50% to-slate-900 to-50% text-gray-900 overflow-x-hidden">

      {/* Hero Section - Clean and modern */}
      <section id="hero" ref={heroRef} className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <BackgroundBoxesDemo />
        <motion.div 
          style={{ y: backgroundY }}
          className="relative z-50 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            AI solutions that scale,
            <span className="block text-blue-400">accelerate, and deliver</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed"
          >
            Enterprise AI consultancy that transforms businesses through intelligent automation, 
            custom LLM solutions, and strategic AI implementation. We build systems that work.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg">
              Start Your AI Transformation
            </button>
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:shadow-lg">
              Free Consultation
            </button>
          </motion.div>
        </motion.div>
      </section>

      <LogoCarousel />

      {/* AI Impact Text Reveal Section */}
      <section className="min-h-screen py-24 bg-slate-900 relative z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 mt-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our AI Can Do For You
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Move your cursor across the cards to discover how we'll transform your business
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 justify-items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TextRevealCard
                text="Time Saved"
                revealText="80% Faster"
                className="w-full max-w-lg"
              >
                <TextRevealCardTitle>Work Smarter, Not Harder</TextRevealCardTitle>
                <TextRevealCardDescription>
                  Cut your manual work by 80%. Our AI handles the boring stuff so you can focus on what matters - growing your business and making strategic decisions.
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TextRevealCard
                text="Cost Reduction"
                revealText="60% Savings"
                className="w-full max-w-lg"
              >
                <TextRevealCardTitle>More Profit, Less Overhead</TextRevealCardTitle>
                <TextRevealCardDescription>
                  Stop paying for repetitive tasks. Our AI solutions typically save clients 60% on operational costs while boosting productivity and accuracy.
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TextRevealCard
                text="Revenue Growth"
                revealText="+150%"
                className="w-full max-w-lg"
              >
                <TextRevealCardTitle>Scale Without Limits</TextRevealCardTitle>
                <TextRevealCardDescription>
                  Our clients see an average 150% revenue increase within 12 months. AI-powered insights help you make better decisions and capture opportunities faster.
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TextRevealCard
                text="Time to Results"
                revealText="30 Days"
                className="w-full max-w-lg"
              >
                <TextRevealCardTitle>Fast Results, Real Impact</TextRevealCardTitle>
                <TextRevealCardDescription>
                  See measurable improvements in just 30 days. We don't believe in endless consulting - we deliver working AI solutions that start paying for themselves immediately.
                </TextRevealCardDescription>
              </TextRevealCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Orbit Section */}
      <section className="py-24 bg-slate-900 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <TechStackOrbit className="w-full" />
        </div>
      </section>

      {/* Animated Beam Section */}
      <section className="relative bg-slate-900 z-40">
        <AnimatedBeamDemo />
      </section>

      {/* MacBook Scroll Section */}
      <section className="relative bg-slate-900 z-40">
        <MacbookScrollDemo />
      </section>

      {/* Orbiting Logos Section - Moved to bottom */}
      <section className="relative bg-slate-900 z-40">
        <OrbitingLogosDemo />
      </section>


      {/* Elite Team Experience Section */}
      <section className="py-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built by industry veterans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings decades of experience from the world's most innovative tech companies
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <img
                src={paypal}
                alt="PayPal"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <img
                src={sap}
                alt="SAP"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <img
                src={dell}
                alt="Dell"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <img
                src={deloitte}
                alt="Deloitte"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <img
                src={accenture}
                alt="Accenture"
                className="h-12 object-contain opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer - Clean and minimal */}
      <footer className="bg-gray-900 text-center py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400">
            © 2025 Radon. Building the future, one project at a time.
          </p>
        </div>
      </footer>

      {/* Dock Navigation */}
      <DockDemo />
    </div>
    </LazyMotion>
  );
}

export default App;
