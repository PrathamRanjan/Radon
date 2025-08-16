import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const CountUpAnimation = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasStarted]);

  return <span ref={ref}>{count}</span>;
};

export const StatisticsSection = () => {
  return (
    <section className="py-16 bg-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              <CountUpAnimation end={500} />+
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI projects delivered
            </h3>
            <p className="text-gray-600">
              Successfully deployed AI solutions across industries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              <CountUpAnimation end={85} />%
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Cost reduction average
            </h3>
            <p className="text-gray-600">
              Average operational cost savings for our clients
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
              <CountUpAnimation end={30} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Days to deployment
            </h3>
            <p className="text-gray-600">
              Average time from project start to production
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};