import React from 'react';


import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface BannerImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The background image to display. Defaults to a default banner image. */
  background: string
  /** Overrides the loading state of the image. Usually unnecessary. */
  children?: React.ReactNode;
  /** Classes which get applied to the container */
  className?: string
};

/**
 * Y'know those funny decorative images that show up at the top of a page? Those are banner images.
 * This component makes them easy and consistent across all pages, with a thin wrapper around the
 * Image component.
 *
 * Any children passed to this component will be rendered as an overlay, with a darkened background.
 * This is useful for displaying things like avatars, tab bars, etc.
 */
export default function BannerImage({
  background,
  children,
  className,
}: BannerImageProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={background}
        fill
        alt=""
        className="absolute inset-0 background z-[var(--layer-background)]"
        
      />
      <div
        className={cn("min-h-400 z-[var(--layer-base)] flex flex-col justify-end pt-20 md:pt-10", children ? "bg-[color:var(--banner-image-fade)]" : '')}>
          
        {children}
      </div>
    </div>
  );
}