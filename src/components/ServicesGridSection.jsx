import React from "react";
import { motion } from "motion/react";

export const ServicesGridSection = () => {
  const services = [
    {
      title: "AI AGENTS & LLMs",
      description: "Custom AI agents with MCP protocol support, fine-tuned language models, and intelligent automation systems.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "AZURE & CLOUD",
      description: "Full Azure cloud deployments, infrastructure automation, scalable architectures, and cloud-native solutions.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
        </svg>
      )
    },
    {
      title: "RPA & AUTOMATION",
      description: "Robotic Process Automation, workflow optimization, and intelligent document processing systems.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Modern web applications, responsive frontends, progressive web apps, and user experience design.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "BACKEND SYSTEMS",
      description: "Scalable APIs, microservices architecture, database optimization, and enterprise integrations.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/>
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v7h2a2 2 0 002-2v1a2 2 0 01-2 2h-2v-7z"/>
        </svg>
      )
    },
    {
      title: "STRATEGY CONSULTING",
      description: "Digital transformation roadmaps, technology assessments, and implementation planning for enterprises.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="min-h-screen py-20 bg-white relative z-10 flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions for every business need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-gray-50 hover:bg-blue-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
              >
                <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-1 bg-gradient-to-r from-blue-500 to-blue-600 mt-6 rounded-full"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};