import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import {Link} from '@remix-run/react';

export function TrendingCarousel() {
  const supplements = [
    {
      id: 1,
      name: 'Omega-3',
      description: 'Cognitive Health & Foundational Health',
      price: 49.95,
      discountedPrice: 39.96,
      image: '/assets/supplements/A.png',
      isBestseller: true,
      tags: ['GMO Free', 'Gluten Free'],
    },
    {
      id: 2,
      name: 'Magnesium L-Threonate',
      description: 'Enhances the quality of sleep.',
      price: 49.95,
      image: '/assets/supplements/B.png',
      isBestseller: false,
      tags: ['GMO Free', 'Gluten Free'],
    },
    {
      id: 3,
      name: 'Grass Fed Whey Protein Isolate Powder',
      description: 'Supports muscle mass and strength',
      price: 49.95,
      image: '/assets/supplements/C.png',
      isBestseller: false,
      tags: ['GMO Free', 'Vegan', 'Dairy Free'],
    },
    {
      id: 4,
      name: 'Complete Sleep Bundle',
      description: 'Deepens sleep cycles for rejuvenated mornings',
      price: 49.95,
      image: '/assets/supplements/D.png',
      isBestseller: true,
      tags: ['Gluten Free', 'Vegan', 'Dairy Free'],
    },
  ];

  return (
    <div className="bg-[#F6F6F5] py-6">
      <div className="max-w-xxl mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-6">
          <div className="flex flex-col items-center ">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400">✨</span>
              <span className="text-sm font-medium">Trending</span>
            </div>
            <h2 className="text-3xl font-bold">Supplements</h2>
            <Link
              to="/view-all"
              className="text-sm font-medium hover:underline"
            >
              View All
            </Link>
          </div>
        </div>

        <Carousel className="w-full">
          <div className="relative h-0">
            <div className="absolute -top-10 right-0 flex items-center justify-end gap-2 mb-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </div>

          <CarouselContent>
            {[...supplements, ...supplements].map((product, idx) => (
              <CarouselItem
                key={idx}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4"
              >
                <div className="bg-white rounded-lg h-full flex justify-between flex-col overflow-hidden border border-gray-200">
                  {product.isBestseller && (
                    <div className="bg-yellow-200 text-yellow-800 text-xs font-medium px-2 py-1 w-fit rounded-sm ml-4 mt-4">
                      Bestseller
                    </div>
                  )}

                  <div className="p-4 flex justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 object-contain"
                    />
                  </div>

                  <div className="p-4">
                    <div className="flex gap-2 mb-2 space-x-0.5">
                      {product.tags.map((tag, index) => (
                        <div
                          key={tag}
                          className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 w-fit rounded-sm"
                        >
                          <span className="mr-1">•</span>
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>

                    <div className="flex items-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <button className="bg-gray-900 text-white rounded p-2 text-sm w-full">
                      Add • ${product.price}
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
