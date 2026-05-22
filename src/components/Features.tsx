import { motion } from 'motion/react';
import { BadgeCheck, Calendar, MessageCircle, Laptop, Settings2 } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: "Certified professional teachers",
    desc: "Learn from qualified educators who know how to accelerate your progress."
  },
  {
    icon: Calendar,
    title: "Flexible scheduling (24/7)",
    desc: "Book lessons whenever it fits your lifestyle. Midnight or 6 AM, there's a teacher available."
  },
  {
    icon: MessageCircle,
    title: "Real conversation practice",
    desc: "Build muscle memory for language, not just academic knowledge."
  },
  {
    icon: Settings2,
    title: "Personalized learning plans",
    desc: "Your teacher designs a curriculum based on your interests, level, and goals."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square md:aspect-[4/3] lg:aspect-square rounded-[3rem] bg-indigo-50 p-8 pt-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 blur-3xl rounded-full" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 blur-3xl rounded-full" />
               
               <div className="relative h-full w-full bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden">
                  {/* Mock UI */}
                  <div className="border-b border-gray-100 p-4 flex items-center justify-between bg-gray-50/50">
                    <div className="flex items-center gap-3">
                       <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=40&h=40" className="w-10 h-10 rounded-full object-cover" alt="" />
                       <div>
                         <p className="font-bold text-sm">Carlos M.</p>
                         <p className="text-xs text-gray-500">Professional Teacher</p>
                       </div>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Available Now</div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col gap-4">
                     <div className="bg-blue-50 text-blue-900 p-4 rounded-xl rounded-tl-sm self-start max-w-[80%] text-sm">
                        Hola! I see you want to focus on conversational Spanish for your trip?
                     </div>
                     <div className="bg-gray-100 text-gray-900 p-4 rounded-xl rounded-tr-sm self-end max-w-[80%] text-sm">
                        Yes! I struggle with ordering food and asking for directions.
                     </div>
                     <div className="bg-blue-50 text-blue-900 p-4 rounded-xl rounded-tl-sm self-start max-w-[80%] text-sm relative">
                        Perfect. I'll prepare some role-play scenarios for us. We'll have you speaking confidently in no time!
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-sm p-1 border border-gray-100 text-xs">💪</div>
                     </div>
                  </div>
                  
                  <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2">
                     <div className="flex-1 bg-white border border-gray-200 rounded-full h-10" />
                     <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center">
                        <Laptop className="w-5 h-5" />
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Our community of dedicated educators provides the tools, patience, and expertise to guide you to fluency.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
               {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                     <div className="w-12 h-12 bg-indigo-50 text-brand-purple rounded-xl flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                     <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
