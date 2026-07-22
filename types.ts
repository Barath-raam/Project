export type BudgetType = 'Budget' | 'Standard' | 'Luxury';
export type TravelerType = 'Solo' | 'Couple' | 'Family' | 'Friends';

export interface UserPreferences {
  budget: BudgetType;
  interests: string[];
  duration: number;
  travelers: TravelerType;
}

export interface Destination {
  name: string;
  state: string;
  description: string;
  highlights: string[];
  bestTime: string;
  matchScore: number; // 1-100
  imageUrlSeed: string; // For placeholder generation
}

export interface ItineraryItem {
  time: string;
  activity: string;
  type: 'food' | 'sightseeing' | 'culture' | 'relax';
}

export interface DayPlan {
  day: number;
  title: string;
  activities: ItineraryItem[];
  sustainableTip: string;
}

export interface FullItinerary {
  destination: string;
  days: DayPlan[];
  weatherForecast: string;
  culturalNote: string;
}

// Gemini Schema Types
export interface GeminiDestinationResponse {
  destinations: Destination[];
}

export interface GeminiItineraryResponse {
  itinerary: FullItinerary;
}

// Explore Data Types
export interface TouristSpot {
  name: string;
  type: 'Heritage' | 'Nature' | 'Spiritual' | 'Modern' | 'Adventure' | 'Culture';
  description?: string;
}

export interface CityData {
  name: string;
  description: string;
  spots: TouristSpot[];
}

export type RegionType = 'North' | 'South' | 'East' | 'West' | 'Central' | 'North East' | 'Union Territory';

export interface StateData {
  name: string;
  region: RegionType;
  description: string;
  cities: CityData[];
  imageUrl: string; // Seed for unsplash
}