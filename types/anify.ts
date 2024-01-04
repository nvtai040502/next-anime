import { TitleMedia } from "./anilist"

export type AnifyProviderId = "zoro" | "gogoanime" | "9anime" | "animepahe"
export type SubType = "dub" | "sub"

export type AnifyMediaInfoRelations = {
    "id": "string",
    "slug": "string",
    "coverImage": "string",
    "bannerImage": "string",
    "trailer": "string | null",
    "status": "FINISHED | RELEASING | NOT_YET_RELEASED | CANCELLED | HIATUS",
    "season": "SUMMER | FALL | WINTER | SPRING",
    "title": TitleMedia
    "currentEpisode": "number | null",
    "mappings": [
        {
            "id": "string",
            "providerId": "string",
            "similarity": "number",
            "providerType": "ANIME | MANGA | META | INFORMATION"
        },
    ],
    "synonyms": ["string"],
    "countryOfOrigin": "string",
    "description": "string",
    "duration": "number | null",
    "color": "string | null",
    "year": "number | null",
    "rating": {
        "mal": "number | null",
        "tvdb": "number | null",
        "kitsu": "number | null",
        "anilist": "number | null",
        "anidb": "number | null",
        "tmdb": "number | null",
        "comick": "number | null",
        "mangadex": "number | null",
        "novelupdates": "number | null"
    },
    "popularity": {
        "mal": "number | null",
        "tvdb": "number | null",
        "kitsu": "number | null",
        "anilist": "number | null",
        "anidb": "number | null",
        "tmdb": "number | null",
        "comick": "number | null",
        "mangadex": "number | null",
        "novelupdates": "number | null"
    },
    "type": "ANIME | MANGA",
    "format": "TV | TV_SHORT | MOVIE | SPECIAL | OVA | ONA | MUSIC | MANGA | NOVEL | ONE_SHOT | UNKNOWN",
    "relations": [
        {
            "id": "number",
            "data": {
                "id": "number",
                "type": "ANIME | MANGA",
                "title": {
                    "userPreferred": "string"
                },
                "format": "TV | TV_SHORT | MOVIE | SPECIAL | OVA | ONA | MUSIC | MANGA | NOVEL | ONE_SHOT | UNKNOWN",
                "status": "FINISHED | RELEASING | NOT_YET_RELEASED | CANCELLED | HIATUS",
                "coverImage": {
                    "large": "string"
                },
                "bannerImage": "string | null"
            },
            "type": "ADAPTATION | PREQUEL | SEQUEL | PARENT | SIDE_STORY | CHARACTER | SUMMARY | ALTERNATIVE | SPIN_OFF | OTHER | SOURCE | COMPILATION | CONTAINS"
        },
    ],
    "characters": [
        {
            "name": "string",
            "image": "string",
            "voiceActor": {
                "name": "string",
                "image": "string"
            }
        }
    ],
    "totalEpisodes": "number | null",
    "totalVolumes": "number | null",
    "totalChapters": "number | null",
    "genres": ["string"],
    "tags": ["string"],
    "episodes": {
        "latest": {
            "updatedAt": "number",
            "latestTitle": "string",
            "latestEpisode": "number"
        },
        "data": [{
            "episodes": [
                {
                    "id": "string",
                    "img": "string | null",
                    "title": "string",
                    "hasDub": "boolean",
                    "description": "string | null",
                    "rating": "number | null",
                    "number": "number",
                    "isFiller": "boolean",
                    "updatedAt": "number"
                }
            ],
            "providerId": "string"
        }]
    },
    "chapters": {
        "latest": {
            "updatedAt": "number",
            "latestTitle": "string",
            "latestChapter": "number"
        },
        "data": [{
            "chapters": [
                {
                    "id": "string",
                    "title": "string",
                    "number": "number",
                    "rating": "number | null",
                    "updatedAt": "number",
                    "mixdrop": "string | null"
                }
            ],
            "providerId": "string"
        }]
    },
    "averageRating": "number",
    "averagePopularity": "number",
    "artwork": [
        {
            "img": "string",
            "type": "banner | poster | clear_logo | top_banner",
            "providerId": "string"
        }
    ],
    "relationType": "string"
}

export type AnifyEpisode = {
  "id": "string",
  "isFiller": "boolean | undefined",
  "number": "number",
  "title": "string",
  "img": "string | null",
  "hasDub": "boolean",
  "description": "string | null",
  "rating": "number | null",
  "updatedAt": "number | undefined"
}

export type AnifyMediaInfoRelationsOperation = {
data: AnifyMediaInfoRelations[]
}

export type AnifyEpisodesWithProviderId = {
  providerId: AnifyProviderId;
  episodes: AnifyEpisode[]
}

export type AnifyEpisodesWithProviderIdOperation = {
  data: AnifyEpisodesWithProviderId[]
}

export type AnifySources = {
    "sources": [
      {
          "url": "string",
          "quality": "360p" | "480p" | "720p" | "1080p" | "default" | "auto"
      }
    ],
    "subtitles": [
        {
            "url": "string",
            "lang": "string"
        }
    ],
    "audio": [
        {
            "url": "string",
            "name": "string",
            "language": "string"
        }
    ],
    "intro": {
        "start": "number",
        "end": "number"
    },
    "outro": {
        "start": "number",
        "end": "number"
    },
    "headers": {
        [key: string]: string[]
    }
}
