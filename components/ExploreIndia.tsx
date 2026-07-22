import React, { useState } from 'react';
import { indianStatesData } from '../data/statesData';
import { StateData, RegionType, TouristSpot } from '../types';
import { MapPin, ArrowLeft, Search, Compass, Mountain, Building, Leaf, Sun, LayoutGrid, List as ListIcon, ChevronDown, Camera, Sparkles } from 'lucide-react';

interface ExploreIndiaProps {
  onPlanTrip: () => void;
}

export const ExploreIndia: React.FC<ExploreIndiaProps> = ({ onPlanTrip }) => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<RegionType | 'All'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedStates, setExpandedStates] = useState<string[]>([]);

  const regions: RegionType[] = ['North', 'South', 'East', 'West', 'Central', 'North East', 'Union Territory'];

  const filteredStates = indianStatesData.filter(state => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = state.name.toLowerCase().includes(term) || 
                          state.cities.some(c => c.name.toLowerCase().includes(term) || c.spots.some(s => s.name.toLowerCase().includes(term)));
    const matchesRegion = selectedRegion === 'All' || state.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const toggleStateExpand = (stateName: string) => {
    setExpandedStates(prev => 
      prev.includes(stateName) ? prev.filter(n => n !== stateName) : [...prev, stateName]
    );
  };

  const getSpotColor = (type: string) => {
    switch (type) {
      case 'Heritage': return 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800';
      case 'Nature': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800';
      case 'Spiritual': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800';
      case 'Adventure': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Modern': return 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600';
    }
  };

  const getSpotIcon = (type: string) => {
    switch (type) {
      case 'Heritage': return <Building size={14} />;
      case 'Nature': return <Leaf size={14} />;
      case 'Spiritual': return <Sun size={14} />;
      case 'Adventure': return <Mountain size={14} />;
      case 'Modern': return <Camera size={14} />;
      case 'Culture': return <Compass size={14} />;
      default: return <Sparkles size={14} />;
    }
  };

  const SpotCard: React.FC<{ spot: TouristSpot }> = ({ spot }) => (
    <div className="bg-white dark:bg-gray-700/50 rounded-xl p-4 border border-gray-100 dark:border-gray-600 hover:shadow-md transition-all group h-full flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border flex items-center gap-1 ${getSpotColor(spot.type)}`}>
           {getSpotIcon(spot.type)} {spot.type}
        </span>
      </div>
      <h5 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{spot.name}</h5>
      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{spot.description}</p>
    </div>
  );

  // Detailed State View
  if (selectedState && viewMode === 'grid') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 animate-fade-in pb-20 transition-colors duration-300">
        <div className="relative h-[40vh] lg:h-[50vh] w-full">
          <img 
            src={`https://source.unsplash.com/1600x900/?${selectedState.imageUrl},India`} 
            alt={selectedState.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${selectedState.name}/1600/900`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 z-20">
            <button 
              onClick={() => setSelectedState(null)}
              className="bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all text-sm font-medium border border-white/20"
            >
              <ArrowLeft size={16} /> All States
            </button>
          </div>

          <div className="absolute bottom-0 left-0 p-6 lg:p-12 text-white w-full max-w-4xl">
             <div className="flex items-center gap-3 mb-4">
               <span className="bg-orange-500 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                 {selectedState.region} Region
               </span>
               <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border border-white/30">
                 {selectedState.cities.length} Cities
               </span>
             </div>
             <h1 className="text-4xl lg:text-7xl font-serif font-bold mb-4 tracking-tight">{selectedState.name}</h1>
             <p className="text-lg text-gray-200 font-light leading-relaxed">{selectedState.description}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center transition-colors">
               <div>
                 <h2 className="text-xl font-bold text-gray-900 dark:text-white">Explore Destinations</h2>
                 <p className="text-gray-500 dark:text-gray-400 text-sm">Key cities and attractions in {selectedState.name}</p>
               </div>
               <button 
                  onClick={onPlanTrip}
                  className="bg-gray-900 dark:bg-gray-700 text-white px-5 py-2.5 rounded-lg hover:bg-black dark:hover:bg-gray-600 transition-colors text-sm font-medium shadow-lg shadow-gray-200 dark:shadow-none flex items-center gap-2"
                >
                  <Compass size={16} /> Plan Trip Here
                </button>
            </div>

            {selectedState.cities.map((city, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors">
                <div className="p-6 border-b border-gray-50 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">{city.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{city.description}</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50/30 dark:bg-gray-800/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {city.spots.map((spot, sIdx) => (
                      <SpotCard key={sIdx} spot={spot} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-2 block">Incredible India</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4 transition-colors">Explore Every Corner</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg transition-colors">Discover the rich heritage, diverse culture, and breathtaking landscapes across all 28 States and 8 Union Territories.</p>
        </div>

        <div className="sticky top-20 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-8 transition-all">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-orange-500 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search state, city, or tourist spot..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:bg-white dark:focus:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-center">
              <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl transition-colors">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'grid' ? 'bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <LayoutGrid size={16} /> Grid
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                  <ListIcon size={16} /> List
                </button>
              </div>

              <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
                <button 
                  onClick={() => setSelectedRegion('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${selectedRegion === 'All' ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray