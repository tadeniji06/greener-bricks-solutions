"use client";

import { motion } from "framer-motion";
import { Briefcase, Leaf, Network } from "lucide-react";

export default function Investors() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-lato">
      <section className="relative pt-40 pb-24 border-b border-gray-100 overflow-hidden bg-[#f8fcf9]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500 opacity-5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h1 variants={fadeIn} className="text-xs text-green-700 font-bold tracking-[0.3em] uppercase mb-4 font-montserrat">Capital Allocation</motion.h1>
          <motion.h2 variants={fadeIn} className="text-5xl md:text-7xl font-poppins font-bold text-black max-w-4xl mx-auto tracking-tighter leading-tight mb-8">
            Scale the Solution.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 font-lato max-w-2xl mx-auto font-normal">
             Back the industrial engine converting zero-value waste into high-margin, carbon-negative building blocks.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={stagger} className="flex flex-col justify-center">
              <motion.h3 variants={fadeIn} className="text-3xl font-poppins font-bold text-black mb-6 leading-tight">Strategic Milestones <br/> require Strategic Capital.</motion.h3>
              <motion.p variants={fadeIn} className="text-gray-700 font-lato mb-12 font-normal leading-relaxed text-lg">
                We are actively seeking syndicates, VC firms, and institutional environmental funds to hyper-scale our KEMILAN installations across emergent nations, unlocking millions of tons of trapped plastics.
              </motion.p>

              <div className="space-y-6">
                 <motion.div variants={fadeIn} className="bg-white border hover:border-gray-300 shadow-sm hover:shadow-lg transition-all rounded-xl p-8 flex items-center gap-6">
                    <div className="w-14 h-14 shrink-0 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Briefcase className="w-6 h-6" /></div>
                    <div><p className="text-black font-poppins font-bold mb-1 text-base">Venture Capital</p><p className="text-gray-600 text-sm font-lato leading-relaxed">Pre-Series A and Series A lead rounds.</p></div>
                 </motion.div>
                 <motion.div variants={fadeIn} className="bg-white border hover:border-gray-300 shadow-sm hover:shadow-lg transition-all rounded-xl p-8 flex items-center gap-6">
                    <div className="w-14 h-14 shrink-0 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Leaf className="w-6 h-6" /></div>
                    <div><p className="text-black font-poppins font-bold mb-1 text-base">Climate Funds</p><p className="text-gray-600 text-sm font-lato leading-relaxed">ESG and carbon-negative mandated capital.</p></div>
                 </motion.div>
                 <motion.div variants={fadeIn} className="bg-white border hover:border-gray-300 shadow-sm hover:shadow-lg transition-all rounded-xl p-8 flex items-center gap-6">
                    <div className="w-14 h-14 shrink-0 bg-green-50 rounded-full flex items-center justify-center text-green-600"><Network className="w-6 h-6" /></div>
                    <div><p className="text-black font-poppins font-bold mb-1 text-base">Corporate Pipelines</p><p className="text-gray-600 text-sm font-lato leading-relaxed">Infrastructure developers and public works integration.</p></div>
                 </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
              className="bg-black border border-gray-800 p-10 lg:p-14 relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-poppins font-bold text-white mb-2">Request Investor Deck</h3>
              <p className="text-gray-400 font-lato mb-12 text-sm">Submit your credentials for due diligence data room access.</p>
              
              <form className="space-y-8 relative z-10">
                 <div className="relative">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Full Legal Name</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" required />
                 </div>
                 <div className="relative">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Fund / Syndicate Entity</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" required />
                 </div>
                 <div className="relative">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Professional Email</label>
                    <input type="email" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" required />
                 </div>
                 <div className="relative">
                    <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">AUM / Target Allocation (Optional)</label>
                    <input type="text" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" />
                 </div>

                 <button type="submit" className="w-full bg-green-600 text-white font-bold py-5 px-6 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 mt-8 rounded-sm shadow-md font-montserrat">
                  Request Access Protocol
                 </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
