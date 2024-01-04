import { getMangaInfo, getMangaStreamingLink } from "@/lib/consumet";

interface ReadMangaPageProps {
  params : {
    chapterId: string,
    mangaId: string
  }
}
const ReadMangaPage = async ({
  params
}: ReadMangaPageProps) => {
  const mangaInfo = await getMangaInfo({mangaId: params.mangaId})
  const mangaStreamingLink = await getMangaStreamingLink({chapterId: params.chapterId}) 
  console.log(mangaStreamingLink[0])
  return ( 
    <div>
      Read Manga Page
    </div>
   );
}
 
export default ReadMangaPage;