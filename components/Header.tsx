import React from 'react';
import { MapPin, Compass, Search, Calendar, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onHome: () => void;
  onExplore: () => void;
  onPlan: () => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHome, onExplore, onPlan, darkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={onHome} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-orange-200 dark:group-hover:shadow-none transition-all">
            <Compass size={24} className="animate-pulse" />
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-serif font-bold text-gray-800 dark:text-white tracking-tight transition-colors">
              Incredible<span className="text-orange-600">India</span>.AI
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold transition-colors">Smart Travel Assistant</span>
          </div>
        </button>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 items-center">
            <button 
              onClick={onExplore}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <MapPin size={16} /> Destinations
            </button>
            <button 
              onClick={onPlan}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1"
            >
              <Calendar size={16} /> Plan Trip
            </button>
            <button className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">About</button>
          </nav>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        
          <div className="md:hidden flex items-center gap-4">
             <button onClick={onExplore}><Search size={20} className="text-gray-600 dark:text-gray-300" /></button>
             <button onClick={onPlan}><Calendar size={20} className="text-gray-600 dark:text-gray-300" /></button>
          </div>
        </div>
      </div>
    </header>
  );
};