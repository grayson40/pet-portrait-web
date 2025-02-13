"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image: string
}

const FeatureCard = ({ title, description, icon, image }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl p-6 max-w-sm"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-indigo-600 w-8 h-8">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="relative h-48 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </motion.div>
  )
}

export default FeatureCard 