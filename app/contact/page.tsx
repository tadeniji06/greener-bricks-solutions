"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
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
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-sm text-green-600 font-semibold tracking-widest uppercase mb-4 font-montserrat">Contact Us</h1>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 max-w-3xl mx-auto">
            Let's Build a Greener Future
          </h2>
          <p className="text-lg text-gray-600 font-open-sans mt-6 max-w-2xl mx-auto">
            Ready to partner, invest, or simply want more information? Reach out to our team today.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[80px] mix-blend-screen opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="text-2xl font-montserrat font-bold mb-8 relative z-10">Get In Touch</h3>
                
                <div className="space-y-8 flex flex-col justify-center h-full pb-10 relative z-10">
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="text-green-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-lg font-open-sans">
                        <a href="tel:+2347067892326" className="hover:text-green-400 transition-colors">+234 706 789 2326</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group cursor-pointer">
                    <div className="text-green-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-lg font-open-sans">
                        <a href="mailto:info@greenerbricks.com" className="hover:text-green-400 transition-colors">info@greenerbricks.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group cursor-pointer">
                    <div className="text-green-400 group-hover:scale-110 transition-transform">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Headquarters</h4>
                      <p className="text-lg font-open-sans">
                        Kaduna, Nigeria
                      </p>
                    </div>
                  </div>

                   <div className="pt-8 mt-auto border-t border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h4>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:-translate-y-1 transition-all">
                         <span className="sr-only">LinkedIn</span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                      <a href="#" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 hover:-translate-y-1 transition-all">
                        <span className="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12"
            >
              <motion.h3 variants={fadeIn} className="text-2xl font-montserrat font-bold text-gray-900 mb-6">Send Us a Message</motion.h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <motion.div variants={fadeIn}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Full Name</label>
                    <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="Jane Doe" required />
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Email Address</label>
                    <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="jane@example.com" required />
                  </motion.div>
                </div>

                <motion.div variants={fadeIn}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Subject</label>
                  <input type="text" id="subject" className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="How can we help?" required />
                </motion.div>

                <motion.div variants={fadeIn}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-montserrat">Message</label>
                  <textarea id="message" rows={5} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 font-open-sans transition-shadow" placeholder="Write your message here..."></textarea>
                </motion.div>

                <motion.button variants={fadeIn} type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-md transition-colors text-lg font-montserrat uppercase tracking-wider shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                  Send Message
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
