"use client"
import { motion } from 'framer-motion'
import { 
  ExclamationCircleIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline'

const problems = [
  "Difficulty getting pet's attention",
  "Missed perfect moments",
  "Time spent on captions and hashtags",
  "Limited sound options for pet attention"
]

const solutions = [
  "AI-powered pet detection",
  "Smart sound system",
  "Automatic caption generation",
  "Custom sound marketplace"
]

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Transform Your Pet Photography
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <ExclamationCircleIcon className="w-6 h-6" />
              Common Challenges
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  {problem}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-emerald-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
              <CheckCircleIcon className="w-6 h-6" />
              Our Solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution 