import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Greener Bricks Solution",
  description: "View photos of our plastic recycling machine, eco-friendly brick samples, and sustainable projects.",
};

export default function Gallery() {
  const images = [
    { src: "", alt: "Recycling Machine Prototype", category: "Our Tech" },
    { src: "", alt: "Plastic Brick Samples", category: "Products" },
    { src: "", alt: "Recycling Process", category: "Process" },
    { src: "", alt: "Community Project Activities", category: "Impact" },
    { src: "", alt: "KEMILAN Demonstration", category: "Our Tech" },
    { src: "", alt: "Sustainable Building Development", category: "Impact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-sm text-green-600 font-semibold tracking-widest uppercase mb-4 font-montserrat">Gallery</h1>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 max-w-3xl mx-auto">
            Visualizing <span className="text-green-600">Sustainability</span>
          </h2>
          <p className="text-lg text-gray-600 font-open-sans mt-6 max-w-2xl mx-auto">
            Explore our process, products, and the impact of turning plastic waste into sustainable construction materials.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-4/3 bg-gray-100 flex items-center justify-center border border-gray-100">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-linear-to-tr from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-green-400 font-semibold uppercase tracking-widest mb-1 block font-montserrat">{img.category}</span>
                  <p className="text-white font-montserrat font-semibold">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
