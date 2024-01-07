import { Media, PageInfo, Character } from '@/types/anilist';
import InfinityScroll from '@/components/infinity-scroll/_index';

const CharactersTabPage = ({ media }: { media: Media }) => {
  

  return <InfinityScroll mediaId={String(media.id)} type="Characters"/>
};

export default CharactersTabPage;
