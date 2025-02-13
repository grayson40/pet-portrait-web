"use client"
import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import { 
  CameraIcon, 
  SpeakerWaveIcon, 
  ShareIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    title: "Perfect Shot Timing",
    description: "AI-powered detection ensures you capture the perfect moment every time.",
    icon: <CameraIcon />,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80" // Dog looking at camera
  },
  {
    title: "Smart Sound System",
    description: "Grab your pet's attention with our collection of proven attention-getting sounds.",
    icon: <SpeakerWaveIcon />,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80" // Cat with perked ears
  },
  {
    title: "Social Ready",
    description: "Auto-generated captions and hashtags make sharing a breeze.",
    icon: <ShareIcon />,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80" // Instagram-style pet photo
  }
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Perfect Pet Photos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to capture and share amazing moments with your pets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 