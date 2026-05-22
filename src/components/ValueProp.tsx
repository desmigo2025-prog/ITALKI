import { Users, UserSquare2, CreditCard, GlobeIcon } from 'lucide-react';
import { motion } from 'motion/react';

const props = [
  {
    icon: Users,
    title: "Learn with real humans",
    desc: "Move beyond robotic app exercises. Master nuances, slang, and cultural context."
  },
  {
    icon: UserSquare2,
    title: "1-on-1 personalized",
    desc: "Your teacher focuses entirely on your goals, correcting your mistakes in real-time."
  },
  {
    icon: CreditCard,
    title: "Flexible pricing",
    desc: "Pay per lesson. No subscriptions, no hidden fees, just pure learning."
  },
  {
    icon: GlobeIcon,
    title: "150+ languages",
    desc: "From Spanish to Swahili, find native speakers for almost any language."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white relative z-10" id="why-italki">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Why choose <span className="text-brand-blue">italki?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Language apps can only get you so far. Real fluency happens when you speak with real people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-brand-blue">
                <prop.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">{prop.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
