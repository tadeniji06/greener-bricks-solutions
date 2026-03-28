import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Greener Bricks Solution",
  description: "Stay updated with our latest research developments, innovation milestones, and environmental impact stories.",
};

export default function News() {
  const newsItems = [
    {
      title: "Greener Bricks Solution Unveils the New KEMILAN Prototype",
      category: "Innovation",
      date: "March 15, 2026",
      excerpt: "Our team has successfully tested the latest iteration of the KEMILAN recycling machine, achieving a 30% increase in daily capacity with absolute zero carbon emissions.",
    },
    {
      title: "Partnership with Kaduna State Government Announced",
      category: "Partnerships",
      date: "February 28, 2026",
      excerpt: "We are thrilled to announce a new partnership aimed at deploying our eco-friendly plastic bricks for public infrastructure projects within the state.",
    },
    {
      title: "Research Paper on Plastic Durability Published",
      category: "Research",
      date: "January 10, 2026",
      excerpt: "Our in-house R&D team recently published findings demonstrating that our plastic bricks exhibit superior water resistance compared to traditional concrete blocks.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-sm text-green-600 font-semibold tracking-widest uppercase mb-4 font-montserrat">News & Updates</h1>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 max-w-3xl mx-auto">
            Latest from Greener Bricks
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-montserrat">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-400 font-open-sans">{item.date}</span>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-open-sans grow mb-6">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-green-600 font-semibold font-montserrat uppercase tracking-wider text-sm flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                    Read More <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full font-bold transition-colors uppercase tracking-wider font-montserrat">
              Load More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
