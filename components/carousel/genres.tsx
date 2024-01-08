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
import GenreCard from "../cards/genre"

export async function GenresCarousel({
  genresPromise
}: {
  genresPromise: Promise<string[]>
}) {
  const genres = await genresPromise
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {genres.map((genre, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <GenreCard genre={genre}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
