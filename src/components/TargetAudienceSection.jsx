import React from "react";
import { motion } from "motion/react";

export const TargetAudienceSection = () => {
  return (
    <section className="min-h-screen py-20 bg-slate-900 relative z-10 overflow-hidden flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building for Every Audience
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Empowering different types of organizations with tailored solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center group"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              ENTERPRISES
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Whether you're an established company or an up-and-coming disruptor, we'll help you <span className="font-bold text-white">dominate your markets</span> with <span className="font-bold text-blue-400">AI-powered competitive advantages</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              From <span className="font-bold text-blue-400">Chatbots & AI Avatars</span> to <span className="font-bold text-blue-400">SEO optimization</span> and internal solutions that streamline your operations. Our team's core competency comes from working with some of the <span className="font-bold text-white">largest companies in the world</span>, and we bring that expertise to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center group"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              INNOVATORS
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Entrepreneurs and individuals who need support bringing their <span className="font-bold text-white">vision to life</span>, from <span className="font-bold text-blue-400">concept to execution</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              You can rely on us to provide you with the tools and expertise needed to <span className="font-bold text-white">innovate and disrupt markets</span>. We have a <span className="font-bold text-blue-400">dedicated team</span> focused on helping startups and innovators like you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="text-center group"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300"
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">
              STUDENTS
            </h3>
            <p className="text-slate-400 leading-relaxed">
              From <span className="font-bold text-blue-400">IB Internal Assessments</span> to <span className="font-bold text-blue-400">university projects</span>, we provide the support you need to <span className="font-bold text-white">excel in your academic journey</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mt-4">
              With a <span className="font-bold text-blue-400">dedicated student team</span> who are well versed in the <span className="font-bold text-white">latest technologies</span>, we can help you with your projects, research, and more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};