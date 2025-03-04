import React, {useEffect, useState, useRef} from 'react';
import {CarouselApi, Carousel, CarouselContent, CarouselItem} from './carousel';
import {Link} from '@remix-run/react';
import {cn} from '../../lib/utils';

function InfiniteVideoCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const testimonials = [
    {
      id: 1,
      video: '/assets/testimonials/-46be-4abb-a537-bca74f36620b.mp4',
      product: {
        name: 'Magnesium L-Threonate',
        price: 49.95,
        image: '/assets/supplements/A.png',
      },
    },
    {
      id: 2,
      video: '/assets/testimonials/-61dd-45dc-96ec-34c9d5e96e27.mp4',
      product: {
        name: 'Magnesium L-Threonate',
        price: 49.95,
        image: '/assets/supplements/D.png',
      },
    },
    {
      id: 3,
      video: '/assets/testimonials/-5975-42db-b6b9-f4ec19c2db5d.mp4',
      product: {
        name: 'Magnesium L-Threonate',
        price: 49.95,
        image: '/assets/supplements/A.png',
      },
    },
    {
      id: 4,
      video: '/assets/testimonials/-b4e0-4ff1-b497-9ddb3e7b4fc0.mp4',
      product: {
        name: 'Magnesium L-Threonate',
        price: 49.95,
        image: '/assets/supplements/A.png',
      },
    },
    {
      id: 5,
      video: '/assets/testimonials/-bb38-4e5f-8d0e-3748404fcf3e.mp4',
      product: {
        name: 'Magnesium L-Threonate',
        price: 49.95,
        image: '/assets/supplements/A.png',
      },
    },
    {
      id: 6,
      video: '/assets/testimonials/-46be-4abb-a537-bca74f36620b.mp4', // Reusing first video
      product: {
        name: 'Complete Sleep Bundle',
        price: 89.95,
        image: '/assets/supplements/B.png',
      },
    },
    {
      id: 7,
      video: '/assets/testimonials/-5975-42db-b6b9-f4ec19c2db5d.mp4', // Reusing third video
      product: {
        name: 'Protein Powder',
        price: 59.95,
        image: '/assets/supplements/C.png',
      },
    },
  ];

  // Handle video playback based on current slide
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const newCurrent = api.selectedScrollSnap();
      setCurrent(newCurrent);

      // Pause all videos
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
        }
      });

      // Play only the current video
      const currentVideo = videoRefs.current[newCurrent];
      if (currentVideo) {
        currentVideo.play();
      }
    };

    api.on('select', handleSelect);

    // Initial setup
    const currentVideo = videoRefs.current[current];
    if (currentVideo) {
      currentVideo.play();
    }

    return () => {
      api.off('select', handleSelect);
    };
  }, [api, current]);

  return (
    <div className="bg-[#F6F6F5]">
      <div className="max-w-xxl mx-auto py-16 overflow-hidden ">
        <div className="text-center mb-2 relative">
          <p className="text-sm font-medium mb-2">
            Trusted & Proven by Science
          </p>
          <div className="flex items-center justify-center">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-100"
              onClick={() => api?.scrollPrev()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 6L9 12L15 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 className="text-4xl font-bold mb-2 px-16">
              Real People. Real Results.
            </h2>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-gray-100"
              onClick={() => api?.scrollNext()}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <Link to="/products/all" className="text-sm hover:underline">
            View All
          </Link>
        </div>

        <div
          className="relative mt-12 overflow-hidden"
          style={{
            width: 'calc(100% + 80px)',
            marginLeft: '-40px',
            marginRight: '-40px',
          }}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: 'center',
              loop: true,
              dragFree: true,
            }}
          >
            <CarouselContent className="pt-10">
              {testimonials.map((testimonial, index) => {
                const isActive = current === index;
                return (
                  <CarouselItem
                    key={testimonial.id}
                    className={cn('pl-4 md:basis-1/5 relative')}
                  >
                    <div
                      className={cn(
                        'overflow-hidden rounded-lg h-[400px]',
                      )}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={testimonial.video}
                        loop
                        playsInline
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={(e) => {
                          e.currentTarget.muted = !e.currentTarget.muted;
                        }}
                        muted
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <div className="w-12 h-12 flex-shrink-0">
                        <img
                          src={testimonial.product.image}
                          alt={testimonial.product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-grow">
                        <h3 className="font-medium text-sm">
                          {testimonial.product.name}
                        </h3>
                        <p className="text-sm">
                          ${testimonial.product.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
                        aria-label="Add to cart"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 4V20M4 12H20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export {InfiniteVideoCarousel};
