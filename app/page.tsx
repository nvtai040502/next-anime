import React, { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { getMedia, getPage } from "@/lib/anilist";
import { PER_PAGE } from "@/lib/constants";

export default async function page() {
    const popular = await getPage({
      sort: "POPULARITY",
      page: 1,
      perPage: PER_PAGE
    })
    return (
        <div>
          {popular.media.length} hello
          {popular.pageInfo.lastPage}

          
        </div>
    );
}