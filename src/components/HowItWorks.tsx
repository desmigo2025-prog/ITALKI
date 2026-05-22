import { motion } from 'motion/react';
import { Search, CalendarHeart, Mic2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "1. Choose your language & teacher",
    desc: "Watch introductory videos, read reviews, and find a teacher whose style matches yours."
  },
  {
    icon: CalendarHeart,
    title: "2. Book your lesson at a time that suits you",
    desc: "Teachers from all over the world mean there's always someone available when you are."
  },
  {
    icon: Mic2,
    title: "3. Start speaking confidently",
    desc: "Connect via italki Classroom or Skype. Practice speaking and get instant feedback."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="how">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              How to start your journey
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
              Three simple steps to break the language barrier and connect with the world.
            </p>

            <div className="space-y-10">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex gap-6 relative"
                >
                  {/* Timeline connector */}
                  {idx !== steps.length - 1 && (
                     <div className="absolute top-14 bottom-0 left-7 w-[2px] bg-gray-800 -mb-10" />
                  )}
                  
                  <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-gray-900">
                    <step.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-brand-teal/20 isolate">
              <img src="https://images.unsplash.com/photo-1515378960530-7c0da6229678?auto=format&fit=crop&q=80&w=1000&h=800" alt="Student learning online" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                 <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-lg">Next Lesson: French</p>
                      <p className="text-brand-teal font-medium">Starts in 15 mins</p>
                    </div>
                    <button className="bg-brand-teal text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-white transition-colors">
                      Enter Classroom
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
