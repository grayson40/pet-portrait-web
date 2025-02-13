"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import AppStoreButtons from './AppStoreButtons'

const DownloadCTA = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #6366F1 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #10B981 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #6366F1 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left text-white order-2 lg:order-1 px-4 sm:px-6 lg:px-0"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Start Capturing Perfect Pet Photos Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Join thousands of pet parents who are creating Instagram-worthy content with PetPortrait.
              </p>
              
              <div className="mb-8 md:mb-10 -mx-4 sm:mx-0">
                <AppStoreButtons />
              </div>

              {/* QR Code Section */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 text-indigo-100 bg-white/5 backdrop-blur-sm rounded-2xl p-4 w-full sm:w-auto">
                <div className="bg-white/10 p-3 rounded-xl">
                  <Image
                    src="/qr-code.png"
                    alt="Download QR Code"
                    width={80}
                    height={80}
                    className="w-16 sm:w-20 h-16 sm:h-20"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-medium text-sm sm:text-base mb-1">Quick Download</p>
                  <p className="text-xs sm:text-sm text-indigo-200">
                    Scan to get the app directly<br />on your device
                  </p>
                </div>
              </div>
            </motion.div>

            {/* App Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative order-1 lg:order-2 -mx-8 sm:mx-0"
            >
              <div className="relative h-[360px] xs:h-[400px] sm:h-[500px] lg:h-[600px] max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] mx-auto">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
                    alt="PetPortrait app preview"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadCTA 