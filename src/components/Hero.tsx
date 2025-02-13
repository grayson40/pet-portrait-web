"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import AppStoreButtons from './AppStoreButtons'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50 flex items-center relative overflow-hidden">
      {/* Background gradient animation */}
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

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Perfect Pet Photos, <br/>
            <span className="text-indigo-600">Powered by AI</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg">
            Capture Instagram-worthy moments of your pets with smart AI detection and attention-getting sounds.
          </p>
          <AppStoreButtons />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[600px] lg:h-[700px]"
        >
          {/* Floating device mockup */}
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/device-mockup.png"
                alt="PetPortrait app interface"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              {/* Live demo overlay */}
              <div className="absolute inset-[12%] rounded-[32px] overflow-hidden">
                <Image
                  src="/app-demo.gif"
                  alt="App demo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 