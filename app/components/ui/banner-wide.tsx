import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {Link} from '@remix-run/react';
import {cn} from '~/lib/utils';
import {Button} from './button';

const bannerWideVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-red-500',
      },
      size: {
        default: 'h-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function BannerWide({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof bannerWideVariants>) {
  return (
    <div
      className={cn(
        'relative w-full aspect-[1] md:aspect-[1600/600]',
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0">
        <video
          src="/hero-video.mp4"
          autoPlay={true}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="absolute bottom-0 left-0 text-white w-full">
        <div className="max-w-xxl mx-auto py-14 px-5">
          <div className="text-[70px] font-bold  text-white max-w-[840px] text-shadow leading-[1.2] mb-8">
            Great things never came from comfort zones.
          </div>
          <Button
            asChild
            className="text-sm bg-white text-black w-[160px] h-[50px] uppercase font-bold"
          >
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export {BannerWide, bannerWideVariants};
