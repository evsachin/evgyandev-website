import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Using Lucide icons (they're lightweight)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Achievements", href: "#achievements" },
    { name: "Earnings", href: "#earnings" },
    { name: "Team", href: "#team" },
    { name: "Buy Course", href: "#course" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">Gyandev Gupta</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          {menuLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-indigo-500 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-indigo-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col items-center bg-white/90 backdrop-blur-md px-6 py-4 md:hidden shadow-md space-y-4 font-medium text-gray-700"
          >
            {menuLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-indigo-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
