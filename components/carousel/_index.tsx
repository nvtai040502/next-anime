import { Character, Media, PageInfo } from "@/types/anilist";
import CharactersCarousel from "./characters";
import MediaListBodyCarousel from "./media-body";

const EmblaCarousel = async ({
  charactersPromise,
  mediaListPromise
}: {
  charactersPromise?: Promise<{
    pageInfo?: PageInfo;
    characters: Character[];
  }>;
  mediaListPromise?: Promise<{
    pageInfo?: PageInfo;
    media: Media[];
  }>;
}) => {
  if (!charactersPromise && !mediaListPromise) {
    console.log("Need either character or media");
    return null;
  }

  if (charactersPromise && mediaListPromise) {
    console.log("Just need one of them");
    return null;
  }

  if (charactersPromise) {
    const { characters } = await charactersPromise;
    return <CharactersCarousel characters={characters} />;
  }

  if (mediaListPromise) {
    const { media } = await mediaListPromise;
    return <MediaListBodyCarousel mediaList={media} />;
  }
};

export default EmblaCarousel;
