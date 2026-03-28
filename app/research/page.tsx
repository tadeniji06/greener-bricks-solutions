import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Innovation | Greener Bricks Solution",
  description: "Greener Bricks Solution explores new technologies to improve recycling efficiency and expand sustainable construction solutions.",
};

export default function Research() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-black text-white py-32 border-b border-gray-900 relative">
        <div className="absolute inset-0 bg-linear-to-r from-green-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4 font-montserrat">Research & Innovation</h1>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold max-w-2xl">
            Advancing the Future of Construction Tech
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 item-start">
            <div>
              <p className="text-xl text-gray-600 font-open-sans mb-8 leading-relaxed">
                Greener Bricks Solution continues to explore new technologies and research opportunities to improve recycling efficiency and expand sustainable construction solutions.
              </p>
              
              <div className="bg-green-50 rounded-2xl p-10 border border-green-100 mb-8">
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-700 font-open-sans leading-relaxed">
                  Innovation is at the core of what we do. By investing heavily in R&D, we aim to ensure that our machines like KEMILAN and WREEKER operate at peak efficiency with absolute zero carbon emissions, while producing stronger, safer, and cheaper bricks.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">Collaborate With Us</h3>
              <p className="text-gray-600 font-open-sans mb-8 leading-relaxed">
                We welcome research collaborations with leading academic and environmental entities to further improve closing the loop on plastic pollution.
              </p>

              <ul className="space-y-4 font-open-sans mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> Research Institutions
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> Universities
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> Environmental Organizations
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div> Innovation Hubs
                </li>
              </ul>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center px-6 py-3 text-base font-semibold rounded-md text-white bg-black hover:bg-gray-800 transition-colors uppercase tracking-wider font-montserrat"
              >
                Partner on Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
