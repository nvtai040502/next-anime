import { getEpisodes } from "@/lib/anify";
import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const {mediaId} = await req.json()
    const episodes = await getEpisodes({ animeId: mediaId, providerId: "gogoanime" });

    return NextResponse.json(episodes)
  } catch(error) {
    console.log("[EPISODES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 })
  }
}