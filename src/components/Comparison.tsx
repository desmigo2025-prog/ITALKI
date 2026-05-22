import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            There is a better way to learn
          </h2>
          <p className="text-lg text-gray-600">
            See how italki stacks up against traditional methods and robotic apps.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-4 gap-4 mb-4 items-end px-6">
              <div className="col-span-1"></div>
              <div className="text-center font-bold text-gray-400 pb-2">Language Apps</div>
              <div className="text-center font-bold text-gray-400 pb-2">Traditional Classes</div>
              <div className="text-center bg-brand-blue text-white py-4 rounded-t-2xl font-bold text-xl relative overflow-hidden">
                 {/* Shine effect */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                 italki
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              {[
                { label: "Real speaking practice", apps: false, school: true, italki: true },
                { label: "1-on-1 personalized feedback", apps: false, school: false, italki: true },
                { label: "Learn anytime, anywhere", apps: true, school: false, italki: true },
                { label: "Native speaker teachers", apps: false, school: "Sometimes", italki: true },
                { label: "Cost-effective", apps: true, school: false, italki: true },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-4 items-center border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <div className="p-6 font-medium text-gray-900">{row.label}</div>
                  
                  <div className="p-6 flex justify-center text-gray-400">
                    {row.apps === true ? <CheckCircle2 className="w-6 h-6 text-gray-400" /> : row.apps === false ? <XCircle className="w-6 h-6 text-gray-300 opacity-50" /> : <span className="text-sm font-medium">{row.apps}</span>}
                  </div>
                  
                  <div className="p-6 flex justify-center text-gray-400">
                    {row.school === true ? <CheckCircle2 className="w-6 h-6 text-gray-400" /> : row.school === false ? <XCircle className="w-6 h-6 text-gray-300 opacity-50" /> : <span className="text-sm font-medium">{row.school}</span>}
                  </div>
                  
                  <div className="p-6 flex justify-center bg-brand-blue/[0.03]">
                    {row.italki === true ? <CheckCircle2 className="w-6 h-6 text-brand-blue" /> : <span className="text-sm font-bold text-brand-blue">{row.italki}</span>}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
