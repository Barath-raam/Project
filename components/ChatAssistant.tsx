import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { chatWithAssistant } from '../services/geminiService';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string, text: string}[]>([
    { role: 'model', text: 'Namaste! I am your travel assistant. How can I help you plan your trip to India?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      // Pass recent history for context
      const response = await chatWithAssistant(newMessages.slice(-10), input);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-orange-600 rounded-full shadow-lg shadow-orange-600/40 flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[90vw] md:w-[380px] h-[500px] flex flex-col border border-gray-200 dark:border-gray-700 animate-fade-in-up overflow-hidden transition-colors">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Yatra Sahayak</h3>
                <p className="text-[10px] text-orange-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gray-900 dark:bg-orange-600 text-white rounded-br-none' 
                    : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl rounded-bl-none p-3 shadow-sm">
                   <div className="flex gap-1">
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                   </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about trains, food, safety..."
                className="flex-1 bg-transparent outline-none text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button onClick={handleSend} disabled={!input.trim() || loading} className="text-orange-600 dark:text-orange-400 hover:text-orange-700 disabled:opacity-50">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};