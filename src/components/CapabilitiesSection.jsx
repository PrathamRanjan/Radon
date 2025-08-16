import React from "react";
import { motion } from "motion/react";

export const CapabilitiesSection = () => {
  const capabilities = [
    {
      title: "AI & Intelligent Agents",
      description: "Advanced AI agents, custom LLMs, MCP (Model Context Protocol) implementations, and intelligent automation systems that understand context and make autonomous decisions.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & Automation",
      description: "Azure cloud deployments, RPA (Robotic Process Automation), infrastructure automation, and scalable cloud architectures that grow with your business.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      ),
      gradient: "from-purple-500 to-blue-500"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web development, backend systems, API integrations, and enterprise software solutions built with modern technologies and best practices.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      ),
      gradient: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative z-10 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Radon Can Do For You
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive capabilities across AI, cloud, and development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -20,
              }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 rounded-2xl p-8 transition-all duration-300">
                {/* Icon with gradient background */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-r ${capability.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <div className="text-white">
                    {capability.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors duration-300">
                  {capability.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-center">
                  {capability.description}
                </p>

                {/* Animated border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.gradient} rounded-b-2xl origin-left`}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 2) * 30}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};