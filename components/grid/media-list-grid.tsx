import * as React from "react"
import { Media, MediaSort, MediaType } from "@/types/anilist"
import { MediaCardBody } from "../cards/media-body"

interface MediaListGridProps {
  mediaList: Media[]
}

export async function MediaListGrid({
  mediaList
}: MediaListGridProps) {
  
  if (!mediaList.length) return null
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {mediaList.map((item) => (
          <MediaCardBody media={item} key={item.id}/>
        ))}
      </div>
    </section>
  )
}