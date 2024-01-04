import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import { cn, selectCoverImage, selectTitleMedia } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Eye } from "lucide-react";

import { useState, useEffect } from 'react'
import { PlaceholderImage } from "../placeholder-image";
import { Media } from "@/types/anilist";
 
  
interface MediaCardBodyProps {
  media: Media
}
export function MediaCardBody({media}: MediaCardBodyProps) {
  const coverImage = selectCoverImage(media.coverImage)
  const title = selectTitleMedia(media.title)
  return (
    <Card>
      <Link href={`/info/${media.id}`}>
        <CardHeader className="p-0">
          <AspectRatio ratio={4 / 3}>
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
              />
            ) : (
              <PlaceholderImage className="rounded-none" asChild />
            )}
          
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{title}</span>
        <CardContent className="space-y-1.5 p-4 ">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <CardDescription>{media.type}</CardDescription>
          {/* <CardDescription>{anime.streamingEpisodes[0].title}</CardDescription> */}


        </CardContent>
      </Link>
      
    </Card>

  )
}