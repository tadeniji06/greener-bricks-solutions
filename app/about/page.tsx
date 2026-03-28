"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-50 py-24 border-b border-green-100 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-sm text-green-600 font-semibold tracking-widest uppercase mb-4 font-montserrat">Company Overview</h1>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 max-w-3xl mx-auto mb-6">
            Pioneering Zero-Emission Construction Technologies
          </h2>
          <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto leading-relaxed mt-6">
            Greener Bricks Solution is a sustainability-focused climatech company at the forefront of developing innovative technologies that convert plastic and other non-biodegradable waste into eco-friendly construction materials.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 item-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="w-16 h-1 bg-gray-200 mb-8 rounded-full hidden md:block"></motion.div>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 font-open-sans mb-6 leading-relaxed">
                Founded in <span className="font-semibold text-gray-900">2021</span>, our company aims to address the escalating crisis of plastic pollution and significantly cut down on carbon emissions. We achieve this by providing sustainable and affordable alternatives to conventional infrastructural development across Africa.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 font-open-sans mb-8 leading-relaxed">
                Our approach relies on a unique <span className="font-semibold text-gray-900 inline-flex items-center gap-2"><Rocket className="w-5 h-5 text-green-500" /> closed-loop, zero-emission system</span>, meaning that not only are we removing harmful plastics from the environment, but we are also ensuring our own manufacturing processes leave no carbon footprint.
              </motion.p>
              
              <motion.div variants={fadeIn} className="border border-green-200 bg-green-50 p-8 rounded-2xl relative overflow-hidden group">
                <Target className="absolute top-4 right-4 w-24 h-24 text-green-100 opacity-50 transform rotate-12 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4 relative z-10 flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-600" /> Our Mission
                </h3>
                <p className="text-gray-700 font-open-sans italic relative z-10">
                  "To transform plastic and other non-biodegradable waste into valuable building materials that support environmental sustainability and the circular economy, via a zero-emission process."
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-10"
            >
              <motion.div variants={fadeIn} className="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                <div className="absolute inset-0 bg-linear-to-tr from-green-800 to-green-600 opacity-90 transition-transform duration-700 hover:scale-105"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white">
                  <span className="font-montserrat font-bold text-2xl drop-shadow-lg leading-tight">Empowering Sustainable<br/>Infrastructure</span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-gray-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group">
                <Lightbulb className="absolute bottom-4 right-4 w-32 h-32 text-gray-800 opacity-50 group-hover:text-yellow-500/10 transition-colors duration-500" />
                <h3 className="text-2xl font-montserrat font-bold mb-4 relative z-10 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-400" /> Our Vision
                </h3>
                <p className="text-gray-300 font-open-sans leading-relaxed relative z-10">
                  "To become Africa's leading provider of innovative recycling machines and sustainable construction solutions for infrastructural development across the continent."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
