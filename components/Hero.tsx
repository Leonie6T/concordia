'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Background with Image Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-dark z-0"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 z-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-20 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-72 mx-auto mb-8"
            >
              <Image
                src="/assets/logo/Concordia House.png"
                alt="Concordia House Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="inline-block px-4 py-2 bg-terracotta/20 backdrop-blur-sm border border-terracotta/30 rounded-full text-terracotta font-semibold text-sm md:text-base">
                Exclusive Student Residence
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl">
              Residence of{' '}
              <span className="text-terracotta drop-shadow-lg">Excellence</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-white drop-shadow-lg">
              Where Fun and Achievement Go Hand in Hand
            </p>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Exclusive student accommodation in Komani. Modern, safe, and
              conveniently located just 1.5km from Walter Sisulu University.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center items-center mb-16"
          >
            <Link
              href="/apply"
              className="group relative overflow-hidden bg-terracotta text-white px-10 py-5 rounded-xl font-bold text-lg md:text-xl min-w-[280px] shadow-2xl shadow-terracotta/50 hover:shadow-terracotta/70 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Join our Waitlist</span>
              <div className="absolute inset-0 bg-terracotta-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </motion.div>

          {/* Key Stats - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-terracotta mb-2">46</div>
              <div className="text-sm md:text-base font-semibold text-navy">Beds Available</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-terracotta mb-2">1.5km</div>
              <div className="text-sm md:text-base font-semibold text-navy">From WSU Campus</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-terracotta mb-2">NSFAS</div>
              <div className="text-xs md:text-sm font-semibold text-navy">Accredited (PENDING)</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-terracotta mb-2">400m</div>
              <div className="text-sm md:text-base font-semibold text-navy">From Nonesi Mall</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2 shadow-lg"
        >
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

