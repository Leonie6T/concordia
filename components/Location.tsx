'use client'

import { motion } from 'framer-motion'
import { MapPinIcon, ShoppingBagIcon, MusicalNoteIcon } from '@heroicons/react/24/outline'

const locations = [
  {
    icon: MapPinIcon,
    title: 'Walter Sisulu University',
    distance: '1.5km',
    description: 'Easy walk or short drive to campus',
    color: 'from-navy to-navy-light',
  },
  {
    icon: ShoppingBagIcon,
    title: 'Nonesi Mall',
    distance: '400m',
    description: 'Shopping, dining, and entertainment right nearby',
    color: 'from-terracotta to-terracotta-light',
  },
  {
    icon: MusicalNoteIcon,
    title: 'YOLO Lounge',
    distance: '800m',
    description: 'Popular nightclub for weekend fun',
    color: 'from-navy to-terracotta',
  },
]

export default function Location() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-navy mb-6">
            Perfectly{' '}
            <span className="text-terracotta">Located</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Everything you need is just a short walk away
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-2xl bg-white shadow-xl group border border-gray-100 hover:border-terracotta/30 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
              <div className="relative p-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${location.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <location.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">
                  {location.title}
                </h3>
                <div className="text-4xl font-extrabold text-terracotta mb-3">
                  {location.distance}
                </div>
                <p className="text-gray-700 leading-relaxed">{location.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-navy/10 to-terracotta/10 rounded-3xl p-10 max-w-3xl border border-navy/20 shadow-lg">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              <strong className="text-navy text-2xl">Concordia House</strong> offers the
              perfect location for students who want to balance their studies
              with an active social life. Study hard during the week, and
              unwind at nearby attractions on weekends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

