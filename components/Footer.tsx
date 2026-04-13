import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { logo } from "@/assets";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-green-500 rounded-full blur-[200px] opacity-[0.08] pointer-events-none transform translate-x-1/3 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          <div className="lg:col-span-1">
             <Link href="/" className="flex items-center gap-3 mb-8">
              <Image src={logo} alt="Greener Bricks Logo" width={50} height={50} className="object-contain" />
              <span className="font-poppins font-bold text-xl tracking-[0.1em] text-white uppercase">
                Greener <span className="text-green-500">Bricks</span>
              </span>
            </Link>
            <p className="font-lato leading-relaxed text-base mb-8 text-gray-200">
              Transforming the global plastic crisis into durable, zero-emission building solutions for the modern world.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-green-500 font-montserrat uppercase tracking-[0.2em] text-sm font-bold mb-6">Company</h4>
            <ul className="space-y-4 font-lato text-base text-gray-100">
              <li><Link href="/about" className="hover:text-green-400 transition-colors">Our Story</Link></li>
              <li><Link href="/products" className="hover:text-green-400 transition-colors">Technology</Link></li>
              <li><Link href="/research" className="hover:text-green-400 transition-colors">Impact & R&D</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-green-500 font-montserrat uppercase tracking-[0.2em] text-sm font-bold mb-6">Connect</h4>
            <ul className="space-y-4 font-lato text-base text-gray-100">
              <li><Link href="/investors" className="hover:text-green-400 transition-colors">Investors</Link></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-green-500 font-montserrat uppercase tracking-[0.2em] text-sm font-bold mb-6">Stay Updated</h4>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-gray-900 border border-gray-700 text-white placeholder-gray-400 px-4 py-3 text-sm tracking-[0.1em] focus:outline-none focus:border-green-400 transition-colors w-full font-lato"
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-3 text-sm font-bold tracking-[0.2em] font-montserrat uppercase hover:bg-white hover:text-black transition-all flex items-center justify-between group rounded-sm shadow-md"
              >
                Subscribe <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-lato text-gray-300">
          <p>© {new Date().getFullYear()} Greener Bricks Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
