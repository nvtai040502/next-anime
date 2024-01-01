import { ANIME } from "@consumet/extensions";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
const gogo = new ANIME.Gogoanime();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const url = `https://api.consumet.org/meta/anilist/info/${params.id}`;
  const res = await axios.get(url, { params: { provider: "gogoanime" } });
  return NextResponse.json(res.data);
}