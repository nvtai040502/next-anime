import { CharacterCard } from "@/components/cards/character";
import GenreCard from "@/components/cards/genre";
import ReviewCard from "@/components/cards/review";
import CharactersCarousel from "@/components/carousel/characters";
import MediaListBodyCarousel from "@/components/carousel/media-list/body";
import { Description } from "@/components/description";
import Ranking from "@/components/ranking";
import { Separator } from "@/components/ui/separator";
import WatchOrReadNowButton from "@/components/watch-read-now";
import { getCharacters, getFranchise, getReviews } from "@/lib/anilist";
import { MAX_ITEMS_CAROUSEL_BODY, MAX_ITEMS_FOR_PREVIEW } from "@/lib/constants";
import { Media } from "@/types/anilist";
import Image from "next/image";

const SummaryTabPage = async ({
  media
}: {
  media: Media
}) => {
  const franchise = await getFranchise({mediaId: media.id})
  const {reviews: fewReviews} = await getReviews({mediaId: media.id, page: 1, perPage: MAX_ITEMS_FOR_PREVIEW, sort: ["RATING"]})
  const {characters: fewCharacters} = await getCharacters({mediaId: media.id, page: 1, perPage: MAX_ITEMS_CAROUSEL_BODY, sort: ["FAVOURITES_DESC"]})
  return ( 
    <>
    <section className="">
      <div className="flex gap-4 justify-center bg-red-500">
        <div className="">
          <div className=" w-56 h-72 relative">
            <Image src={media.coverImage.extraLarge} alt="" fill className="object-cover"/>
          </div>
        </div>
        <div>
          <WatchOrReadNowButton mediaId={String(media.id)} mediaType={media.type}/>
        </div>
      </div>
    </section>

    <Separator className="my-2" />

    <section className="bg-yellow-500">
      <div className="flex">
        <h1> {media.title.english } </h1>
        <span> {media.startDate.year} </span>

      </div>

      <Description text={media.description} />
      
      {media.genres.map((genre, i) => (
        <GenreCard genre={genre} key={i}/>
      ))}

      <Ranking mediaRankList={media.rankings}/>

      {/* Media Details */}
      <div>
        <h1>Anime details</h1>
        <p> {media.title.english} </p>
        <p> {media.title.romaji} </p>
        <p> {media.title.native} </p>
        <p> status: {media.status} </p>
        <p> season {media.season} {media.seasonYear}</p>
        <p> duration {media.duration}</p>
        <p> episodes {media.episodes}</p>
      </div>
      <MediaListBodyCarousel mediaList={franchise.slice(0, MAX_ITEMS_CAROUSEL_BODY)} 
      title="Hello" />
      <div>
        {fewReviews.map((review) => (
          <ReviewCard review={review} key={review.id}/>
        ))}
      </div>
      <div>
        <CharactersCarousel characters={fewCharacters}/>
      </div>
    </section>
  </>
   );
}
 
export default SummaryTabPage;