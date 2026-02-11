"use client";
import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    { 
      name: "PLAY GROUP", 
      age: "1.5 - 2.5 years", 
      description: "Introduction to learning through play",
      icon: "🎪",
      color: "from-red-400 to-pink-400"
    },
    { 
      name: "NURSERY", 
      age: "2.5 - 3.5 years", 
      description: "Building foundation skills",
      icon: "🌱",
      color: "from-green-400 to-emerald-400"
    },
    { 
      name: "L.K.G", 
      age: "3.5 - 4.5 years", 
      description: "Lower Kindergarten program",
      icon: "📚",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      name: "U.K.G", 
      age: "4.5 - 5.5 years", 
      description: "Upper Kindergarten program",
      icon: "🎓",
      color: "from-purple-400 to-pink-400"
    },
  ];

  return (
    <section id="programs" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/addback.jpeg" 
          alt="The Kids Evergreen - Admission open for Play Group, Nursery, LKG, UKG in Indore" 
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability - VERY LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20"></div>
      </div>

      {/* Animated Background Stars - Reduced for mobile */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.1
          }}
          className="absolute text-yellow-400 hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 15}px`
          }}
        >
          ⭐
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 flex flex-col items-center gap-3 sm:gap-4"
        >
          <motion.h2
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-base sm:text-xl lg:text-4xl xl:text-5xl font-bold text-gray-900 bg-white/85 backdrop-blur-sm px-6 py-3 rounded-kids shadow-soft-lg"
          >
            🎨 ADMISSION OPEN FOR 🎨
          </motion.h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-800 font-bold bg-white/75 backdrop-blur-sm py-2 px-4 rounded-kids">Choose the perfect program for your little star!</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${program.color} p-2 sm:p-3 lg:p-6 xl:p-8 rounded-kids sm:rounded-kids-lg shadow-soft-lg hover:shadow-playful transition-all transform h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 flex flex-col justify-center items-center`}>
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-center mb-2 sm:mb-3 lg:mb-4"
                >
                  {program.icon}
                </motion.div>
                
                <div className="text-center">
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-1 sm:mb-2">{program.name}</h3>
                  <p className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-xs sm:text-xs lg:text-sm xl:text-base mb-1 sm:mb-2">{program.age}</p>
                  <p className="text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] text-xs sm:text-xs lg:text-sm xl:text-base">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
