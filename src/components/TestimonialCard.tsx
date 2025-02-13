"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialCardProps {
  quote: string
  author: string
  petPhoto: string
}

const TestimonialCard = ({ quote, author, petPhoto }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 max-w-md"
    >
      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={petPhoto}
          alt={`${author}'s pet`}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-gray-600 italic mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-gray-900 font-semibold">{author}</p>
    </motion.div>
  )
}

export default TestimonialCard 