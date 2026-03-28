"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Shield, Droplets, Leaf, Recycle, Map, Trash, ArrowRight } from "lucide-react";

export default function Products() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat"></div>
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h1 variants={fadeIn} className="text-sm text-green-500 font-semibold tracking-widest uppercase mb-4 font-montserrat flex justify-center items-center gap-2">
            <Settings className="w-4 h-4" /> Technology & Innovation
          </motion.h1>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-montserrat font-bold max-w-3xl mx-auto leading-tight">
            Zero-Emission Plastic <br /> Recycling Solutions
          </motion.h2>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-[50px] mix-blend-multiply"></div>
              <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Settings className="text-green-600" /> KEMILAN & WREEKER
              </h3>
              <p className="text-gray-600 font-open-sans mb-8 leading-relaxed">
                Greener Bricks Solution has developed specialized recycling machines designed to process plastic waste and convert it into durable construction bricks efficiently.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-6 font-montserrat">The Process</h4>
              <ul className="space-y-6 font-open-sans">
                <li className="flex gap-4 items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold font-montserrat group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Trash className="w-5 h-5" />
                  </div>
                  <div className="text-gray-700 mt-2">Collection of plastic waste from environment</div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold font-montserrat group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Map className="w-5 h-5" />
                  </div>
                  <div className="text-gray-700 mt-2">Sorting and preparation</div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold font-montserrat group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div className="text-gray-700 mt-2">Zero-emission processing through KEMILAN</div>
                </li>
                <li className="flex gap-4 items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold font-montserrat group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Recycle className="w-5 h-5" />
                  </div>
                  <div className="text-gray-700 mt-2">Conversion into durable plastic bricks</div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col"
            >
              <motion.h3 variants={fadeIn} className="text-3xl font-montserrat font-bold text-gray-900 mb-6">Sustainable Plastic Bricks</motion.h3>
              <motion.p variants={fadeIn} className="text-gray-600 font-open-sans mb-10 leading-relaxed">
                We produce eco-friendly pavement and building bricks made entirely from recycled plastic waste, offering a sustainable alternative to conventional building materials without compromising on quality.
              </motion.p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <motion.div variants={fadeIn} className="bg-white border-l-4 border-green-500 p-6 shadow-sm rounded-r-xl hover:shadow-md transition-shadow">
                  <Shield className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="font-montserrat font-bold text-gray-900 mb-2">Highly Durable</h4>
                  <p className="text-sm text-gray-600">Built to withstand heavy loads and severe wear.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-white border-l-4 border-green-500 p-6 shadow-sm rounded-r-xl hover:shadow-md transition-shadow">
                  <Droplets className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="font-montserrat font-bold text-gray-900 mb-2">Water Resistant</h4>
                  <p className="text-sm text-gray-600">Perfect for all weather conditions and climates.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-white border-l-4 border-green-500 p-6 shadow-sm rounded-r-xl hover:shadow-md transition-shadow">
                  <Leaf className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="font-montserrat font-bold text-gray-900 mb-2">Eco-Friendly</h4>
                  <p className="text-sm text-gray-600">Zero emissions during our entire production process.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-white border-l-4 border-green-500 p-6 shadow-sm rounded-r-xl hover:shadow-md transition-shadow">
                  <Recycle className="w-8 h-8 text-green-500 mb-4" />
                  <h4 className="font-montserrat font-bold text-gray-900 mb-2">Waste Reduction</h4>
                  <p className="text-sm text-gray-600">Actively cleans up and revitalizes our communities.</p>
                </motion.div>
              </div>

              <motion.div variants={fadeIn} className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                <div className="relative z-10">
                  <p className="text-green-800 font-semibold font-montserrat mb-6 group-hover:text-green-50 transition-colors">Products are currently available on order.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white group-hover:bg-white group-hover:text-green-700 text-base font-semibold rounded-full transition-colors shadow-lg shadow-green-600/20 uppercase tracking-wider gap-2"
                  >
                    Place an Order <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
