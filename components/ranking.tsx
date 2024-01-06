import { MediaRank, MediaRankType } from "@/types/anilist";

const Ranking = ({mediaRankList}: {mediaRankList: MediaRank[]}) => {
  const rankingsAllTime = mediaRankList.filter((item) => item.allTime === true);
  const rankingPopular = rankingsAllTime.find((item) => item.type === "POPULAR")
  const rankingRated = rankingsAllTime.find((item) => item.type === "RATED")
  return ( 
    <>
    <div>
      Top {rankingPopular?.rank}% {rankingPopular?.context}
    </div>
    <div>
      Top {rankingRated?.rank}% {rankingRated?.context}
    </div>
    
    </>
   );
}
 
export default Ranking;