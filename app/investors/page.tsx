"use client";

import { motion } from "framer-motion";
import { Briefcase, Leaf, TrendingUp, Handshake, CheckCircle2 } from "lucide-react";

export default function Investors() {
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
      <section className="bg-emerald-900 py-24 text-white relative border-b border-emerald-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-linear-to-t from-emerald-900 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4 font-montserrat flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" /> Investment Opportunity
          </h1>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white max-w-3xl mx-auto leading-tight">
            Scale Sustainable Innovation With Us
          </h2>
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
              className="flex flex-col justify-center"
            >
              <motion.h3 variants={fadeIn} className="text-3xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">Invest in Scalable Environmental Solutions</motion.h3>
              <motion.p variants={fadeIn} className="text-lg text-gray-600 font-open-sans mb-8 leading-relaxed">
                Greener Bricks Solution offers investors a unique opportunity to support a highly scalable, tech-driven approach to addressing the plastic waste criss. Our zero-emission process provides dual value: environmental clean-up and high-margin, sustainable building materials.
              </motion.p>

              <motion.div variants={fadeIn} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm mb-8 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-5">
                  <Handshake className="w-48 h-48 text-green-900" />
                </div>
                <h4 className="text-lg font-montserrat font-bold text-green-700 mb-6 relative z-10">We are actively seeking partnerships with:</h4>
                <ul className="space-y-5 relative z-10">
                  <li className="flex items-center gap-4 text-gray-700 font-open-sans bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Briefcase className="w-5 h-5" /></span>
                    <span className="font-semibold">Venture Capital Firms</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700 font-open-sans bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Leaf className="w-5 h-5" /></span>
                    <span className="font-semibold">Environmental Funds</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700 font-open-sans bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><TrendingUp className="w-5 h-5" /></span>
                    <span className="font-semibold">Impact Investors</span>
                  </li>
                  <li className="flex items-center gap-4 text-gray-700 font-open-sans bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><Handshake className="w-5 h-5" /></span>
                    <span className="font-semibold">Development Agencies</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[80px] mix-blend-screen opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-2 relative z-10 flex items-center gap-2">
                 Investor Enquiry Form
              </h3>
              <p className="text-gray-500 font-open-sans mb-8 relative z-10">Fill out the form below to receive our pitch deck and financial projections.</p>
              
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">First Name</label>
                    <input type="text" id="firstName" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Last Name</label>
                    <input type="text" id="lastName" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="Doe" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Organization / Fund Name</label>
                  <input type="text" id="organization" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="ACME Ventures" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Work Email</label>
                  <input type="email" id="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="john@acme.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Message / Investment Interest</label>
                  <textarea id="message" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="Tell us about your investment focus..."></textarea>
                </div>

                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 text-lg font-montserrat uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
