import React from 'react';
import { ArrowRight, Map, ShieldCheck, Leaf } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" 
          alt="Taj Mahal India" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6 text-white animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full w-fit border border-white/30">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide">AI-Powered Travel Planning</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            Discover the Soul of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">India</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-lg font-light">
            Experience personalized itineraries, cultural insights, and sustainable travel routes powered by advanced AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={onStart}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-500/30 transform hover:-translate-y-1"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 border-t border-white/20 pt-8">
            <div className="flex flex-col gap-2">
              <Map className="text-orange-300" size={24} />
              <span className="text-sm font-medium">Smart Itineraries</span>
            </div>
            <div className="flex flex-col gap-2">
              <ShieldCheck className="text-blue-300" size={24} />
              <span className="text-sm font-medium">Safety Alerts</span>
            </div>
            <div className="flex flex-col gap-2">
              <Leaf className="text-green-300" size={24} />
              <span className="text-sm font-medium">Eco-Tourism</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};