"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Animated Background - Reduced for mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`footer-star-${i}`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3
          }}
          className="absolute text-yellow-300 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 15}px`
          }}
        >
          ✨
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-3 sm:mb-4">
            <img src="/logo.jpeg" alt="The Kids Evergreen - Trusted Play School and Preschool in Indore" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full shadow-soft-lg border-4 border-white" />
          </div>
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-sunshine mb-1 sm:mb-2">The Kids Evergreen</h3>
          <p className="text-sm sm:text-base lg:text-xl text-white/95 mb-2 sm:mb-3 lg:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">✨ A Play School ✨</p>
          <div className="space-y-1 sm:space-y-0 sm:flex sm:flex-col sm:items-center">
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white/95 mb-1 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">📍 15 Aradhana Nagar, Indore</p>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-white/95 mb-3 sm:mb-4 lg:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">📞 9131766331 | 9691255100</p>
          </div>
          <div className="border-t border-white/30 pt-4 sm:pt-6 mt-4 sm:mt-6">
            <p className="text-white/90 text-xs sm:text-sm lg:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              © {new Date().getFullYear()} The Kids Evergreen. All rights reserved. Made with 💖 for kids
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
