import EpisodeCard from "@/components/cards/episode";
import { getEpisodes } from "@/lib/anify";
import { getCharacters, getFranchise } from "@/lib/anilist";
import { getAnimeInfo, getRecentEpisodes } from "@/lib/consumet";
import { Media } from "@/types/anilist";
import Image from "next/image";
import { notFound } from "next/navigation";

const EpisodesTabPage = async ({
  media
}: {
  media: Media
}) => {
  // const episodes = await getEpisodes({animeId: media.id, providerId: "gogoanime"})
  // if (!episodes) return null
  // console.log(episodes)
  return ( 
    <>
    <section className="">
      {/* <div className="grid grid-cols-5">
        {animeInfo.episodes.map((episode) => (
          <EpisodeCard episode={episode} key={episode.id}/>
        ))}
      </div>
       */}
    </section>
  </>
   );
}
 
export default EpisodesTabPage;