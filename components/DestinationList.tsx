import React from 'react';
import { Destination } from '../types';
import { Calendar, MapPin, Star } from 'lucide-react';

interface DestinationListProps {
  destinations: Destination[];
  onSelect: (dest: Destination) => void;
  onBack: () => void;
}

export const DestinationList: React.FC<DestinationListProps> = ({ destinations, onSelect, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <button onClick={onBack} className="mb-8 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium flex items-center gap-2 transition-colors">
          &larr; Change Preferences
        </button>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4 transition-colors">Top Recommended Destinations</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">Based on your preferences, our AI has selected these incredible Indian destinations for your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-none dark:border dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col group"
              onClick={() => onSelect(dest)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${dest.imageUrlSeed}/800/600`} 
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-green-700 dark:text-green-400 shadow-sm flex items-center gap-1">
                  <Star size={14} className="fill-green-700 dark:fill-green-400" /> {dest.matchScore}% Match
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <h3 className="text-white text-2xl font-bold font-serif">{dest.name}</h3>
                  <p className="text-white/80 flex items-center gap-1 text-sm"><MapPin size={14} /> {dest.state}</p>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{dest.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.slice(0, 3).map((tag, i) => (
                    <span key={i} className="bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs px-2 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Calendar size={14} /> Best time: {dest.bestTime}
                  </div>
                  <button className="text-orange-600 dark:text-orange-400 font-semibold text-sm group-hover:underline">
                    View Itinerary &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};