'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Background with Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/backgrounds/hero-lounge-small.png"
          alt="Concordia House Student Lifestyle"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
        {/* Cinematic Dark Overlay */}
        <div className="absolute inset-0 bg-navy/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/50 opacity-80"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 mx-auto mb-8 drop-shadow-2xl"
            >
              <Image
                src="/assets/logo/Concordia House.png"
                alt="Concordia House Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl tracking-tight">
              Residence of{' '}
              <span className="font-serif italic text-terracotta drop-shadow-lg font-normal block md:inline mt-2 md:mt-0">
                Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light text-gray-200 drop-shadow-md tracking-wide">
              Where Fun and Achievement Go Hand in Hand
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center items-center mb-20"
            >
              <Link
                href="/apply"
                className="group relative overflow-hidden bg-terracotta text-white px-12 py-5 rounded-full font-bold text-lg md:text-xl min-w-[280px] shadow-[0_0_30px_rgba(200,93,68,0.4)] hover:shadow-[0_0_50px_rgba(200,93,68,0.6)] transition-all duration-500 hover:scale-105 active:scale-95 border border-terracotta-light/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Join our Waitlist
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-terracotta-dark via-terracotta to-terracotta-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </motion.div>

            {/* Enhanced Glassmorphism Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { value: "46", label: "Beds Available" },
                { value: "1.5km", label: "From WSU Campus" },
                { value: "NSFAS", label: "Accredited (PENDING)" },
                { value: "400m", label: "From Nonesi Mall" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 group transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${stat.value === 'NSFAS' ? 'text-2xl md:text-3xl' : ''} text-white mb-2 font-serif`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-white/50 text-xs tracking-[0.2em] mb-2 block text-center uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

