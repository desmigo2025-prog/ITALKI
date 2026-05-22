import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-blue-dark">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-purple/30 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand-teal/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
            Start Speaking a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue-light">New Language Today</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of learners achieving their dreams of travel, a new career, or studying abroad. Your first lesson is waiting.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand-blue-dark font-bold rounded-full shadow-2xl hover:bg-gray-50 hover:shadow-white/10 transition-all text-lg flex items-center justify-center gap-2 group"
            >
              Join italki Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <p className="mt-8 text-sm text-blue-200 font-medium flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Thousands of learners join every day
          </p>
        </motion.div>
      </div>
    </section>
  );
}
