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
    image: "/feature-perfect-shot.jpg"
  },
  {
    title: "Smart Sound System",
    description: "Grab your pet's attention with our collection of proven attention-getting sounds.",
    icon: <SpeakerWaveIcon />,
    image: "/feature-sound-system.jpg"
  },
  {
    title: "Social Ready",
    description: "Auto-generated captions and hashtags make sharing a breeze.",
    icon: <ShareIcon />,
    image: "/feature-social.jpg"
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