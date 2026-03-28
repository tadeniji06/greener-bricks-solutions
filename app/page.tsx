"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Factory, Recycle, Building2, Globe2, ArrowRight, Leaf, ShieldCheck, Zap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2 }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-600 rounded-full blur-[150px] mix-blend-screen transform translate-x-1/3 -translate-y-1/3"
          />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-[120px] mix-blend-screen transform -translate-x-1/3 translate-y-1/3"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight mb-6">
              Turning <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600">Plastic Waste</span> Into Sustainable Building Solutions
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed font-open-sans">
              Greener Bricks Solution is transforming plastic pollution into eco-friendly construction materials via a closed-loop, clean system that emits <span className="font-semibold text-white">zero CO2</span> to the environment.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full text-black bg-green-500 hover:bg-green-400 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] uppercase tracking-wider font-montserrat"
              >
                Learn About KEMILAN
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-transparent border-2 border-green-500 hover:bg-green-500/10 transition-all duration-300 uppercase tracking-wider font-montserrat"
              >
                Invest in our Innovation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-sm text-green-600 font-semibold tracking-widest uppercase mb-3 font-montserrat flex items-center gap-2">
                <Globe2 className="w-4 h-4" /> The Challenge
              </motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
                The Plastic Waste <br /> Crisis
              </motion.h3>
              <motion.div variants={fadeIn} className="w-20 h-1 bg-green-600 mb-8 rounded-full"></motion.div>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-6 leading-relaxed font-open-sans">
                Millions of tons of plastic waste are generated each year, creating severe environmental challenges. Improper disposal contributes to pollution in landfills, waterways, and communities across Africa and globally.
              </motion.p>
              <motion.div variants={fadeIn} className="border-l-4 border-green-500 pl-6 py-4 bg-gray-50 rounded-r-xl">
                <p className="text-lg text-gray-800 leading-relaxed font-open-sans italic">
                  "We address these challenges by converting plastic waste into durable pavement bricks for construction purposes, using a sustainable recycling system with zero carbon emission."
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center border border-gray-200"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-gray-200 to-gray-300"></div>
              <div className="relative z-10 flex flex-col items-center gap-4 text-gray-400">
                <Recycle className="w-20 h-20 opacity-50" />
                <span className="font-montserrat uppercase tracking-widest text-sm font-semibold">Illustration Placement</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-sm text-green-600 font-semibold tracking-widest uppercase mb-3 font-montserrat">Our Solution</motion.h2>
            <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Innovative Recycling Technology
            </motion.h3>
            <motion.p variants={fadeIn} className="text-lg text-gray-600 font-open-sans">
              Leveraging our unique <span className="font-semibold text-gray-900">KEMILAN</span> and <span className="font-semibold text-gray-900">WREEKER</span> technologies, we transform plastic waste into strong, reliable building bricks suitable for construction and infrastructure development.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Recycle className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 relative z-10">
                <Recycle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-montserrat text-gray-900 mb-4 relative z-10">1. Collection</h4>
              <p className="text-gray-600 font-open-sans relative z-10">
                We collect plastic and non-biodegradable waste from communities, preventing it from reaching landfills and waterways.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Factory className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 relative z-10">
                <Factory className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-montserrat text-gray-900 mb-4 relative z-10">2. Processing</h4>
              <p className="text-gray-600 font-open-sans relative z-10">
                Waste is sorted and processed through our proprietary KEMILAN and WREEKER machines without releasing CO2.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeIn} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-32 h-32" />
              </div>
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 relative z-10">
                <Building2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold font-montserrat text-gray-900 mb-4 relative z-10">3. Building Output</h4>
              <p className="text-gray-600 font-open-sans relative z-10">
                The final output is eco-friendly, strong plastic bricks, providing sustainable building materials for construction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16 md:flex justify-between items-end"
          >
            <div className="max-w-2xl">
              <motion.h2 variants={fadeIn} className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-3 font-montserrat flex items-center gap-2">
                <Leaf className="w-4 h-4" /> Our Impact
              </motion.h2>
              <motion.h3 variants={fadeIn} className="text-4xl md:text-5xl font-montserrat font-bold text-white">
                Driving Environmental & Economic Change
              </motion.h3>
            </div>
            <motion.div variants={fadeIn}>
              <Link
                href="/research"
                className="hidden md:inline-flex mt-6 md:mt-0 items-center justify-center px-6 py-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-montserrat text-sm uppercase tracking-wide group"
              >
                View Research <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          >
            <motion.div variants={fadeIn} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Leaf className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-montserrat font-bold text-green-400 mb-2">Zero</div>
              <div className="text-sm md:text-base text-gray-400 font-open-sans font-medium uppercase tracking-widest">CO2 Emissions</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Recycle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-montserrat font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-400 font-open-sans font-medium uppercase tracking-widest">Circular Output</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <Globe2 className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-montserrat font-bold text-green-400 mb-2">9+</div>
              <div className="text-sm md:text-base text-gray-400 font-open-sans font-medium uppercase tracking-widest">Global SDGs</div>
            </motion.div>
            <motion.div variants={fadeIn} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-5xl md:text-6xl font-montserrat font-bold text-green-400 mb-2">∞</div>
              <div className="text-sm md:text-base text-gray-400 font-open-sans font-medium uppercase tracking-widest">Sustainable Future</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="py-32 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-800"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <Zap className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-montserrat font-bold mb-8 leading-tight drop-shadow-lg">
            Join the Future of Sustainable Construction
          </h2>
          <p className="text-xl text-green-50 font-open-sans mb-12 max-w-3xl mx-auto leading-relaxed">
            Greener Bricks Solution invites investors, institutions, and partners to support the scaling of our innovative recycling technology and make a tangible impact on the climate crisis in Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/investors"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-green-700 bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl uppercase tracking-wider font-montserrat"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-transparent border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 uppercase tracking-wider font-montserrat"
            >
              Contact Team
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
