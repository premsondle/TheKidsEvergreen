"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [showPicnicModal, setShowPicnicModal] = useState(false);
  const [showPlayAreaModal, setShowPlayAreaModal] = useState(false);

  const galleryItems = [
    { id: 1, icon: "🏫", label: "School Building", color: "from-blue-400 to-cyan-400" },
    { id: 2, icon: "🎭", label: "Activity Hall", color: "from-purple-400 to-pink-400" },
    { id: 3, icon: "👶", label: "Play Area", color: "from-yellow-400 to-orange-400", hasModal: true },
    { id: 4, icon: "🎪", label: "Events", color: "from-red-400 to-pink-400", hasModal: true },
    { id: 5, icon: "🚌", label: "Picnic", color: "from-green-400 to-teal-400", hasModal: true }
  ];

  const eventPhotos = [
    { id: 1, title: "Annual Day Celebration", emoji: "🎭", color: "from-purple-500 to-pink-500" },
    { id: 2, title: "Sports", emoji: "⚽", color: "from-green-500 to-blue-500" },
    { id: 3, title: "Independence Day", emoji: "🇮🇳", color: "from-orange-500 to-green-500" },
    { id: 4, title: "Christmas Celebration", emoji: "🎄", color: "from-red-500 to-green-500" },
    { id: 5, title: "Diwali Festival", emoji: "🪔", color: "from-yellow-500 to-orange-500" },
    { id: 6, title: "Children's Day", emoji: "🎈", color: "from-blue-500 to-purple-500" },
    { id: 7, title: "Republic Day", emoji: "🎊", color: "from-orange-500 to-blue-500" },
    { id: 8, title: "Holi Celebration", emoji: "🎨", color: "from-pink-500 to-purple-500" },
    { id: 9, title: "Graduation Day", emoji: "🎓", color: "from-indigo-500 to-purple-500" },
    { id: 10, title: "Ganesh Chaturthi Celebration", emoji: "🐘", color: "from-orange-500 to-red-500" },
    { id: 11, title: "Green Day Celebration", emoji: "🌱", color: "from-green-500 to-emerald-500" },
    { id: 12, title: "Navratri Celebration", emoji: "💃", color: "from-pink-500 to-yellow-500" }
  ];

  const handleItemClick = (item: any) => {
    if (item.hasModal) {
      if (item.label === "Events") {
        setShowEventsModal(true);
      } else if (item.label === "Picnic") {
        setShowPicnicModal(true);
      } else if (item.label === "Play Area") {
        setShowPlayAreaModal(true);
      }
    }
  };

  return (
    <section id="gallery" className="py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Images - Mobile: Single image, Desktop: Split screen */}
      <div className="absolute inset-0">
        {/* Mobile: Single background */}
        <div className="block sm:hidden absolute inset-0">
          <img 
            src="/schoolback1.jpeg" 
            alt="The Kids Evergreen school building - Best play school in Indore" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Desktop: Split Screen */}
        <div className="hidden sm:block">
          {/* School Back 1 - Left Side */}
          <div className="absolute top-0 left-0 w-1/2 h-full">
            <img 
              src="/schoolback1.jpeg" 
              alt="School Gallery" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* School Back 2 - Right Side */}
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <img 
              src="/schoolback2.jpeg" 
              alt="The Kids Evergreen - Children enjoying outdoor activities and learning" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Overlay for better text readability - VERY LIGHT */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20"></div>
      </div>

      {/* Animated circles - Reduced for mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute rounded-full hidden sm:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${80 + i * 30}px`,
            height: `${80 + i * 30}px`,
            background: `radial-gradient(circle, ${
              ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA'][i]
            }30, transparent)`
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
            🏫 Our Beautiful School 🏫
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm sm:text-base lg:text-xl xl:text-2xl text-gray-800 font-bold bg-white/75 backdrop-blur-sm py-2 px-4 rounded-kids inline-block"
          >
            🚌 Transportation facility available! 🚌
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              onClick={() => handleItemClick(item)}
              className={`bg-gradient-to-br ${item.color} rounded-kids sm:rounded-kids-lg overflow-hidden shadow-soft-lg hover:shadow-playful transition-all flex items-center justify-center cursor-pointer transform h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56`}
            >
              <div className="text-center p-2 sm:p-3 lg:p-6 xl:p-8">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl mb-1 sm:mb-2 lg:mb-4 drop-shadow-2xl"
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white font-bold text-xs sm:text-sm lg:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                </motion.p>
                {item.hasModal && (
                  <p className="text-white/90 text-xs mt-1 hidden sm:block lg:mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-semibold">
                    {item.label === "Events" ? "Click to view events" : 
                     item.label === "Picnic" ? "Click to view picnic" : 
                     "Click to view play area"}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              y: [0, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            className="inline-block bg-gradient-to-r from-sunshine via-accent to-coral border-4 sm:border-8 border-white rounded-full p-4 sm:p-6 lg:p-10 shadow-soft-lg cursor-pointer"
          >
            <p className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]">
              🚌 Transportation Facility Available! 🚌
            </p>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showEventsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEventsModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -180 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-kids-lg p-4 sm:p-6 lg:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-soft-lg mx-2 sm:mx-4 border-4 border-sunshine/20"
            >
              <button
                onClick={() => setShowEventsModal(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-4xl text-gray-500 hover:text-red-500 transition z-10"
              >
                ✕
              </button>

              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pr-8 sm:pr-0"
              >
                🎪 Our Amazing Events 🎪
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventPhotos.map((event, index) => {
                  // Special case for Children's Day - show actual photos
                  if (event.title === "Children's Day") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        >
                          🎈 Children's Day Celebration 🎈
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[1, 2, 3, 4, 5].map((photoNum) => (
                            <motion.div
                              key={`childrenday${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/childrenday${photoNum}.jpeg`}
                                alt={`Children's Day Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Special case for Republic Day - show actual photos
                  if (event.title === "Republic Day") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3 mt-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent"
                        >
                          🎊 Republic Day Celebration 🎊
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[1, 2, 3].map((photoNum) => (
                            <motion.div
                              key={`republicday${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/republic day ${photoNum}.jpeg`}
                                alt={`Republic Day Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Special case for Diwali Festival - show actual photos
                  if (event.title === "Diwali Festival") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3 mt-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
                        >
                          🪔 Diwali Festival Celebration 🪔
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[1, 2, 3].map((photoNum) => (
                            <motion.div
                              key={`diwali${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/diwali${photoNum}.jpeg`}
                                alt={`Diwali Festival Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Special case for Independence Day - show actual photos
                  if (event.title === "Independence Day") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3 mt-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent"
                        >
                          🇮🇳 Independence Day Celebration 🇮🇳
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[1, 2, 3, 4].map((photoNum) => (
                            <motion.div
                              key={`idd${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/idd${photoNum}.jpeg`}
                                alt={`Independence Day Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Special case for Ganesh Chaturthi Celebration - show actual photos
                  if (event.title === "Ganesh Chaturthi Celebration") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3 mt-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-accent to-coral bg-clip-text text-transparent"
                        >
                          🐘 Ganesh Chaturthi Celebration 🐘
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[1, 2, 3, 4].map((photoNum) => (
                            <motion.div
                              key={`ganesh${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/ganesh${photoNum}.jpeg`}
                                alt={`Ganesh Chaturthi Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Special case for Green Day Celebration - show actual photos
                  if (event.title === "Green Day Celebration") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3 mt-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                        >
                          🌱 Green Day Celebration 🌱
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[1, 2, 3, 4].map((photoNum) => (
                            <motion.div
                              key={`greenday${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/greenday${photoNum}.jpeg`}
                                alt={`Green Day Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Special case for Navratri Celebration - show actual photos
                  if (event.title === "Navratri Celebration") {
                    return (
                      <div key={event.id} className="md:col-span-2 lg:col-span-3 mt-8">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-lg sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent"
                        >
                          💃 Navratri Celebration 💃
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[1, 2, 3, 4].map((photoNum) => (
                            <motion.div
                              key={`garba${photoNum}`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1 + photoNum * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                            >
                              <img 
                                src={`/garba${photoNum}.jpeg`}
                                alt={`Navratri Garba Photo ${photoNum}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="font-bold">Photo {photoNum}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  
                  // Regular event cards for other events
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className={`bg-gradient-to-br ${event.color} rounded-kids p-6 shadow-soft-lg cursor-pointer`}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className="text-7xl text-center mb-4"
                      >
                        {event.emoji}
                      </motion.div>
                      <h3 className="text-white font-bold text-xl text-center drop-shadow-lg">
                        {event.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  ✨ We celebrate all special occasions with joy and enthusiasm! ✨
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Picnic Modal */}
      <AnimatePresence>
        {showPicnicModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPicnicModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -180 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-kids-lg p-4 sm:p-6 lg:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-soft-lg mx-2 sm:mx-4 border-4 border-sunshine/20"
            >
              <button
                onClick={() => setShowPicnicModal(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-4xl text-gray-500 hover:text-red-500 transition z-10"
              >
                ✕
              </button>

              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 bg-clip-text text-transparent"
              >
                🚌 School Picnic Adventures 🚌
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((photoNum) => (
                  <motion.div
                    key={`picnic${photoNum}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: photoNum * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                  >
                    <img 
                      src={`/picnic${photoNum}.jpeg`}
                      alt={`Picnic Photo ${photoNum}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold">Photo {photoNum}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  🌳 Fun-filled outdoor adventures and learning experiences! 🌳
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Play Area Modal */}
      <AnimatePresence>
        {showPlayAreaModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPlayAreaModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -180 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-kids-lg p-4 sm:p-6 lg:p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto relative shadow-soft-lg mx-2 sm:mx-4 border-4 border-sunshine/20"
            >
              <button
                onClick={() => setShowPlayAreaModal(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-4xl text-gray-500 hover:text-red-500 transition z-10"
              >
                ✕
              </button>

              <motion.h2
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
              >
                👶 Play Area Activities 👶
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((photoNum) => (
                  <motion.div
                    key={`playarea${photoNum}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: photoNum * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative overflow-hidden rounded-kids shadow-soft-lg cursor-pointer"
                  >
                    <img 
                      src={`/playarea${photoNum}.jpeg`}
                      alt={`Play Area Photo ${photoNum}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold">Photo {photoNum}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                  🎮 Safe and fun play activities for children's development! 🎮
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
