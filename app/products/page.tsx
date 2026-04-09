"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Settings, Shield, Droplets, Leaf, Recycle, Map, Trash, Zap, Combine } from "lucide-react";
import { i1, i2 } from "@/assets";

export default function Products() {
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
      {/* Header */}
      <section className="relative pt-40 pb-20 border-b border-gray-100 overflow-hidden bg-[#f8fcf9]">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.h1 variants={fadeIn} className="text-xs text-green-700 font-bold tracking-[0.3em] uppercase mb-4 flex justify-center items-center gap-2 font-montserrat">
            <Settings className="w-4 h-4" /> The Technology
          </motion.h1>
          <motion.h2 variants={fadeIn} className="text-4xl md:text-6xl font-poppins font-bold max-w-4xl mx-auto leading-tight text-black mb-6 tracking-tighter">
            Zero-Emission <br/> Plastic Transformation.
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-gray-600 font-lato max-w-2xl mx-auto font-normal">
             We do not just recycle; we engineer. Our proprietary systems dismantle the chemical waste footprint and forge it into structural integrity.
          </motion.p>
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black border border-gray-800 p-10 relative overflow-hidden group rounded-xl shadow-2xl"
            >
              
              <div className="relative h-[250px] mb-10 overflow-hidden rounded-md">
                <Image src={i1} alt="Machine Process" fill className="object-cover opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
              </div>

              <h3 className="text-3xl font-poppins font-bold text-white mb-6 flex items-center gap-3">
                <Combine className="text-green-500 w-8 h-8" /> KEMILAN & WREEKER
              </h3>
              <p className="text-gray-300 font-lato mb-10 leading-relaxed text-base">
                Greener Bricks Solution has developed specialized, heavy-duty machinery required to scale sustainable transformation. Traditional plastic burning emits toxic gases; our reactors utilize thermal and chemical precision to nullify emissions entirely.
              </p>
              
              <h4 className="font-bold text-white tracking-[0.1em] uppercase text-xs mb-6 font-montserrat">The Process</h4>
              <ul className="space-y-6 font-lato">
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 text-green-500 mt-1"><Trash className="w-5 h-5" /></div>
                  <div className="text-gray-400 text-sm"><strong className="text-white">Collection</strong> of raw environmental plastic waste</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 text-green-500 mt-1"><Map className="w-5 h-5" /></div>
                  <div className="text-gray-400 text-sm"><strong className="text-white">Sorting</strong> and structural preparation</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 text-green-500 mt-1"><Zap className="w-5 h-5" /></div>
                  <div className="text-gray-400 text-sm"><strong className="text-white">Elimination</strong> of carbon gas via KEMILAN reactors</div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 text-green-500 mt-1"><Recycle className="w-5 h-5" /></div>
                  <div className="text-gray-400 text-sm"><strong className="text-white">Synthesis</strong> into durable architectural materials</div>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col"
            >
              <motion.h3 variants={fadeIn} className="text-4xl font-poppins font-bold text-black mb-6 tracking-tight">Sustainable Architectural Output</motion.h3>
              <motion.p variants={fadeIn} className="text-gray-700 font-lato mb-10 leading-relaxed text-base">
                We output eco-friendly pavement and building bricks molded entirely from digested plastic waste. Our product functions as a superior alternative to standard concrete, requiring no compromise on industrial quality.
              </motion.p>

               <div className="relative h-[250px] mb-10 w-full overflow-hidden border border-gray-100 rounded-xl shadow-md">
                <Image src={i2} alt="Sustainable Bricks" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <motion.div variants={fadeIn} className="bg-gray-50 border-l-4 border-black p-6 hover:shadow-lg transition-all rounded-r-lg">
                  <Shield className="w-8 h-8 text-black mb-4" />
                  <h4 className="font-poppins font-bold text-black mb-2 text-base">Heavy Durability</h4>
                  <p className="text-sm text-gray-600 font-lato">Exceeds standard load-bearing metrics.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-gray-50 border-l-4 border-black p-6 hover:shadow-lg transition-all rounded-r-lg">
                  <Droplets className="w-8 h-8 text-black mb-4" />
                  <h4 className="font-poppins font-bold text-black mb-2 text-base">Hydro-Resistant</h4>
                  <p className="text-sm text-gray-600 font-lato">Absolute repellant to moisture degradation.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-green-50 border-l-4 border-green-600 p-6 hover:shadow-lg transition-all rounded-r-lg">
                  <Leaf className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-poppins font-bold text-black mb-2 text-base">Carbon Negative</h4>
                  <p className="text-sm text-gray-700 font-lato">Zero footprint during synthesis.</p>
                </motion.div>
                <motion.div variants={fadeIn} className="bg-green-50 border-l-4 border-green-600 p-6 hover:shadow-lg transition-all rounded-r-lg">
                  <Recycle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="font-poppins font-bold text-black mb-2 text-base">Endless Loop</h4>
                  <p className="text-sm text-gray-700 font-lato">Reclaiming the earth layer by layer.</p>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
