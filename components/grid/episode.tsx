import { AnilistEpisode } from "@/types/anilist";
import EpisodeCard from "../cards/episode";

const EpisodeGrid = ({episodes}:{episodes:AnilistEpisode[]}) => {
  return ( 
    <section className="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {episodes.map((episode, i) => (
          <EpisodeCard episode={episode} key={i}/>
        ))}
      </div>
    </section>
   );
}
 
export default EpisodeGrid;