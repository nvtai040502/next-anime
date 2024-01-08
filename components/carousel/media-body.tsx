"use client"
import * as React from "react"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Media, PageInfo } from "@/types/anilist"
import { MediaCardBody } from "@/components/cards/media-body"

export async function MediaListBodyCarousel({
  mediaListPromise
}: {
  mediaListPromise: Promise<{
    pageInfo: PageInfo
    media: Media[]
  }>
}) {
  const {media: mediaList} = await mediaListPromise
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {mediaList.map((media, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <MediaCardBody media={media}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
