"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnilistMedia } from "@/types/anilist";
import { selectCoverImage, selectTitleMedia } from "@/lib/utils";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import GenreCard from "../cards/genre";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "../page-header";

export default function MediaHero({ media }: { media: AnilistMedia }) {
  const [isOpen, setIsOpen] = useState(false);
  const image = selectCoverImage(media.coverImage)
  const title = selectTitleMedia(media.title)
  return (
    <div className="relative aspect-[1/1] md:aspect-[4/2] lg:aspect-[16/6] border-b border-zinc-800">
      {image ? (
        
        <Image
          className="w-full h-full object-cover"
          src={media.coverImage.extraLarge}
          alt={title} 
          width={1280}
          height={720}

        />
      ) : (
        <div className="w-full h-full bg-zinc-900" />
      )}
      <div className="absolute inset-0 bg-zinc-700 mix-blend-multiply" />
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="px-global h-full flex flex-col justify-between md:justify-center">
          <button
            className="flex items-center justify-center text-7xl w-full my-auto md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Icons.add />
            <span className="sr-only">Watch Trailer</span>
          </button>
          <div>
              {/* <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl md:text-5xl lg:text-6xl line-clamp-2">
                {title}
              </h1> */}
            <PageHeaderHeading>
              <Link href={`info/${media.id}`}> {title} </Link>
            </PageHeaderHeading>
            <PageHeaderDescription className="line-clamp-3">{media.description}</PageHeaderDescription>
            <PageHeaderDescription className="flex gap-2 mt-2">
              {media.genres.map((genre, i) => (
                <GenreCard genre={genre} key={i}/>
              ))}
            </PageHeaderDescription>
            <PageActions>
              <Button
                className="mt-4 lg:text-xl hidden md:flex px-4 py-6 rounded-lg"
                size="lg"
              >
                <Icons.add className="mr-2 h4 w-4"/>
                <span>Watch Trailer</span>
              </Button>
              <Button
              className="mt-4 lg:text-xl hidden md:flex px-4 py-6 rounded-lg"
              size="lg"
              variant="outline"
            >
              <Icons.add className="mr-2 h4 w-4"/>
              <span>Store</span>
            </Button>
            </PageActions>          
            

                
          </div>
        </div>
      </div>
    </div>
  );
}