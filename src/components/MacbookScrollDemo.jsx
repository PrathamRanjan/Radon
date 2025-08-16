import React from "react";
import { MacbookScroll } from "./MacbookScroll";

export function MacbookScrollDemo() {
  return (
    <div className="w-full min-h-screen bg-white pt-32 pb-20">
      {/* Title outside the container */}
      <div className="text-center mb-12">
        <span className="text-gray-900 text-5xl md:text-6xl font-bold">
          See our AI solutions <br /> 
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            in action
          </span>
        </span>
      </div>

      {/* Embedded scrollable container with hidden scrollbar */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden">
        <MacbookScroll
          title=""
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format&fm=jpg&q=60"
          showGradient={false}
        />
      </div>
    </div>
  );
}