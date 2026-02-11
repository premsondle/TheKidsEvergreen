"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/collage1.jpeg" 
          alt="Contact The Kids Evergreen Play School - Admission enquiry for preschool in Indore" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability - VERY LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20"></div>
      </div>

      {/* Animated Stars - Reduced for mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 2 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="absolute text-yellow-300 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 20}px`
          }}
        >
          ⭐
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-sunshine to-accent px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full mb-4 sm:mb-6 shadow-soft-lg border-4 border-white"
            >
              <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">🎒 ADMISSION OPEN 🎒</h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-white text-gray-800 p-4 sm:p-6 lg:p-10 rounded-kids-lg shadow-soft-lg border-4 border-sunshine/20"
          >
            <h3 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8 text-center">📞 Contact Us</h3>
            
            <div className="details space-y-3 sm:space-y-4 lg:space-y-6">
              {/* Phone Numbers and Address in Column on mobile, Row on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                {/* Phone Numbers */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-4 bg-gradient-to-r from-sky/10 to-primary/10 p-4 sm:p-5 lg:p-6 rounded-kids shadow-soft h-28 sm:h-32 lg:h-auto min-h-24"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl">📞</span>
                  <div className="text-center sm:text-left flex-1">
                    <p className="font-bold text-xs sm:text-sm lg:text-base xl:text-xl mb-2 text-primary">Phone Numbers</p>
                    <p className="text-xs sm:text-xs lg:text-sm xl:text-base text-gray-800 font-bold mb-1">9131766331</p>
                    <p className="text-xs sm:text-xs lg:text-sm xl:text-base text-gray-800 font-bold">9691255100</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-4 bg-gradient-to-r from-secondary/10 to-coral/10 p-4 sm:p-5 lg:p-6 rounded-kids shadow-soft h-29 sm:h-32 lg:h-auto min-h-24"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl">📍</span>
                  <div className="text-center sm:text-left flex-1">
                    <p className="font-bold text-xs sm:text-sm lg:text-base xl:text-xl mb-2 text-secondary">Address</p>
                    <p className="text-xs sm:text-xs lg:text-xs xl:text-sm mb-1 text-gray-800 font-semibold">15 Aradhana Nagar,</p>
                    <p className="text-xs sm:text-xs lg:text-xs xl:text-sm mb-1 text-gray-800 font-semibold">Chanchal Milk Dairy,</p>
                    <p className="text-xs sm:text-xs lg:text-xs xl:text-sm text-gray-800 font-semibold">Indore</p>
                  </div>
                </motion.div>
              </div>

              {/* Quick Inquiry Button */}
              <div className="text-center mt-5 sm:mt-6 lg:mt-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://docs.google.com/forms/d/17WThR7Bp66ls7fN4WPiIJaIOXEGERKCh_Tn7qQZBkrw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-sky text-white px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-4 xl:py-5 rounded-full font-bold text-xs sm:text-sm lg:text-base xl:text-lg shadow-soft-lg hover:shadow-playful transition-all w-auto min-w-32"
                >
                  ✍️ Quick Inquiry
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
