import React from 'react';
import { FullItinerary } from '../types';
import { Sun, Coffee, Camera, BookOpen, Moon, Leaf, AlertCircle } from 'lucide-react';

interface ItineraryViewProps {
  itinerary: FullItinerary;
  onReset: () => void;
}

export const ItineraryView: React.FC<ItineraryViewProps> = ({ itinerary, onReset }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-8 pb-24 transition-colors duration-300">
      {/* Hero Header for Destination */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-xl dark:shadow-none dark:border dark:border-gray-700 overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
           <img 
            src={`https://picsum.photos/seed/${itinerary.destination}/1200/600`} 
            alt={itinerary.destination} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col text-center p-4">
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-2">{itinerary.destination}</h1>
             <div className="flex flex-wrap gap-4 justify-center mt-4">
               <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-white/30">
                 <Sun size={16} className="text-yellow-300" /> {itinerary.weatherForecast}
               </span>
               <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-white/30">
                 <BookOpen size={16} className="text-orange-300" /> Cultural Insight
               </span>
             </div>
          </div>
        </div>
        
        <div className="p-6 bg-orange-50 dark:bg-orange-900/20 border-b border-orange-100 dark:border-orange-900/30">
          <p className="text-orange-900 dark:text-orange-200 italic text-center font-serif text-lg">"{itinerary.culturalNote}"</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        {itinerary.days.map((day, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors">
             <div className="bg-gray-900 dark:bg-black text-white p-4 flex justify-between items-center">
                <h3 className="font-bold text-xl font-serif">Day {day.day}: {day.title}</h3>
             </div>
             
             <div className="p-6">
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-3.5 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 before:content-['']">
                   {day.activities.map((act, idx) => (
                     <div key={idx} className="relative pl-10">
                        <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center z-10
                          ${act.type === 'food' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400' : 
                            act.type === 'sightseeing' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' : 
                            act.type === 'culture' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400' : 
                            'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
                        >
                          {act.type === 'food' && <Coffee size={14} />}
                          {act.type === 'sightseeing' && <Camera size={14} />}
                          {act.type === 'culture' && <BookOpen size={14} />}
                          {act.type === 'relax' && <Moon size={14} />}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-1">{act.time}</span>
                          <p className="text-gray-800 dark:text-gray-200 font-medium">{act.activity}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-lg p-4 flex items-start gap-3">
                   <Leaf className="text-green-600 dark:text-green-400 shrink-0 mt-1" size={20} />
                   <div>
                     <h4 className="font-bold text-green-800 dark:text-green-300 text-sm">Sustainable Travel Tip</h4>
                     <p className="text-green-700 dark:text-green-400 text-sm">{day.sustainableTip}</p>
                   </div>
                </div>
             </div>
          </div>
        ))}
      </div>

      {/* Alert Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4 flex items-center gap-3">
         <AlertCircle className="text-blue-500 dark:text-blue-400 shrink-0" />
         <p className="text-sm text-blue-800 dark:text-blue-300">
           Real-time alerts: Road conditions in this region are currently good. Always carry bottled water and ID proof.
         </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-center z-40 md:hidden">
         <button onClick={onReset} className="w-full bg-gray-900 dark:bg-black text-white py-3 rounded-lg font-semibold">Plan New Trip</button>
      </div>
      
       <div className="mt-12 text-center hidden md:block">
         <button onClick={onReset} className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-black dark:hover:bg-gray-600 transition-colors">
           Plan Another Journey
         </button>
      </div>
    </div>
  );
};