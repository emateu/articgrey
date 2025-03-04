import React from 'react';

function BrandTrustBanner() {
  const mediaLogos = [
    {id: 1, name: 'Rolling Stone', alt: 'Rolling Stone logo'},
    {id: 2, name: "Men's Journal", alt: "Men's Journal logo"},
    {id: 3, name: 'LA Weekly', alt: 'LA Weekly logo'},
    {id: 4, name: 'Herb', alt: 'Herb logo'},
    {id: 5, name: 'The New York Times', alt: 'The New York Times logo'},
    {id: 6, name: 'BBC News', alt: 'BBC News logo'},
    {id: 7, name: 'Rolling Stone', alt: 'Rolling Stone logo'},
    {id: 8, name: "Men's Journal", alt: "Men's Journal logo"},
  ];

  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="max-w-xxl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Doctor Recommended & Reviews */}
          <div className="flex flex-col mb-6 md:mb-0">
            <div>
              <div className="inline-block bg-white rounded-full px-4 py-2 border border-gray-300 mb-3">
                <span className="font-bold text-gray-800">
                  #1 Doctor Recommended
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-700 font-medium">
                12,000+ 5-star Reviews
              </span>
            </div>
          </div>

          {/* Media Logos */}
          <div className="flex flex-wrap justify-center gap-2">
            {mediaLogos.map((logo, idx) => (
              <div
                key={logo.id}
                className="w-[120px] h-[40px] flex items-center justify-center bg-white rounded-md"
              >
                <img
                  src={`/assets/logos/${idx + 1}.svg`}
                  alt={logo.alt}
                  className="object-fit w-[100px] h-[18px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export {BrandTrustBanner};
