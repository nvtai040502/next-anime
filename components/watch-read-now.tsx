"use client"

import { getEpisodes } from "@/lib/anify";
import { MediaType } from "@/types/anilist";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { ProductCardSkeleton } from "./skeletons/hero";
import { AnimeCardSkeletion } from "./skeletons/anime-card";
import { getAnimeInfo, getMangaInfo } from "@/lib/consumet";

const WatchOrReadNowButton = ({mediaType, mediaId}: {mediaType: MediaType, mediaId: string}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  
  if (mediaType === "ANIME") {
    const [watchId, setWatchId] = useState<string>("")
    useEffect(() => {
      const fetchData = async () => {
        try {
          const animeInfo = await getAnimeInfo({animeId: mediaId})
          setWatchId(animeInfo!.episodes[0].id);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false)
        }
      };
  
      fetchData();
    }, [mediaId]);  
    
    return (
      <Link href={`/read/${watchId}/${mediaId}`}>
        <Button
          aria-label="Watch Now"
          className="h-auto gap-1.5 rounded"
          
        >
          <Icons.play
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          />
          Watch Now
        </Button>
      </Link>
    )
  } 

  if (mediaType === "MANGA") {
    const [readId, setReadId] = useState<string>("")
    useEffect(() => {
      const fetchData = async () => {
        try {
          const mangaInfo = await getMangaInfo({mangaId: mediaId})
          setReadId(mangaInfo!.chapters[0].id);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [mediaId]);  
    return (
      <Link href={`/read/${readId}/${mediaId}`}>
        <Button
          aria-label="Read Now"
          className="h-auto gap-1.5 rounded"
          
        >
          <Icons.play
            className="h-5 w-5 fill-current"
            aria-hidden="true"
          />
          Read Now
        </Button>
      </Link>
    )
  }
  if (isLoading) {
    return <AnimeCardSkeletion />
  }
}
 
export default WatchOrReadNowButton;