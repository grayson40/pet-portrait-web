"use client"
import { motion } from 'framer-motion'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    quote: "Finally got that perfect shot of my hyperactive puppy! The smart sound feature is a game-changer.",
    author: "Sarah Johnson",
    petPhoto: "/testimonial-1.jpg"
  },
  {
    quote: "The AI detection is incredible. Captures the exact moment my cat looks at the camera!",
    author: "Mike Chen",
    petPhoto: "/testimonial-2.jpg"
  },
  {
    quote: "Love how it generates Instagram captions. Saves me so much time sharing photos of my pets.",
    author: "Emma Rodriguez",
    petPhoto: "/testimonial-3.jpg"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Pet Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy pet owners capturing perfect moments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-bold text-indigo-600">
              ★★★★★
            </p>
            <p className="text-gray-600">
              4.9 average rating from 10,000+ reviews
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 