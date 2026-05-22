import { motion } from 'motion/react';
import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah, UK",
    role: "French Learner",
    quote: "I went from beginner to fluent in 6 months using italki! The 1-on-1 focus meant I couldn't hide, and my confidence skyrocketed.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Carlos, Spain",
    role: "English Learner",
    quote: "Best platform for speaking practice ever. I tried local academies and apps, but nothing beats talking to a real native speaker.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Yuki, Japan",
    role: "Spanish Learner",
    quote: "My teacher personalized every lesson to my slow pace. I actually look forward to my classes now. It feels like talking to a friend.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#F2F6FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Real stories, <span className="text-brand-purple">real fluency.</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join over 5 million learners who have discovered the fastest way to speak a new language.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <MessageSquareQuote className="absolute top-8 right-8 w-10 h-10 text-brand-blue/10" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => (
                   <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
