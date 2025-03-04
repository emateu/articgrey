import React, {useState} from 'react';
import {Card, CardContent} from './card';
import {Button} from './button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';

interface IngredientProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const LeafIcon = (props: {bgColor?: string; fgColor?: string}) => (
  <div className="w-8 h-8 rounded-full flex items-center justify-center">
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="25" fill={props.bgColor ?? '#252A2F'} />
      <g clipPath="url(#clip0_10435_4920)">
        <path
          d="M25.5168 14.5723H24.4857V28.9676H25.5168V14.5723Z"
          fill={props.fgColor ?? '#FFED92'}
        />
        <path
          d="M13.9334 26.4238L13.2043 27.1528L21.7838 35.7322L22.5128 35.0032L13.9334 26.4238Z"
          fill={props.fgColor ?? '#FFED92'}
        />
        <path
          d="M36.0661 26.4212L27.478 35.0093L28.2071 35.7383L36.7952 27.1502L36.0661 26.4212Z"
          fill={props.fgColor ?? '#FFED92'}
        />
        <path
          d="M25.0012 29.483C24.8889 29.483 24.7767 29.4465 24.6833 29.3733C24.6393 29.3389 23.5941 28.5143 22.5395 27.1788C21.1212 25.3827 20.3715 23.5123 20.3715 21.7698C20.3715 20.0273 21.1212 18.157 22.5395 16.3608C23.5941 15.0253 24.6393 14.2008 24.6833 14.1663C24.87 14.0201 25.1324 14.0201 25.319 14.1663C25.363 14.2008 26.4082 15.0253 27.4628 16.3608C28.8812 18.157 29.6309 20.0274 29.6309 21.7698C29.6309 23.5123 28.8812 25.3827 27.4628 27.1788C26.4082 28.5143 25.363 29.3389 25.319 29.3733C25.2257 29.4464 25.1134 29.483 25.0012 29.483ZM25.0012 15.2494C24.0678 16.0817 21.4025 18.7255 21.4025 21.7698C21.4025 24.8142 24.0676 27.4578 25.0012 28.2902C25.9346 27.4579 28.5998 24.8142 28.5998 21.7698C28.5998 18.7255 25.9347 16.0819 25.0012 15.2494Z"
          fill={props.fgColor ?? 'white'}
        />
        <path
          d="M21.0621 35.9366C19.5282 35.9366 16.8074 35.6596 15.0422 33.8944C12.5245 31.3767 13.0343 26.9147 13.0572 26.726C13.0858 26.4906 13.2714 26.3051 13.5068 26.2765C13.6955 26.2535 18.1575 25.7437 20.6752 28.2614C23.1929 30.7791 22.6831 35.2412 22.6602 35.4299C22.6316 35.6653 22.446 35.8508 22.2106 35.8794C22.1543 35.8863 21.7159 35.9366 21.0621 35.9366ZM14.0496 27.2687C13.994 28.3754 14.0191 31.4133 15.7712 33.1654C17.523 34.9172 20.5606 34.9426 21.6679 34.8871C21.7235 33.7804 21.6983 30.7425 19.9462 28.9904C18.1944 27.2386 15.1569 27.2134 14.0496 27.2687Z"
          fill={props.fgColor ?? 'white'}
        />
        <path
          d="M28.9304 35.943C28.2756 35.943 27.8371 35.8925 27.7806 35.8857C27.5452 35.8571 27.3597 35.6716 27.3311 35.4362C27.3081 35.2472 26.7978 30.7809 29.3179 28.2609C31.838 25.7408 36.3043 26.2511 36.4931 26.274C36.7286 26.3026 36.9141 26.4882 36.9427 26.7236C36.9656 26.9125 37.476 31.3788 34.9559 33.8989C33.1892 35.6656 30.4658 35.943 28.9304 35.943ZM28.3234 34.8934C29.4309 34.949 32.4726 34.9241 34.2269 33.1698C35.9811 31.4156 36.0061 28.3742 35.9504 27.2663C34.8429 27.2107 31.8012 27.2356 30.047 28.9899C28.2928 30.7441 28.2677 33.7855 28.3234 34.8934Z"
          fill={props.fgColor ?? 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_10435_4920">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(13 13)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
);

export const BlendFeature = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-white font-medium">{title}</span>
  </div>
);

export const IngredientCard = ({title, description, icon}: IngredientProps) => (
  <div className="p-6 bg-white rounded-sm">
    <div className="flex flex-col gap-3">
      <div className="flex justify-start">{icon || <LeafIcon />}</div>
      <h3 className="font-bold text-left">{title}</h3>
      <p className="text-gray-600 text-sm text-left">{description}</p>
    </div>
  </div>
);

export const CustomizedProteinPowder = () => {
  const products = [
    {
      id: 1,
      name: 'Whey Protein Isolate',
      image: '/assets/supplements/C.png',
      blendFeatures: [
        {title: 'Whey Based', icon: <LeafIcon />},
        {title: 'Build Muscle', icon: <LeafIcon />},
        {title: 'Clean Ingredients', icon: <LeafIcon />},
      ],
      ingredients: [
        {
          title: 'Whey Protein Isolate',
          description:
            'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
        },
        {
          title: 'Whey Protein Isolate',
          description:
            'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
        },
        {
          title: 'Whey Protein Isolate',
          description:
            'Low Calorie With Virtually No Fat or Lactose, Quickly Absorbed To Maximize Muscle Building & Repair.',
        },
      ],
    },
    {
      id: 2,
      name: 'Plant-Based Protein',
      image: '/assets/supplements/B.png',
      blendFeatures: [
        {title: 'Vegan', icon: <LeafIcon />},
        {title: 'Digestive Support', icon: <LeafIcon />},
        {title: 'Organic Ingredients', icon: <LeafIcon />},
      ],
      ingredients: [
        {
          title: 'Pea Protein Isolate',
          description:
            'Complete amino acid profile, easily digestible, and helps with muscle recovery and growth.',
        },
        {
          title: 'Brown Rice Protein',
          description:
            'High in branched-chain amino acids (BCAAs), supporting muscle development and repair.',
        },
        {
          title: 'Hemp Protein',
          description:
            'Rich in omega-3 fatty acids and fiber, supporting heart health and digestive function.',
        },
      ],
    },
    {
      id: 3,
      name: 'Performance Blend',
      image: '/assets/supplements/D.png',
      blendFeatures: [
        {title: 'Mixed Protein', icon: <LeafIcon />},
        {title: 'Enhanced Recovery', icon: <LeafIcon />},
        {title: 'Sustained Release', icon: <LeafIcon />},
      ],
      ingredients: [
        {
          title: 'Whey Protein Concentrate',
          description:
            "Fast-acting protein that's quickly absorbed by the body for immediate muscle support.",
        },
        {
          title: 'Micellar Casein',
          description:
            'Slow-digesting protein that provides a steady release of amino acids for extended recovery.',
        },
        {
          title: 'Egg Albumin',
          description:
            'Medium-digesting protein with an excellent amino acid profile for complete nutrition.',
        },
      ],
    },
  ];

  return (
    <div className="bg-[#f6f6f5]">
      <div className="container mx-auto py-12 ">
        <div className="text-center mb-10">
          <p className="text-base mb-2">Simple & Effective Ingredients</p>
          <h1 className="text-4xl font-bold">Customized Protein Powder</h1>
        </div>

        <div className="max-w-xxl px-30">
          <Carousel className="relative">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id}>
                  <div className="overflow-hidden rounded-sm border-1">
                    <div className="grid md:grid-cols-2 justify-stretch">
                      {/* Product Image Section */}
                      <div className="p-8 flex items-center justify-center bg-white border-r">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full h-auto"
                        />
                      </div>

                      {/* Product Info Section */}
                      <div className="flex flex-col text-center bg-white">
                        {/* The Blend Section */}
                        <div className="bg-[#1D2024] text-white p-8 ">
                          <h2 className="text-2xl font-bold mb-6">The Blend</h2>
                          <div className="flex flex-wrap gap-6 justify-center">
                            {product.blendFeatures.map((feature, index) => (
                              <BlendFeature
                                key={index}
                                title={feature.title}
                                icon={feature.icon}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Active Ingredients Section */}
                        <div className="p-8">
                          <h2 className="text-2xl font-light mb-6">
                            Active Ingredients
                          </h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {product.ingredients.map((ingredient, index) => (
                              <IngredientCard
                                key={index}
                                title={ingredient.title}
                                description={ingredient.description}
                                icon={
                                  <LeafIcon
                                    bgColor={'#f6f6f5'}
                                    fgColor={'#000'}
                                  />
                                }
                              />
                            ))}
                          </div>
                        </div>

                        {/* Call-to-Action Button */}
                        <div className="p-6">
                          <Button className="w-full py-6 text-lg font-medium">
                            Customize This Blend
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div
              className="absolute left-0 right-0 flex justify-between"
              style={{top: '50%'}}
            >
              <CarouselPrevious className="relative border border-gray-300 rounded-full" />
              <CarouselNext className="relative border border-gray-300 rounded-full" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
