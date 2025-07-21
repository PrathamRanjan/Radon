import React from "react";
import { OrbitingCircles } from "./magicui/orbiting-circles";
import paypal from "../assets/Paypal_2014_logo.png";
import sap from "../assets/SAP_SE-Logo.wine.png";
import dell from "../assets/Dell_Logo.png";
import deloitte from "../assets/deloitte.webp";
import accenture from "../assets/Accenture-Emblem.png";

export function OrbitingLogosDemo() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center py-20">
      <div className="text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Join the world's most innovative companies who trust Radon for their AI solutions
        </p>
        
        <div className="relative flex h-[500px] w-[500px] mx-auto flex-col items-center justify-center overflow-hidden">
          {/* Central Radon logo */}
          <div className="absolute z-10 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
              <span className="text-white text-2xl font-bold">R</span>
            </div>
          </div>
          
          {/* First orbit with larger radius - counterclockwise */}
          <OrbitingCircles iconSize={80} radius={180} speed={0.5} reverse={false}>
            <img src={paypal} alt="PayPal" className="w-12 h-12 object-contain" />
            <img src={deloitte} alt="Deloitte" className="w-14 h-14 object-contain" />
            <img src={accenture} alt="Accenture" className="w-24 h-24 object-contain" />
          </OrbitingCircles>
          
          {/* Second orbit with smaller radius - clockwise */}
          <OrbitingCircles iconSize={70} radius={120} reverse={true} speed={0.8}>
            <img src={sap} alt="SAP" className="w-18 h-18 object-contain" />
            <img src={dell} alt="Dell" className="w-18 h-18 object-contain" />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}