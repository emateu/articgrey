import React from 'react';
import {Button} from './button';
import {Card, CardContent, CardFooter, CardHeader} from './card';
import {Badge} from './badge';
import {Tabs, TabsContent, TabsList, TabsTrigger} from './tabs';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel';
import {Star} from 'lucide-react';
import {items} from './__fixtures__/bundle-page';

// Types
export interface BundleProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  rating: number;
  isNew?: boolean;
  isBestseller?: boolean;
  category: string;
}

// Components
export const ProductBadge = ({type}: {type: string}) => (
  <span className="inline-flex items-center gap-1 mr-2">
    <span className="w-2 h-2 bg-black rounded-full" />
    <span className="text-sm">{type}</span>
  </span>
);

export const Rating = ({score}: {score: number}) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
);

export const BundleCard = ({bundle}: {bundle: BundleProps}) => (
  <Card className="flex flex-col h-full">
    <CardHeader className="relative p-4 pb-0">
      {bundle.isBestseller && (
        <Badge
          variant="outline"
          className="absolute left-4 top-4 bg-yellow-100 border-yellow-200 text-yellow-800"
        >
          Bestseller
        </Badge>
      )}
      {bundle.isNew && (
        <Badge
          variant="outline"
          className="absolute right-4 top-4 bg-yellow-100 border-yellow-200 text-yellow-800"
        >
          New
        </Badge>
      )}
      <div className="aspect-square w-full flex items-center justify-center p-6">
        <img
          src={bundle.image}
          alt={bundle.title}
          className="h-full object-contain"
        />
      </div>
    </CardHeader>
    <CardContent className="flex-grow p-4 pt-2">
      <div className="flex flex-wrap mb-2">
        {bundle.tags.map((tag) => (
          <ProductBadge key={tag} type={tag} />
        ))}
      </div>
      <h3 className="text-lg font-bold mb-1">{bundle.title}</h3>
      <p className="text-sm text-gray-600">{bundle.description}</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center p-4 pt-0">
      <Rating score={bundle.rating} />
      <Button
        variant="default"
        className="bg-black hover:bg-gray-800 text-white"
      >
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
);

// Data
const bundles: BundleProps[] = items;

// Main Component
export const BundlesCarousel = () => {
  const categories = [
    'Sleep',
    'Cognitive Function',
    'Foundational Health',
    'Athletic Performance',
    'Hormone Support',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="Sleep">
        <div className="flex items-center justify-center mb-8">
          <div className="mr-12">
            <div className="flex items-center mb-1">
              <div className="mr-2">📦</div>
              <h2 className="text-sm font-medium">Goals Specific</h2>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold">Bundles</h1>
            </div>
          </div>
          <TabsList className="flex w-full justify-start">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="py-1 px-0 mx-3 data-[state=active]:border-b-1 data-[state=active]:border-black rounded-none"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent
            key={category}
            value={category}
            className="mt-0 relative"
          >
            <Carousel className="w-full">
              <div className="absolute right-0 top-[-60px] flex z-10">
                <div className="flex items-center">
                  <Button variant="link" className="mr-4">
                    View All Bundles
                  </Button>
                </div>
                <CarouselPrevious className="static mr-2 transform-none" />
                <CarouselNext className="static transform-none" />
              </div>

              <CarouselContent>
                {bundles
                  .filter((bundle) => bundle.category === category)
                  .map((bundle) => (
                    <CarouselItem
                      key={bundle.title}
                      className="basis-full md:basis-1/2 lg:basis-1/4 pl-4"
                    >
                      <BundleCard bundle={bundle} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
