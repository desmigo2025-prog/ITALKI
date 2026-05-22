import { motion } from 'motion/react';
import { Menu } from 'lucide-react';
import ItalkiLogo from './ItalkiLogo';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo relative wrapper for clickable area */}
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <ItalkiLogo className="w-[100px]" />
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#teachers" className="hover:text-brand-blue transition-colors">Find a teacher</a>
          <a href="#community" className="hover:text-brand-blue transition-colors">Community</a>
          <a href="#how" className="hover:text-brand-blue transition-colors">How it works</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-5 py-2.5 font-medium text-gray-600 hover:text-brand-blue transition-colors">
            Log in
          </button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-brand-blue text-white font-semibold rounded-full shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-dark transition-colors"
          >
            Sign up
          </motion.button>
        </div>

        <button className="md:hidden p-2 text-gray-600">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
