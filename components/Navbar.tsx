"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Research", path: "/research" },
    { name: "Gallery", path: "/gallery" },
    { name: "Investors", path: "/investors" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-montserrat">G</span>
              </div>
              <span className="font-montserrat font-bold text-xl text-gray-900">
                Greener <span className="text-green-600">Bricks</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-green-600 font-semibold"
                    : "text-gray-600 hover:text-green-600 font-medium"
                } transition-colors duration-200 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-sm uppercase tracking-wider shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 rounded-md p-2 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <X className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.path
                    ? "bg-green-50 text-green-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-green-600"
                } block px-3 py-2 rounded-md font-medium text-base`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 mt-4 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
