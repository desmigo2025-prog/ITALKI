import { Globe, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import ItalkiLogo from './ItalkiLogo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <ItalkiLogo className="w-[110px]" />
            </a>
            <p className="mb-6 max-w-sm text-sm">
              italki is a global language learning community that connects students and teachers for 1-on-1 online language lessons.
            </p>
            <div className="flex gap-4">
               <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
               <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
               <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
               <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Learn</h4>
             <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Find a Teacher</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Language Tests</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business</a></li>
             </ul>
          </div>
          
          <div>
             <h4 className="text-white font-bold mb-4">About</h4>
             <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-4">Download App</h4>
             <div className="space-y-3">
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2 text-left flex items-center gap-3 transition-colors border border-gray-700">
                   {/* Apple icon placeholder */}
                   <span className="text-xl"></span>
                   <div className="flex flex-col">
                      <span className="text-[10px] leading-tight">Download on the</span>
                      <span className="font-bold text-sm leading-tight">App Store</span>
                   </div>
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2 text-left flex items-center gap-3 transition-colors border border-gray-700">
                   {/* Android icon placeholder */}
                   <span className="text-xl text-green-500">▶</span>
                   <div className="flex flex-col">
                      <span className="text-[10px] leading-tight">GET IT ON</span>
                      <span className="font-bold text-sm leading-tight">Google Play</span>
                   </div>
                </button>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
           <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           </div>
           
           <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
              <Globe className="w-4 h-4" />
              <select className="bg-transparent text-white border-none outline-none text-sm pr-2">
                 <option value="en">English (US)</option>
                 <option value="es">Español</option>
                 <option value="fr">Français</option>
              </select>
           </div>
        </div>
      </div>
    </footer>
  );
}
