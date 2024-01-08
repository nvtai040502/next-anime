import { MediaType } from "@/types/anilist"
import { cache } from "react"
import { getMediaList } from "../anilist"

// See the unstable_cache API docs: https://nextjs.org/docs/app/api-reference/functions/unstable_cache
export async function getTrendingMedia({
  type, 
  perPage
}: {
  type: MediaType,
  perPage: number
}) {
  try {
    return await cache(
      async () => {
        const mediaTrending = await getMediaList({perPage, sort: "TRENDING_DESC", type})
        return mediaTrending
      },
    )()
  } catch (err) {
    console.error(err)
    return []
  }
}
