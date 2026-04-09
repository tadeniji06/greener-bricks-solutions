import { Metadata } from "next";
import Image from "next/image";
import { i1, i2, i3, i4, i5 } from "@/assets";

export const metadata: Metadata = {
  title: "Gallery | Greener Bricks Solution",
  description: "Visualizing the transformation of plastic waste into structural integrity.",
};

export default function Gallery() {
  const visualAssets = [
    { src: i1, title: "Synthesis Environment", category: "Facility" },
    { src: i2, title: "Structural Analysis", category: "Materials" },
    { src: i3, title: "KEMILAN Reactor Core", category: "Technology" },
    { src: i4, title: "Process Overview", category: "Production" },
    { src: i5, title: "Atmospheric Assessment", category: "Impact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-lato">
      <section className="pt-40 pb-20 border-b border-gray-100 bg-[#f8fcf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          <h1 className="text-xs text-green-700 font-bold tracking-[0.3em] uppercase mb-4 font-montserrat">Gallery</h1>
          <h2 className="text-4xl md:text-6xl font-poppins font-bold tracking-tighter mb-6">Visual Data.</h2>
          <p className="text-gray-600 font-lato max-w-xl mx-auto font-normal text-lg">Transparency in operations. Analyzing the physical transformation of waste geometry into infrastructural value.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {visualAssets.map((asset, index) => (
              <div key={index} className={`group relative overflow-hidden bg-black aspect-[4/3] rounded-xl shadow-lg hover:shadow-2xl transition-all ${index === 0 ? "lg:col-span-2 aspect-[21/9]" : ""}`}>
                 <Image src={asset.src} alt={asset.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
                 
                 <div className="absolute bottom-8 left-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs text-green-400 font-bold uppercase tracking-[0.2em] block mb-2 font-montserrat">{asset.category}</span>
                    <h3 className="text-white font-poppins font-bold text-2xl tracking-tight">{asset.title}</h3>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
