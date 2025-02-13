"use client"
import { motion } from 'framer-motion'
import { EnvelopeIcon, ChatBubbleOvalLeftIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How does the AI detection work?",
    answer: "Our AI uses advanced computer vision to detect your pet's face and body position, ensuring you capture the perfect moment when they're looking at the camera."
  },
  {
    question: "What sounds are included?",
    answer: "We offer a curated library of pet-tested sounds, from treat bag rustles to squeaky toys. Premium users get access to our full collection of 100+ sounds."
  },
  {
    question: "Can I use it with multiple pets?",
    answer: "Yes! The app works great with multiple pets and can even detect different types of animals in the same shot."
  }
]

const Contact = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Need Help?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is here to help you capture the perfect pet photos
            </p>
          </div>

          {/* Support Options */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <motion.a
              href="mailto:support@petportrait.app"
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col items-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-indigo-100 transition-colors">
                <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
                Get help within 24 hours
              </p>
              <span className="text-sm sm:text-base text-indigo-600 font-medium">
                support@petportrait.app
              </span>
            </motion.a>

            <motion.a
              href="#chat"
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col items-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-indigo-50 p-3 sm:p-4 rounded-xl mb-3 sm:mb-4 group-hover:bg-indigo-100 transition-colors">
                <ChatBubbleOvalLeftIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4">
                Chat with our support team
              </p>
              <span className="text-sm sm:text-base text-indigo-600 font-medium">
                Available 9am - 5pm EST
              </span>
            </motion.a>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <QuestionMarkCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
              <h3 className="text-lg sm:text-xl font-semibold">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-lg sm:rounded-xl"
                >
                  <summary className="list-none cursor-pointer">
                    <div className="flex items-center justify-between p-3 sm:p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                      <span className="font-medium text-base sm:text-lg pr-8">{faq.question}</span>
                      <span className="text-indigo-600 transform group-open:rotate-180 transition-transform text-sm sm:text-base">
                        ▼
                      </span>
                    </div>
                  </summary>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                </details>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 