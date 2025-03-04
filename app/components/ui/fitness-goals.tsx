import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function FitnessGoals() {
  const categories = [
    {
      id: 1,
      title: "Sleep",
      description: "Optimize your sleep patterns.",
      image: "/assets/goals/1.png",
      alt: "Person sleeping comfortably"
    },
    {
      id: 2,
      title: "Cognitive Function",
      description: "Enhance your brain's performance and connectivity",
      image: "/assets/goals/2.png",
      alt: "Person thinking or reading"
    },
    {
      id: 3,
      title: "Foundational Health",
      description: "Promoting healthy, natural deep sleep day to day",
      image: "/assets/goals/3.png",
      alt: "Person doing lunges in living room"
    },
    {
      id: 4,
      title: "Athletic Performance",
      description: "Increase your healthy tissue, muscle, and energy",
      image: "/assets/goals/4.png",
      alt: "Person doing pushups with kettlebells"
    },
    {
      id: 5,
      title: "Hormone Support",
      description: "Boost your mood, libido, and vitality",
      image: "/assets/goals/5.png",
      alt: "Person running outdoors"
    }
  ];

  return (
    <div className="max-w-xxl mx-auto py-12">
      {/* Divider with text */}
      <div className="relative flex justify-center mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-px h-full bg-blue-400 mx-auto"></div>
        </div>
        <div className="relative text-center">
          <div className="bg-white px-4">
            <p className="text-sm font-medium">COMFORTABLY UNCOMFORTABLE</p>
          </div>
        </div>
      </div>

      {/* Main heading */}
      <h2 className="text-4xl font-bold text-center mb-4">Start with your Goals</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We cannot become what we want to be by remaining what we are.
      </p>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="rounded-lg overflow-hidden">
            <div className="aspect-square w-full">
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="py-4">
              <div className="flex justify-between items-start">
                <div className="pr-4">
                  <h3 className="font-bold text-lg">{category.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
                <button className="rounded-full p-1 border border-gray-600 flex items-center justify-center">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { FitnessGoals }
