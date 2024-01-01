import React, { Suspense } from "react";
import { getMedia, getPage } from "@/lib/anilist";
import { PER_PAGE, defaultSort, sorting } from "@/lib/constants";
import { AnimeList } from "@/components/animeList";
import { searchParamsSchema } from "@/lib/validations/params";
import { PaginationButton } from "@/components/pagination-button";
import { type Option } from 'artplayer/types/option';
import { getEpisodes, getEpisodesWithProviderId, getSources } from "@/lib/anify";
import Player from "@/components/player";
import Artplayer from "artplayer";


interface HomePageProps {
  searchParams: {

  }
}
export default async function HomePage({
  searchParams
}:HomePageProps
) {
    // const params = searchParamsSchema.parse(searchParams)
    // const { sortKey } = sorting.find((item) => item.slug === params.sort) || defaultSort;
    // const page = await getPage({
    //   sort: sortKey,
    //   page: params.page,
    //   perPage: PER_PAGE
    // })
    
    const episodes = await getEpisodes({animeId: "21087", providerId:"gogoanime"})
    const sources_ep1 = await getSources({watchId: episodes[0].id, providerId: "gogoanime", episodeNumber: episodes[0].number, mediaId: "21087"})
    console.log(sources_ep1)
    const source = sources_ep1?.sources.find((item) => item.quality === "720p")
    return (
      <div>
      {sources_ep1 ? (
        <Player
          anifySources={sources_ep1}
          option={{
              url:source?.url!
          }}
          style={{
              width: '600px',
              height: '400px',
              margin: '60px auto 0',
          }}
        />
      ): (
        <div>
          Hello
        </div>
      )}
      
  </div>
    );
}