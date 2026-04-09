"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function News() {
  const logs = [
    {
      title: "KEMILAN Reactor Protocol Enhanced",
      tag: "Tech Log",
      date: "03.15.2026",
      desc: "Iteration 4 of the KEMILAN core has gone live, achieving extreme tolerance in mixed-plastic digestion. Total emission remains at absolute zero.",
    },
    {
      title: "Kaduna State Integration Initiated",
      tag: "Deployment",
      date: "02.28.2026",
      desc: "Grid deployment has officially begun. Structural pavement materials processed entirely from state landfill caches are paving the new industrial vectors.",
    },
    {
      title: "Material Tensile Analytics Published",
      tag: "Data Yield",
      date: "01.10.2026",
      desc: "Peer-reviewed analysis confirms synthesized blocks exhibit 214% greater impact resistance relative to cement equivalent parameters.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-lato">
      <section className="pt-40 pb-24 border-b border-gray-100 relative bg-[#f8fcf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-xs text-green-700 font-bold tracking-[0.3em] uppercase mb-4 font-montserrat">Operations Log</motion.h1>
          <motion.h2 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.1}} className="text-4xl md:text-6xl font-poppins font-bold tracking-tighter mb-6">
            System Updates.
          </motion.h2>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} className="text-gray-600 text-lg max-w-xl mx-auto font-lato font-normal">Our latest advances in zero-emission technology and deployment operations.</motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logs.map((log, i) => (
              <motion.div 
                initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8, delay: i * 0.1}}
                key={i} 
                className="bg-white border rounded-xl border-gray-100 p-8 shadow-sm group hover:border-green-300 hover:shadow-xl transition-all flex flex-col min-h-[300px]"
              >
                 <div className="flex justify-between items-center mb-10">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-700 bg-green-50 py-1.5 px-3 rounded-md font-montserrat shadow-sm">{log.tag}</span>
                    <span className="text-xs text-gray-500 font-bold font-montserrat">{log.date}</span>
                 </div>
                 
                 <h3 className="text-2xl font-poppins font-bold leading-tight tracking-tight mb-4 text-black group-hover:text-green-600 transition-colors">{log.title}</h3>
                 <p className="text-base font-lato text-gray-600 font-normal leading-relaxed flex-grow">{log.desc}</p>
                 
                 <div className="mt-8 pt-6 border-t border-gray-100">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-black flex items-center gap-2 cursor-pointer group-hover:text-green-600 transition-colors font-montserrat">
                      Read Entry <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-2 transition-all" />
                    </span>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
