"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, ArrowRight, Activity, Globe, Zap, Crosshair } from "lucide-react";
import { c1, g1, g2, g3 } from "@/assets";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-lato">
      {/* Hero Section Cinematic - Clean White/Green */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f8fcf9]">
        {/* Background Image Abstract */}
        <div className="absolute inset-0 z-0">
          <Image src={g1} alt="Environment Hero" fill className="object-cover opacity-100" priority />
          <div className="absolute inset-0 bg-linear-to-b from-white/40 to-white/90 backdrop-blur-[1px]"></div>
        </div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-green-200 bg-green-50 rounded-full shadow-sm">
             <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
             <span className="text-green-800 text-xs uppercase tracking-[0.2em] font-bold font-montserrat">Zero Emission Standard</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-poppins font-bold tracking-tighter leading-[0.9] mb-8 text-black">
            TRANSFORMING <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 via-green-500 to-emerald-700">PLASTIC WASTE.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-700 font-open-sans max-w-2xl font-normal leading-relaxed mb-12">
            We engineer high-durability construction materials directly from plastic waste using our proprietary zero-emission technology. Clean design, sustainable future.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white uppercase tracking-[0.2em] text-sm overflow-hidden bg-black transition-all shadow-xl hover:shadow-2xl rounded-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-green-600 group-hover:scale-100 scale-0 origin-right transition-transform duration-500 ease-[0.16,1,0.3,1]"></span>
              <span className="relative flex items-center gap-3 group-hover:gap-5 transition-all text-white">Explore Tech <ArrowRight className="w-5 h-5" /></span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem & Solution Statement - Bento grid style */}
      <section className="py-32 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Massive Statement */}
            <motion.div variants={fadeUp} className="lg:col-span-12 mb-16 lg:px-24 text-center">
               <h2 className="text-3xl md:text-5xl font-poppins font-light leading-tight text-gray-900">
                 We are accelerating the global transition to sustainable infrastructure by eliminating <strong className="font-bold text-green-700">plastic pollution</strong> at scale.
               </h2>
            </motion.div>

            {/* Visual Box 1 */}
            <motion.div variants={fadeUp} className="lg:col-span-7 relative h-[600px] border border-gray-100 bg-gray-50 overflow-hidden group rounded-xl shadow-sm hover:shadow-xl transition-shadow">
               <Image src={c1} alt="Sustainable environment" fill className="object-cover opacity-90 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-10">
                 <div className="flex items-center gap-2 mb-4 text-green-400">
                    <Globe className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-[0.2em] font-bold font-montserrat">The Crisis</span>
                 </div>
                 <h3 className="text-3xl font-poppins font-bold text-white mb-4">A World Drowning in Waste</h3>
                 <p className="text-gray-200 font-lato leading-relaxed max-w-md">Plastic pollution and excessive carbon emissions from traditional construction threaten our ecosystem. The need for a closed-loop alternative is absolute.</p>
               </div>
            </motion.div>

            {/* Data Box 2 */}
            <motion.div variants={fadeUp} className="lg:col-span-5 relative h-[600px] border border-gray-100 bg-green-900 flex flex-col p-10 justify-between group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-[100px] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
               
               <div>
                  <div className="flex items-center gap-2 mb-12 text-green-300">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-[0.2em] font-bold font-montserrat">The Innovation</span>
                 </div>
                 <h3 className="text-5xl font-poppins font-bold text-white leading-tight">Zero<br/>Emissions.</h3>
               </div>
               
               <div className="space-y-8 relative z-10">
                 <p className="text-green-50 font-lato leading-relaxed text-lg border-l-2 border-green-400 pl-6">
                   Our proprietary KEMILAN technology digests raw plastic waste without combustion, producing highly durable bricks while capping out environmental footprint to zero.
                 </p>
                 <Link href="/products" className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] font-bold text-white hover:text-green-300 transition-colors font-montserrat">
                    Discover Our Tech <MoveRight className="w-5 h-5" />
                 </Link>
               </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Mid-section */}
      <section className="py-40 relative border-y border-gray-100 bg-green-50 overflow-hidden flex items-center">
         <div className="absolute inset-0 z-0">
          <Image src={g3} alt="Production Context" fill className="object-cover opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
           <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row gap-16 justify-between items-end"
           >
              <div className="max-w-3xl">
                <span className="text-green-700 text-xs uppercase tracking-[0.2em] font-bold block mb-6 font-montserrat">Our Impact</span>
                <h2 className="text-4xl md:text-5xl font-poppins font-bold text-black leading-tight mb-8">
                  Building the infrastructure of tomorrow, from the remnants of yesterday.
                </h2>
              </div>
              <div className="shrink-0 mb-4">
                 <Link
                  href="/about"
                  className="bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-green-600 transition-colors block font-montserrat shadow-xl rounded-sm"
                 >
                   Who We Are
                 </Link>
              </div>
           </motion.div>
        </div>
      </section>

      {/* High-End Feature Display */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} transition={{ duration: 1 }}
                className="bg-white p-10 border border-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all h-full group"
             >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform"><Activity className="w-6 h-6"/></div>
                <h3 className="text-xl font-poppins font-bold text-black mb-4">Radical Durability</h3>
                <p className="text-gray-600 font-lato leading-relaxed text-base">Engineered to outperform traditional concrete, possessing higher tensile strength and absolute moisture resistance.</p>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} transition={{ duration: 1, delay: 0.2 }}
                className="bg-white p-10 border border-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all h-full group"
             >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform"><Globe className="w-6 h-6"/></div>
                <h3 className="text-xl font-poppins font-bold text-black mb-4">Infinite Circularity</h3>
                <p className="text-gray-600 font-lato leading-relaxed text-base">Every brick laid is plastic rescued from landfills. A fully closed-loop product lifecycle supporting modern sustainability goals.</p>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:true }} transition={{ duration: 1, delay: 0.4 }}
                className="bg-white p-10 border border-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all h-full group"
             >
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 transition-transform"><Crosshair className="w-6 h-6"/></div>
                <h3 className="text-xl font-poppins font-bold text-black mb-4">Zero Carbon</h3>
                <p className="text-gray-600 font-lato leading-relaxed text-base">Manufactured without direct combustion, severing the link between infrastructure development and carbon gas emission.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative bg-black">
        <div className="absolute inset-0 z-0">
          <Image src={g1} alt="Impact" fill className="object-cover opacity-40 filter grayscale" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-black/50"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-poppins font-bold text-white tracking-tighter mb-8">
            Join the Transition
          </h2>
          <p className="text-xl text-gray-300 font-lato mb-12 font-light">
            Whether you're an investor looking to fund scalable climate tech, or a partner seeking to utilize sustainable materials, it's time to build a cleaner world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/investors"
              className="bg-green-600 text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors rounded-sm shadow-xl font-montserrat"
            >
              Invest in us
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors rounded-sm font-montserrat"
            >
              Partner with us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
