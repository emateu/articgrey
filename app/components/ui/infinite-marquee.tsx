import React, { useEffect, useRef } from 'react';

function InfiniteMarquee() {
  const features = [
    "High Quality Ingredients",
    "Independently Certified",
    "Expert Driven",
    "Shipped Internationally"
  ];

  // Create a repeated array for the continuous effect
  const repeatedFeatures = [...features, ...features, ...features];
  const marqueeRef = useRef(null);

  return (
    <div className="w-full bg-black text-white py-2 overflow-hidden">
      <div className="flex whitespace-nowrap" style={{ animation: "scroll 120s linear infinite" }}>
        {repeatedFeatures.map((feature, index) => (
          <div key={index} className="flex items-center min-w-max pl-4 pr-8">
            <span className="mr-2">★</span>
            <span className="whitespace-nowrap font-medium">{feature}</span>
          </div>
        ))}
        {repeatedFeatures.map((feature, index) => (
          <div key={`index-${index}`} className="flex items-center min-w-max pl-4 pr-8">
            <span className="mr-2">★</span>
            <span className="whitespace-nowrap font-medium">{feature}</span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}

export { InfiniteMarquee };
