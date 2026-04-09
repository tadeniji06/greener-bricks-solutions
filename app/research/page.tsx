"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { g3 } from "@/assets";

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-lato">
      {/* Header */}
      <section className="relative pt-40 pb-32 border-b border-gray-100 overflow-hidden bg-[#f8fcf9]">
        <div className="absolute inset-0 z-0">
          <Image src={g3} alt="Research Labs" fill className="object-cover opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-[10px] text-green-700 font-bold tracking-[0.3em] uppercase mb-4 font-montserrat"
          >
            Research & Development
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold max-w-4xl mx-auto text-black tracking-tighter leading-[1.1]"
          >
            Decoding the next era of industrial synthesis.
          </motion.h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once:true }}
            >
              <h3 className="text-3xl font-poppins font-bold text-black mb-6">Scientific Commitment</h3>
              <p className="text-lg text-gray-700 font-lato mb-8 leading-relaxed">
                Continuous optimization is the core theorem of our operations. The global waste crisis adapts, and our technology evolves faster.
              </p>
              
              <div className="bg-gray-50 p-10 border-l-4 border-black rounded-r-xl shadow-md">
                <p className="text-gray-800 font-lato leading-relaxed text-base">
                  We invest relentlessly in thermodynamic and chemical engineering. Our goal is not just processing volume, but expanding the capabilities of our KEMILAN reactors to digest exponentially diverse polymers while reducing our power coefficient. We are pushing towards infrastructure indistinguishable from raw nature in its footprint.
                </p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once:true }}
               className="bg-black p-12 rounded-xl shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-3xl font-poppins font-bold text-white mb-4">Research Collaborations</h3>
              <p className="text-gray-300 font-lato mb-10 leading-relaxed text-base">
                A massive paradigm shift cannot occur in isolation. We actively seek intellectual and operational partnerships to deploy and refine our zero-emission models.
              </p>

              <ul className="space-y-6 font-montserrat tracking-[0.1em] text-xs uppercase mb-12 text-white font-bold">
                <li className="flex items-center gap-4">
                  <div className="w-[2px] h-6 bg-green-500"></div> Academic Institutes
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-[2px] h-6 bg-green-500"></div> DeepTech Funds
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-[2px] h-6 bg-green-500"></div> Chemical Engineering Hubs
                </li>
              </ul>

              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-between px-8 py-5 text-sm font-bold bg-green-600 text-white hover:bg-white hover:text-black transition-all uppercase tracking-[0.2em] font-montserrat shadow-lg rounded-sm"
              >
                Initiate Protocol <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
