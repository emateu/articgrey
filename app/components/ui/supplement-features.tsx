import React from 'react';

function SupplementFeatures() {
  const features = [
    {
      id: 1,
      icon: 'thumbs-up',
      title: 'We Make It Easy',
      description:
        'Personalized Solutions & Guidance Mean You Get Just What You Need Nothing More',
    },
    {
      id: 2,
      icon: 'leaf',
      title: 'Clean & Effective',
      description:
        'Proven Ingredients, not Artificial, Crafted By Experts For Optimal Effectiveness',
    },
    {
      id: 3,
      icon: 'dietitian',
      title: 'Your Free Dietitian',
      description:
        'Every Gainful Subscriber Gets Free, 1:1 Access Their Own Registered Dietitian.',
    },
    {
      id: 4,
      icon: 'customize',
      title: 'Made For You',
      description:
        'Performance is Personal. Personalized & Customizable Products For Your Needs, Body & Goals',
    },
  ];

  // Function to render the appropriate icon based on the feature
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'thumbs-up':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M7.24 2h-.75a2.25 2.25 0 00-2.25 2.25v7.5a2.25 2.25 0 002.25 2.25h.75v5.25H4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-3.75v-5.25h.75a2.25 2.25 0 002.25-2.25v-7.5A2.25 2.25 0 0015.75 2h-.75a2.25 2.25 0 00-2.25 2.25v.75h-3.75v-.75A2.25 2.25 0 006.74 2z" />
          </svg>
        );
      case 'leaf':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M15 22.5c-3.75 0-6.75-3-6.75-6.75 0-3.75 3-6.75 6.75-6.75V4.5c-6.75 0-12 5.25-12 12s5.25 12 12 12H22.5v-6h-7.5z" />
          </svg>
        );
      case 'dietitian':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.5 12c0 1.2-.39 2.25-1.04 3.15l2.29 2.29c1.37-1.56 2.25-3.57 2.25-5.79C23 6.92 19.07 3 14.25 3c-2.37 0-4.5.93-6.06 2.43l2.25 2.25c.9-.63 1.95-1.02 3.15-1.02C16.74 6.66 19.5 9 19.5 12zm-14.61-1.23c-.15.39-.24.81-.24 1.23 0 1.8 1.44 3.24 3.24 3.24 1.8 0 3.24-1.44 3.24-3.24 0-1.8-1.44-3.24-3.24-3.24-.48 0-.87.09-1.23.24L4.31 6.57C5.25 5.56 6.62 4.89 8.15 4.89c2.7 0 4.89 2.19 4.89 4.89s-2.19 4.89-4.89 4.89c-2.7 0-4.89-2.19-4.89-4.89 0-1.53.69-2.88 1.76-3.82L4.36 5.35c-1.1 1.29-1.78 2.96-1.78 4.78 0 4.1 3.32 7.42 7.42 7.42 4.1 0 7.42-3.32 7.42-7.42 0-4.1-3.32-7.42-7.42-7.42-1.82 0-3.49.66-4.78 1.74l1.74 1.74z" />
          </svg>
        );
      case 'customize':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-3.75 13.5h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5zm0-3h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5zm0-3h-7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xxl mx-auto px-4 py-16">
      <div className="text-left mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🙂</span>
          <p className="text-sm font-semibold">Why Health & Fitness</p>
        </div>
        <h2 className="text-4xl font-bold mb-4">
          Clean Supplements - <br />
          Made For You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.id} className="text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 text-white mb-4">
              {renderIcon(feature.icon)}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export {SupplementFeatures};
