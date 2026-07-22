import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PreferencesForm } from './components/PreferencesForm';
import { DestinationList } from './components/DestinationList';
import { ItineraryView } from './components/ItineraryView';
import { ChatAssistant } from './components/ChatAssistant';
import { ExploreIndia } from './components/ExploreIndia';
import { UserPreferences, Destination, FullItinerary } from './types';
import { getTravelRecommendations, getDetailedItinerary } from './services/geminiService';

type ViewState = 'HERO' | 'PREFERENCES' | 'DESTINATIONS' | 'ITINERARY' | 'EXPLORE';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HERO');
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentItinerary, setCurrentItinerary] = useState<FullItinerary | null>(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleStart = () => {
    // If we already have destinations, don't ask questions again, go straight to results
    if (destinations.length > 0 && prefs) {
      setView('DESTINATIONS');
    } else {
      setView('PREFERENCES');
    }
  };

  const handlePlanTripClick = () => {
    // Smart navigation: If user has already planned a trip, show it.
    if (prefs && destinations.length > 0) {
      setView('DESTINATIONS');
    } else {
      setView('PREFERENCES');
    }
  };

  // Force reset allows user to plan a NEW trip
  const handleNewTrip = () => {
    setPrefs(null);
    setDestinations([]);
    setCurrentItinerary(null);
    setView('PREFERENCES');
  };

  const handlePreferenceSubmit = async (userPrefs: UserPreferences) => {
    setLoading(true);
    setPrefs(userPrefs);
    try {
      const data = await getTravelRecommendations(userPrefs);
      setDestinations(data.destinations);
      setView('DESTINATIONS');
    } catch (error) {
      console.error("Error fetching destinations:", error);
      alert("Failed to generate recommendations. Please check API Key or try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDestinationSelect = async (dest: Destination) => {
    if (!prefs) {
      // If user came from Explore view without prefs, create default prefs
      const defaultPrefs: UserPreferences = {
        budget: 'Standard',
        interests: ['Heritage & Culture', 'Nature & Wildlife'],
        duration: 5,
        travelers: 'Couple'
      };
      setPrefs(defaultPrefs);
      setLoading(true);
      try {
        const data = await getDetailedItinerary(dest.name, defaultPrefs);
        setCurrentItinerary(data.itinerary);
        setView('ITINERARY');
      } catch (error) {
        console.error("Error generating itinerary:", error);
        alert("Could not generate itinerary. Please try again.");
      } finally {
        setLoading(false);
      }
      return;
    }
    
    setLoading(true);
    try {
      // In a real app, we might cache this or pass data
      const data = await getDetailedItinerary(dest.name, prefs);
      setCurrentItinerary(data.itinerary);
      setView('ITINERARY');
    } catch (error) {
      console.error("Error generating itinerary:", error);
      alert("Could not generate itinerary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setView('HERO');
    // We do NOT clear data here so user can go back to "Plan Trip" and see previous results
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header 
        onHome={handleReset} 
        onExplore={() => setView('EXPLORE')}
        onPlan={handlePlanTripClick}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
        {view === 'HERO' && <Hero onStart={handleStart} />}
        
        {view === 'EXPLORE' && <ExploreIndia onPlanTrip={handleNewTrip} />}

        {view === 'PREFERENCES' && (
          <PreferencesForm 
            onSubmit={handlePreferenceSubmit} 
            onSkip={() => setView('EXPLORE')}
            isLoading={loading} 
          />
        )}
        
        {view === 'DESTINATIONS' && (
          <DestinationList 
            destinations={destinations} 
            onSelect={handleDestinationSelect} 
            onBack={handleNewTrip}
          />
        )}

        {view === 'ITINERARY' && currentItinerary && (
          <ItineraryView 
            itinerary={currentItinerary} 
            onReset={handleNewTrip} 
          />
        )}
      </main>

      {/* Global Chat Assistant available on all pages */}
      <ChatAssistant />

      {loading && (
        <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-[60] flex flex-col items-center justify-center transition-colors duration-300">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-200 animate-pulse">
            {view === 'DESTINATIONS' ? 'Crafting your detailed itinerary...' : 'Consulting AI Travel Expert...'}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Reviewing local festivals, weather, and routes...</p>
        </div>
      )}
    </div>
  );
};

export default App;