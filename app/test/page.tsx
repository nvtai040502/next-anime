import MediaBanner from "@/components/banner/media";
import GenreCard from "@/components/cards/genre";
import ReviewCard from "@/components/cards/review";
import CharactersCarousel from "@/components/carousel/characters";
import MediaListBodyCarousel from "@/components/carousel/media-list/body";
import { Description } from "@/components/description";
import MediaBodyPage from "@/components/pages/media/body";
import MediaHeroPage from "@/components/pages/media/hero";
import Ranking from "@/components/ranking";
import { Separator } from "@/components/ui/separator";
import WatchOrReadNowButton from "@/components/watch-read-now";
import { getCharacters, getFewReviewsMedia, getMedia, getMediaTrend, getRelatedMedia } from "@/lib/anilist";
import { ReviewSorting } from "@/lib/constants";
import Image from "next/image";
import { notFound } from "next/navigation";

const TestPage = async () => {
  const media = await getMedia("21087")
  if (!media) return notFound()
  const characters = await getCharacters({mediaId: media.id, sort: ["FAVOURITES"]})
  const relatedMedia = await getRelatedMedia(media.id)
  return ( 
    <>
  <MediaHeroPage />
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
  <MediaListBodyCarousel mediaList={relatedMedia} title="Hello" />
  <CharactersCarousel characters={characters}/>

  <MediaBodyPage mediaId={media.id}/>

</section>
    </>

   );
}
 
export default TestPage;