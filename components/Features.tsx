"use client";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    { title: "Loving & Caring Teaching Staff", icon: "👨‍🏫", color: "from-pink-400 to-rose-400" },
    { title: "Toys for Creative Learning", icon: "🧸", color: "from-yellow-400 to-orange-400" },
    { title: "Play Area, Dance, Drawing & Indoor Games", icon: "🎨", color: "from-purple-400 to-pink-400" },
    { title: "All Special Day Celebrations", icon: "🎉", color: "from-green-400 to-emerald-400" },
    { title: "CCTV Camera & Smart Class", icon: "📹", color: "from-blue-400 to-cyan-400" },
    { title: "Affordable Fees Structure", icon: "💰", color: "from-indigo-400 to-purple-400" },
  ];

  const freebies = [
    { item: "FREE BAG"},
    { item: "FREE BOOK" },
    { item: "FREE DRESS"},
  ];

  return (
    <section id="features" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Images - Mobile: Single image, Desktop: Split screen */}
      <div className="absolute inset-0">
        {/* Mobile: Single background */}
        <div className="block sm:hidden absolute inset-0">
          <img 
            src="/featureback1.jpeg" 
            alt="The Kids Evergreen facilities - Modern classrooms and play areas in Indore" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop: Split Screen */}
        <div className="hidden sm:block">
          {/* Feature Back 1 - Left Side */}
          <div className="absolute top-0 left-0 w-1/2 h-full">
            <img 
              src="/featureback1.jpeg" 
              alt="School Features" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Feature Back 2 - Right Side */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <img 
              src="/featureback2.jpeg" 
              alt="The Kids Evergreen - Safe and caring environment with CCTV and smart classes" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Overlay for better text readability - VERY LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20"></div>
      </div>

      {/* Animated Confetti - Reduced for mobile */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`confetti-${i}`}
          animate={{ 
            y: [-20, 800],
            x: [0, Math.sin(i) * 50],
            rotate: [0, 360],
            opacity: [0.8, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="absolute text-lg sm:text-2xl pointer-events-none hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: -20
          }}
        >
          {['🎊', '🎉', '⭐', '✨', '🌟', '💫'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h2
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-base sm:text-xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 bg-white/85 backdrop-blur-sm px-6 py-3 rounded-kids inline-block shadow-soft-lg"
          >
            ✨ Our Amazing Features ✨
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base lg:text-xl xl:text-2xl text-gray-800 font-bold px-4 sm:px-0 bg-white/75 backdrop-blur-sm py-2 rounded-kids inline-block"
          >
            🌈 Don't wait any longer - enroll your children today! 🌈
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${feature.color} p-2 sm:p-3 lg:p-6 xl:p-8 rounded-kids sm:rounded-kids-lg shadow-soft-lg hover:shadow-playful transition-all cursor-pointer h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 flex flex-col items-center justify-center`}
            >
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: index * 0.2
                }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-1 sm:mb-2 lg:mb-3 xl:mb-4 text-center"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl font-bold text-white text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight px-1">{feature.title}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white p-4 sm:p-6 lg:p-10 rounded-kids-lg shadow-soft-lg max-w-4xl mx-auto border-2 sm:border-4 border-sunshine"
        >
          <motion.h3
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent"
          >
            🎁 Special Offers - FREE GIFTS! 🎁
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {freebies.map((freebie, index) => (
              <motion.div
                key={freebie.item}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
                className="relative overflow-hidden p-2 sm:p-3 lg:p-6 xl:p-8 rounded-kids text-center cursor-pointer shadow-soft hover:shadow-soft-lg transform h-20 sm:h-28 md:h-32 lg:h-40 xl:h-48"
                style={
                  freebie.item === "FREE BAG" ? {
                    backgroundImage: "url('/bag.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  } : freebie.item === "FREE DRESS" ? {
                    backgroundImage: "url('/Tshirt.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  } : freebie.item === "FREE BOOK" ? {
                    backgroundImage: "url('/book.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  } : {}
                }
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50 rounded-kids"></div>
                
                <motion.p
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="font-bold text-white text-xs sm:text-sm lg:text-lg xl:text-2xl drop-shadow-lg relative z-10 flex items-center justify-center h-full px-1"
                >
                  {freebie.item}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
