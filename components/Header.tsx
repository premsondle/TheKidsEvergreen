"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-sky via-primary to-secondary shadow-soft-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="inline-block">
            <img src="/logo.jpeg" alt="The Kids Evergreen Logo - Best Play School and Preschool in Indore" className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-soft-lg border-4 border-white" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white drop-shadow-lg">
              The Kids Evergreen
            </h1>
            <p className="text-xs sm:text-sm text-white/95 font-medium">✨ A Play School ✨</p>
          </div>
        </motion.div>
        <nav className="hidden md:flex gap-6">
          {["Home", "Programs", "Features", "Gallery", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.15, 
                y: -3,
                color: "#FFD54F"
              }}
              href={`#${item.toLowerCase()}`}
              className="text-white font-semibold hover:text-sunshine transition text-sm sm:text-base lg:text-lg"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </motion.button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-t-4 border-sunshine"
        >
          <nav className="flex flex-col gap-4 p-4">
            {["Home", "Programs", "Features", "Gallery", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-primary font-semibold hover:text-secondary transition text-sm sm:text-base lg:text-lg py-2 px-4 rounded-kids hover:bg-sky/20"
              >
                {item}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
