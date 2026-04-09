"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { logo } from "@/assets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Story", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Impact", path: "/research" },
    { name: "Gallery", path: "/gallery" },
    { name: "Investors", path: "/investors" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/90 backdrop-blur-lg border-gray-200 shadow-sm" : "bg-white border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src={logo} alt="Greener Bricks Logo" width={240} height={120} className="object-contain group-hover:scale-105 transition-transform" />
              
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-1 py-2 text-xs font-bold tracking-[0.15em] uppercase font-montserrat transition-colors duration-300 ${
                  pathname === link.path
                    ? "text-green-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-600 rounded-t-sm" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-black text-white px-6 py-3 text-xs font-bold font-montserrat tracking-[0.15em] uppercase hover:bg-green-600 hover:text-white transition-all duration-300 shadow-md rounded-sm"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-green-600 focus:outline-none p-2 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu className="h-7 w-7" /> : <X className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
          <div className="flex flex-col items-center pt-12 space-y-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg uppercase tracking-[0.2em] font-bold font-montserrat transition-colors duration-300 ${
                  pathname === link.path ? "text-green-600" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-black text-white px-10 py-4 text-sm font-bold tracking-[0.2em] font-montserrat uppercase mt-8 hover:bg-green-600 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
