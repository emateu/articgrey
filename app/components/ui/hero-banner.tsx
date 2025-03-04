import React from 'react';

export const HeroBanner = () => {
  return (
    <div className="relative w-full max-w-xxl mx-auto aspect-[1520/750] overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full aspect-[1520/750]">
        <img
          src="/assets/pics/e4c9683702294b62e03a4063cd120030.png"
          alt="Person in a Plunge tub in the desert"
          className="absolute aspect-[1520/750]"
          style={{
            objectFit: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-gray-950 opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          The Next Generation is Here
        </h1>
        <p className="text-xl text-white mb-8">
          Innovative Engineering. Intelligent Design. Meet The Plunge All-I.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-100">
            Take The Plunge
          </button>
          <button className="px-6 py-3 border border-white text-white font-medium rounded hover:bg-white/10">
            Dive Deeper
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
