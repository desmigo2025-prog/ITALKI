import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Background soft gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-6 border border-brand-blue/20">
              #1 Language Learning Marketplace
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6"
          >
            Speak Any Language <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Confidently
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Learn faster with 1-on-1 lessons from certified teachers and real native speakers worldwide — anytime, anywhere.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-xl shadow-gray-900/20 text-lg group"
            >
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-100 flex items-center justify-center gap-2 hover:border-gray-200 hover:bg-gray-50 transition-colors text-lg"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              Try a Free Lesson
            </motion.button>
          </motion.div>
        </div>

        {/* Visual / Image block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative w-full max-w-[600px] lg:max-w-none"
        >
          {/* Abstract representation of a video call grid */}
          <div className="relative rounded-[2rem] bg-white p-4 shadow-2xl shadow-brand-blue/10 border border-gray-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] rounded-[1.5rem] bg-gray-100 overflow-hidden relative isolate">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800" alt="Student" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                 <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white text-white flex items-center justify-center text-[10px] font-bold">US</span>
                    <span className="text-white font-medium text-sm">Sarah</span>
                 </div>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="rounded-[1.5rem] bg-gray-100 overflow-hidden relative isolate">
                   <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=400&h=400" alt="Teacher" className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                   <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-500 border-2 border-white text-white flex items-center justify-center text-[9px] font-bold">ES</span>
                      <span className="text-white font-medium text-xs">Carlos (Pro)</span>
                   </div>
                </div>
                <div className="rounded-[1.5rem] bg-gray-100 overflow-hidden relative isolate">
                   <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400" alt="Teacher 2" className="absolute inset-0 w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-bold text-gray-900">Connecting...</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -left-8 top-1/4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-2xl">👋</div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Spanish Lesson</p>
                <p className="font-bold text-gray-900">"¡Hola! ¿Cómo estás?"</p>
              </div>
            </motion.div>

            <motion.div 
               animate={{ y: [10, -10, 10] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
               className="absolute -right-6 bottom-1/4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
            >
               <div className="flex -space-x-2">
                 <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="" />
                 <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="" />
               </div>
               <div>
                  <p className="font-bold text-gray-900 leading-tight">4.9/5</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Teacher Rating</p>
               </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
