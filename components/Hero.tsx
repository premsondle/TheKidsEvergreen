"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <section id="home" className="relative py-10 sm:py-16 lg:py-20 overflow-hidden min-h-screen">
      {/* Background Collage Images */}
      <div className="absolute inset-0">
        {/* Mobile: Single background, Desktop: Split screen */}
        <div className="block sm:hidden absolute inset-0">
          <img 
            src="/collage1.jpeg" 
            alt="The Kids Evergreen Play School - Happy children learning and playing in Indore preschool" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop Split Screen */}
        <div className="hidden sm:block">
          {/* Collage 1 - Left Side */}
          <div className="absolute top-0 left-0 w-1/2 h-full">
            <img 
              src="/collage1.jpeg" 
              alt="The Kids Evergreen Play School - Children engaged in educational activities" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Collage 2 - Right Side */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <img 
              src="/collage2.jpeg" 
              alt="The Kids Evergreen - Special events and celebrations at our Indore preschool" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Overlay for better text readability - VERY LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky/20 via-primary/15 to-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-secondary to-coral text-white px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-xs sm:text-sm lg:text-xl font-bold mb-3 sm:mb-4 lg:mb-6 shadow-soft-lg"
            >
              ⭐ ADMISSION OPEN FOR ⭐
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] leading-tight bg-white/80 backdrop-blur-sm px-4 py-2 rounded-kids inline-block"
            >
              Welcome to The Kids Evergreen
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base lg:text-xl text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-2 sm:px-0 font-semibold bg-white/75 backdrop-blur-sm py-3 rounded-kids inline-block"
            >
              🌟 A play school that understands your little ones' language and their playful nature. Here, your children's complete mental and physical development happens through fun activities and celebrations! 🎉
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/forms/d/17WThR7Bp66ls7fN4WPiIJaIOXEGERKCh_Tn7qQZBkrw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-secondary to-coral text-white px-3 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-full font-bold shadow-soft-lg hover:shadow-playful transition-all text-sm sm:text-base lg:text-lg w-auto sm:w-auto text-center"
              >
                🎒 Enroll Now
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAboutModal(true)}
                className="bg-gradient-to-r from-primary to-sky text-white px-3 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 rounded-full font-bold shadow-soft-lg hover:shadow-soft transition-all text-sm sm:text-base lg:text-lg w-auto sm:w-auto text-center"
              >
                ℹ️ About Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="bg-white/98 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-kids-lg shadow-soft-lg border-4 border-sunshine/30">
                <img 
                  src="/founders.jpeg" 
                  alt="Founders of The Kids Evergreen Play School - Dedicated educators in Indore" 
                  className="w-full h-auto rounded-kids shadow-soft"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="mt-3 sm:mt-4 text-center"
                >
                  <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900">
                    Our Founders
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Us Modal */}
      <AnimatePresence>
        {showAboutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAboutModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -180 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-kids sm:rounded-kids-lg p-4 sm:p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-soft-lg mx-2 sm:mx-4 border-4 border-sunshine/20"
            >
              <button
                onClick={() => setShowAboutModal(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-4xl text-gray-500 hover:text-red-500 transition z-10"
              >
                ✕
              </button>

              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent pr-8 sm:pr-0"
              >
                About Us – The Kids Evergreen (A Play School)
              </motion.h2>

              <div className="space-y-4 sm:space-y-6 text-gray-700">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    The Kids Evergreen School is a trusted play school and preschool dedicated to providing a safe, caring, and joyful learning environment for young children. We focus on building a strong foundation in early education through play-based and activity-oriented learning.
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-3">
                    At The Kids Evergreen (A Play School) we believe that every child is unique and learns best when they feel loved, confident, and encouraged. Our teaching approach helps children develop language skills, creativity, social behavior, and self-confidence from an early age.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-2 sm:mb-3">Our Programs</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-2">
                    We offer age-appropriate classes designed to support early childhood development:
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg space-y-1 ml-4">
                    <li>Play Group</li>
                    <li>Nursery</li>
                    <li>LKG (Lower Kindergarten)</li>
                    <li>UKG (Upper Kindergarten)</li>
                  </ul>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-2">
                    Each program is carefully planned to improve English communication, basic numeracy, motor skills, and moral values.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-secondary mb-2 sm:mb-3">Our Teaching Method</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-2">
                    Our experienced and caring teachers use:
                  </p>
                  <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg space-y-1 ml-4">
                    <li>Play-based learning</li>
                    <li>Activity-based teaching</li>
                    <li>Rhymes, stories & phonics</li>
                    <li>Art, craft & creative activities</li>
                  </ul>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed mt-2">
                    This helps children learn naturally while enjoying school and building a love for learning.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-accent mb-2 sm:mb-3">Our Mission</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Our mission is to create a happy and secure environment where children grow academically, emotionally, and socially with confidence.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-2 sm:mb-3">Our Vision</h3>
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    Our vision is to nurture young minds and help them become confident learners, good communicators, and responsible individuals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-secondary mb-2 sm:mb-3">Why Choose The Kids Evergreen School?</h3>
                  <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg space-y-1 ml-4">
                    <li>Child-friendly & safe campus</li>
                    <li>Focus on English language & communication</li>
                    <li>Individual attention to every child</li>
                    <li>Experienced & caring teachers</li>
                    <li>Fun learning with strong values</li>
                  </ul>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-6 sm:mt-8 text-center"
              >
                <p className="text-primary text-sm sm:text-base lg:text-lg font-semibold">
                  ✨ Join us in nurturing your child's bright future! ✨
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
