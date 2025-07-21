import React from 'react';

export const SimpleMacbook = ({ title }) => {
  return (
    <div className="flex min-h-screen items-center justify-center py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          {title || "Simple MacBook Test"}
        </h2>
        <div className="w-64 h-40 bg-gray-800 rounded-lg mx-auto">
          <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-white">MacBook Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};