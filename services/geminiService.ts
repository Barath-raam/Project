import { GoogleGenAI, Type } from "@google/genai";
import { UserPreferences, GeminiDestinationResponse, GeminiItineraryResponse } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = "gemini-2.5-flash";

export const getTravelRecommendations = async (prefs: UserPreferences): Promise<GeminiDestinationResponse> => {
  const prompt = `
    Act as an expert travel guide for India. 
    Based on the following user preferences, recommend 3 distinct travel destinations in India.
    
    Preferences:
    - Budget Level: ${prefs.budget}
    - Interests: ${prefs.interests.join(", ")}
    - Duration: ${prefs.duration} days
    - Group Type: ${prefs.travelers}

    For each destination, provide a match score (1-100) based on how well it fits the interests.
    Include a seed keyword for an image search (e.g., "Taj Mahal", "Kerala Backwaters").
    Focus on promoting regional tourism and hidden gems if applicable.
  `;

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          destinations: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                state: { type: Type.STRING },
                description: { type: Type.STRING },
                highlights: { type: Type.ARRAY, items: { type: Type.STRING } },
                bestTime: { type: Type.STRING },
                matchScore: { type: Type.INTEGER },
                imageUrlSeed: { type: Type.STRING }
              },
              required: ["name", "state", "description", "highlights", "bestTime", "matchScore", "imageUrlSeed"]
            }
          }
        }
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from Gemini");
  return JSON.parse(text) as GeminiDestinationResponse;
};

export const getDetailedItinerary = async (destinationName: string, prefs: UserPreferences): Promise<GeminiItineraryResponse> => {
  const prompt = `
    Create a detailed ${prefs.duration}-day travel itinerary for ${destinationName}, India.
    The user is traveling as a ${prefs.travelers} with a ${prefs.budget} budget.
    Interests: ${prefs.interests.join(", ")}.

    Include:
    1. A daily breakdown with specific activities (morning, afternoon, evening).
    2. A sustainable/eco-tourism tip for each day to support the "Incredible India" mission.
    3. A general weather forecast estimation for the current season.
    4. A specific cultural note or festival info relevant to the region.
  `;

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          itinerary: {
            type: Type.OBJECT,
            properties: {
              destination: { type: Type.STRING },
              weatherForecast: { type: Type.STRING },
              culturalNote: { type: Type.STRING },
              days: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    day: { type: Type.INTEGER },
                    title: { type: Type.STRING },
                    sustainableTip: { type: Type.STRING },
                    activities: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          time: { type: Type.STRING },
                          activity: { type: Type.STRING },
                          type: { type: Type.STRING, enum: ["food", "sightseeing", "culture", "relax"] }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from Gemini");
  return JSON.parse(text) as GeminiItineraryResponse;
};

export const chatWithAssistant = async (history: {role: string, text: string}[], message: string): Promise<string> => {
  // Simple stateless chat for the demo, or we could use chat session
  // Using generateContent for single turn logic with history context manually injected if needed
  // But for a true chat experience, let's use the chat API properly.
  
  const chat = ai.chats.create({
    model: MODEL_NAME,
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    })),
    config: {
      systemInstruction: "You are 'YatraSahayak', a helpful AI travel assistant for Indian Tourism. You help tourists with quick facts, safety tips, and translations. Keep answers concise.",
    }
  });

  const result = await chat.sendMessage({ message });
  return result.text || "I'm having trouble connecting to the travel network right now.";
};
