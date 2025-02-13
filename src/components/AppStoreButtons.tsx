"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.a
        href="#"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg group-hover:bg-indigo-600/20 transition-all" />
        <Image
          src="/app-store-badge.png"
          alt="Download on the App Store"
          width={200}
          height={60}
          className="relative h-auto"
        />
      </motion.a>
      <motion.a
        href="#"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg group-hover:bg-indigo-600/20 transition-all" />
        <Image
          src="/play-store-badge.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className="relative h-auto"
        />
      </motion.a>
    </div>
  )
}

export default AppStoreButtons 