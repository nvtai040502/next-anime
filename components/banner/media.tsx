import React from 'react';

import { Media } from '@/types/anilist';
import BannerImage from './image';
import Image from 'next/image';

function MediaBanner({
  media,
  children,
}: {
  media: Media;
  children?: React.ReactNode;
}): JSX.Element | null {
  if (!media) return null;

  return (
    <>
      

      <BannerImage background={media?.bannerImage}>
          <div className='w-screen mx-auto max-w-[1140px] grid grid-cols-2 md:grid-cols-3 md:justify-items-start justify-items-center'>
          {children}
        </div>
        
      </BannerImage>
    </>
  );
}

MediaBanner.Title = function MediaBannerTitle({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <h1 className="m-0 text-5xl text-red-700 z-10">{children}</h1>;
};

MediaBanner.PosterImage = function MediaBannerPosterImage({
  source,
}: {
  source: string;
}) {
  return <Image src={source} alt='' className=" aspect-square justify-end max-w-screen-80 m-2 rounded-md opacity-30" width={180} height={180}/>;
};
MediaBanner.Subtitle = function MediaBannerSubtitle({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <span className="opacity-70 transition-opacity duration-250">{children}</span>;
};




export default MediaBanner;