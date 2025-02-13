"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import AppStoreButtons from './AppStoreButtons'

const DownloadCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Capturing Perfect Pet Photos Today
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of pet parents who are creating Instagram-worthy content with PetPortrait.
            </p>
            
            <div className="mb-8">
              <AppStoreButtons />
            </div>

            <div className="flex items-center gap-4 text-indigo-100">
              <div className="bg-white/10 p-4 rounded-lg">
                <Image
                  src="/qr-code.png"
                  alt="Download QR Code"
                  width={100}
                  height={100}
                  className="w-24 h-24"
                />
              </div>
              <p>
                Scan to download<br />
                the app directly
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <Image
              src="/app-preview.png"
              alt="PetPortrait app preview"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DownloadCTA 