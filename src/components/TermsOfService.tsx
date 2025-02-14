"use client"
import { motion } from 'framer-motion'

const TermsOfService = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Sign Up Terms</h2>
          
          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold mb-4">Authentication Messages</h3>
              <p className="mb-4">
                When you sign up or log in, we will send a verification code to your phone number. 
                By providing your phone number, you consent to receive these authentication messages. 
                These messages are essential for account security and verification purposes.
              </p>

              <h3 className="text-xl font-semibold mb-4">Important Information</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Message and data rates may apply</li>
                <li>One verification code will be sent per login/signup attempt</li>
                <li>Your phone number will only be used for account authentication</li>
                <li>We do not share your phone number with third parties</li>
              </ul>

              <div className="mt-6 p-4 bg-white rounded border border-slate-200">
                <p className="text-sm text-slate-600">
                  By continuing with phone verification, you agree to receive authentication messages 
                  from PetPortrait. For account support, please contact support@petportrait.app
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TermsOfService 