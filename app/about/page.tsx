"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";
import Image from "next/image";
import { g2 } from "@/assets";

export default function About() {
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
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 border-b border-gray-100 overflow-hidden bg-[#f8fcf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] text-green-700 font-bold tracking-[0.3em] uppercase mb-4 font-montserrat"
          >
            Company Origins
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-poppins font-bold text-black max-w-4xl tracking-tighter mb-8 leading-[1.1]"
          >
            Engineering an exit strategy for the plastic era.
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-lg text-gray-600 font-lato max-w-2xl leading-relaxed"
          >
            Founded in 2021, Greener Bricks Solution is a climate-tech enterprise pioneering the rapid transition to a zero-emission built environment.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeIn} className="w-16 h-[3px] bg-green-600 mb-10 hidden md:block rounded-full"></motion.div>
              <motion.p variants={fadeIn} className="text-lg text-gray-700 font-lato mb-6 leading-relaxed">
                The modern world runs on materials that actively devastate the environment. We recognized that traditional recycling is woefully insufficient; what is required is radical transformation.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-gray-700 font-lato mb-12 leading-relaxed">
                Our operations deploy a proprietary <span className="text-green-700 font-bold inline-flex items-center gap-2"><Rocket className="w-5 h-5" /> closed-loop, zero-emission architecture</span>. This guarantees that our extraction of plastic waste from the ecosystems does not covertly generate an equivalent carbon footprint in the manufacturing process.
              </motion.p>
              
              <motion.div variants={fadeIn} className="border-l-4 border-black bg-gray-50 p-10 relative overflow-hidden group hover:shadow-xl transition-shadow">
                <Target className="absolute top-4 right-4 w-32 h-32 text-gray-200 transform group-hover:rotate-12 group-hover:text-green-100 transition-all duration-700 pointer-events-none" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-montserrat font-bold text-black mb-4 relative z-10">
                  Mission Statement
                </h3>
                <p className="text-gray-900 font-poppins text-2xl font-light leading-tight relative z-10">
                  "To forge highly-scalable building materials from plastic waste without compromising the atmosphere, accelerating the circular economy across emerging global markets."
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col gap-10"
            >
              <motion.div variants={fadeIn} className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                <Image src={g2} alt="Company Impact" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-tr from-black/60 to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-poppins font-bold text-2xl tracking-[0.05em]">Greener Bricks HQ</span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-green-600 text-white p-10 rounded-xl shadow-lg relative overflow-hidden">
                <Lightbulb className="absolute bottom-[-10%] right-[-5%] w-48 h-48 text-white opacity-20 pointer-events-none" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-montserrat font-bold mb-4 relative z-10 text-green-100">
                  Vision Statement
                </h3>
                <p className="font-poppins text-2xl font-medium leading-tight relative z-10">
                  "To lead the planetary shift towards industrial synthesis powered entirely by waste, becoming the foundational material provider for carbon-negative infrastructure."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
