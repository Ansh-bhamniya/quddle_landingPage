'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Bubble Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent hover:bg-transparent rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <Image
            src="/parrot2.gif"
            alt="Chat"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover"
            priority
          />
        </button>
      </div>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md h-[80vh] max-h-[700px] m-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2 transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Chat iframe */}
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/cN65c7g2nzi5JbQss-gSu"
              width="100%"
              style={{ height: '100%', minHeight: '70px' }}
              frameBorder="0"
              className="rounded-lg"
              title="Chat Assistant"
            />
          </div>
        </div>
      )}
    </>
  );
}
