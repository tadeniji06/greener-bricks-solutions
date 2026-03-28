import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-montserrat">G</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-white">
                Greener <span className="text-green-500">Bricks</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Transforming plastic pollution into eco-friendly construction materials that support sustainable cities and a cleaner planet.
            </p>
            <p className="text-sm font-semibold text-white tracking-widest uppercase">
              Zero Emissions. Big Impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-montserrat font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-green-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-green-500 transition-colors">Products & Tech</Link></li>
              <li><Link href="/gallery" className="hover:text-green-500 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-montserrat font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/investors" className="hover:text-green-500 transition-colors">Investors</Link></li>
              <li><Link href="/research" className="hover:text-green-500 transition-colors">Research & Innovation</Link></li>
              <li><Link href="/news" className="hover:text-green-500 transition-colors">News & Updates</Link></li>
              <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-montserrat font-semibold mb-4 uppercase tracking-wider text-sm">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 grow"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Greener Bricks Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
