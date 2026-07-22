import React, { useState } from 'react';
import { UserPreferences, BudgetType, TravelerType } from '../types';
import { Coins, Users, Clock, Heart, Sparkles, SkipForward } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (prefs: UserPreferences) => void;
  onSkip: () => void;
  isLoading: boolean;
}

export const PreferencesForm: React.FC<PreferencesFormProps> = ({ onSubmit, onSkip, isLoading }) => {
  const [step, setStep] = useState(1);
  const [prefs, setPrefs] = useState<UserPreferences>({
    budget: 'Standard',
    interests: [],
    duration: 5,
    travelers: 'Couple',
  });

  const INTEREST_OPTIONS = [
    "Heritage & Culture", "Nature & Wildlife", "Spiritual & Pilgrimage", 
    "Adventure & Trekking", "Food & Culinary", "Wellness & Yoga", 
    "Beaches & Coastal", "Luxury & Palaces"
  ];

  const toggleInterest = (interest: string) => {
    setPrefs(prev => {
      if (prev.interests.includes(interest)) {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
      if (prev.interests.length >= 3) return prev; // Max 3
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = () => {
    onSubmit(prefs);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-orange-100/50 dark:from-orange-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-3xl w-full space-y-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white transition-colors">Let's Plan Your Perfect Trip</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-md mx-auto transition-colors">Tell us a bit about your preferences so our AI can craft a personalized itinerary just for you.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 transition-all relative border border-white/50 dark:border-gray-700 backdrop-blur-sm">
          {/* Skip Option */}
          <button 
            onClick={onSkip}
            className="absolute top-6 right-6 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-1.5 px-4 py-2 rounded-full hover:bg-orange-50 dark:hover:bg-gray-700 transition-all group"
          >
            Skip to Explore <SkipForward size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 mb-10 mt-10 md:mt-4 max-w-md mx-auto">
            <div 
              className="bg-gradient-to-r from-orange-500 to-orange-600 h-1.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>

          {step === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mb-4">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg text-orange-600 dark:text-orange-400"><Users size={20} /></div>
                  Who is traveling?
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {(['Solo', 'Couple', 'Family', 'Friends'] as TravelerType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setPrefs({ ...prefs, travelers: type })}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                        prefs.travelers === type 
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 shadow-sm' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-lg font-medium">{type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg text-green-600 dark:text-green-400"><Coins size={20} /></div>
                  What's your budget style?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {(['Budget', 'Standard', 'Luxury'] as BudgetType[]).map((type) => (
                    <button
                      key={type}
                      onClick={() => setPrefs({ ...prefs, budget: type })}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                        prefs.budget === type 
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 shadow-sm' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="text-lg font-medium">{type}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {type === 'Budget' ? 'Eco-friendly & Hostels' : type === 'Standard' ? 'Hotels & Comfort' : 'Resorts & Premium'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2 mb-2">
                  <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg text-red-600 dark:text-red-400"><Heart size={20} /></div>
                  What interests you?
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 ml-1">Select up to 3 interests to personalize your itinerary.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {INTEREST_OPTIONS.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-4 rounded-xl border text-sm font-medium transition-all text-left flex items-center justify-between group ${
                        prefs.interests.includes(interest)
                          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 shadow-sm'
                          : 'border-gray-200 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                      }`}
                    >
                      {interest}
                      {prefs.interests.includes(interest) ? (
                        <Sparkles size={16} className="text-orange-500" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-500 group-hover:border-orange-300"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8 animate-fade-in flex flex-col items-center py-8">
               <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                <Clock className="text-blue-500" /> How long is your trip?
              </h3>
              
              <div className="w-full max-w-md bg-gray-50 dark:bg-gray-700/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-600">
                 <div className="text-center mb-8">
                    <span className="text-7xl font-bold text-orange-500 font-serif">{prefs.duration}</span>
                    <span className="text-xl text-gray-500 dark:text-gray-400 font-medium ml-2">Days</span>
                 </div>
                 
                 <input 
                  type="range" 
                  min="2" 
                  max="15" 
                  value={prefs.duration} 
                  onChange={(e) => setPrefs({...prefs, duration: parseInt(e.target.value)})}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:accent-orange-600"
                />
                <div className="flex justify-between w-full mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
                  <span>Quick Trip (2d)</span>
                  <span>Grand Tour (15d)</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 flex justify-between pt-6 border-t border-gray-100 dark:border-gray-700">
            {step > 1 ? (
              <button 
                onClick={prevStep}
                className="px-6 py-3 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Back
              </button>
            ) : <div></div>}
            
            {step < 3 ? (
              <button 
                onClick={nextStep}
                className="px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-xl font-medium hover:bg-black dark:hover:bg-gray-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Next Step
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                disabled={isLoading || prefs.interests.length === 0}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold hover:shadow-orange-500/30 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                {isLoading ? 'Consulting AI...' : 'Generate My Plan'}
                {!isLoading && <Sparkles size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};