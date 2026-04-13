"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-lato">
      <section className="pt-40 pb-20 border-b border-gray-100 relative overflow-hidden bg-[#f8fcf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}} className="text-xs text-green-700 font-bold tracking-[0.3em] uppercase mb-4 font-montserrat">Communications</motion.h1>
          <motion.h2 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.1}} className="text-4xl md:text-7xl font-poppins font-bold text-black tracking-tighter max-w-4xl mb-6">
            Initiate connection.
          </motion.h2>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}} className="text-gray-600 font-lato max-w-xl font-normal text-lg">
            Direct channels for partners, media inquiries, and technical integrations. We aim to respond swiftly.
          </motion.p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="bg-gray-50 border-l-4 border-black rounded-r-xl p-10 h-full flex flex-col justify-between shadow-sm">
               <div>
                  <h3 className="text-black font-poppins font-bold text-2xl mb-12 hidden">Contact Matrix</h3>
                  
                  <div className="space-y-12">
                     <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 font-montserrat">Global Operations</p>
                        <p className="text-black font-lato text-2xl font-bold"><a href="mailto:sys@greenerbricks.com" className="hover:text-green-600 transition-colors">enquiries@greenerbrickssolution.com</a></p>
                     </div>
                     <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 font-montserrat">Encrypted Comms (Voice)</p>
                        <p className="text-black font-lato text-xl font-bold"><a href="tel:+2347067892326" className="hover:text-green-600 transition-colors">+234 (706) 789 2326</a></p>
                     </div>
                     <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2 font-montserrat">HQ Node</p>
                        <p className="text-gray-700 font-lato text-lg leading-relaxed max-w-xs font-normal">Kaduna, Nigeria<br/>West African Technical Zone</p>
                     </div>
                  </div>
               </div>

               <div className="mt-20">
                 <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4 font-montserrat">Transmission Feeds</p>
                 <div className="flex gap-6">
                    <a href="#" className="text-black hover:text-green-600 text-sm font-bold font-montserrat uppercase tracking-[0.1em] transition-colors">LinkedIn</a>
                    <a href="#" className="text-black hover:text-green-600 text-sm font-bold font-montserrat uppercase tracking-[0.1em] transition-colors">X / Network</a>
                 </div>
               </div>
            </motion.div>

            <motion.div 
              initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:1}}
              className="bg-black border border-gray-800 p-10 lg:p-14 rounded-xl shadow-2xl"
            >
              <h3 className="text-white font-poppins font-bold text-2xl mb-12 tracking-tight">Transmission Form</h3>
              
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   <div className="relative">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Identification</label>
                      <input type="text" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" required placeholder="User Name" />
                   </div>
                   <div className="relative">
                      <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Routing (Email)</label>
                      <input type="email" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" required placeholder="system@node.com" />
                   </div>
                </div>

                <div className="relative">
                   <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Classification / Subject</label>
                   <input type="text" className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors" required placeholder="e.g., Strategic Integration" />
                </div>

                <div className="relative">
                   <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mb-2 font-montserrat">Data Packet</label>
                   <textarea rows={5} className="w-full bg-transparent border-b-2 border-gray-700 pb-3 text-white font-lato focus:outline-none focus:border-green-500 transition-colors resize-none mt-2" required placeholder="Awaiting Input..."></textarea>
                </div>

                <button type="submit" className="w-full bg-green-600 text-white font-bold py-5 px-6 text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 rounded-sm font-montserrat shadow-md mt-4">
                  Transmit Data
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
