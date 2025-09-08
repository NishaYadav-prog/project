import React, { useState } from "react";
import { MessageCircle } from "lucide-react"; // icon library

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-violet-600 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-72 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-violet-600 text-white px-4 py-2 font-semibold">
            Chatbot
          </div>

          {/* Messages Area */}
          <div className="p-3 h-60 overflow-y-auto text-sm text-neutral-700 dark:text-neutral-200">
            <p className="mb-2">👋 Hello! How can I help you?</p>
          </div>

          {/* Input Area */}
          <div className="p-2 border-t border-gray-200 dark:border-neutral-700 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-2 py-1 border rounded-lg text-sm outline-none"
            />
            <button className="ml-2 bg-violet-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-violet-700 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
