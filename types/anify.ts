export type AnifyProviderId = "zoro" | "gogoanime" | "9anime" | "animepahe"
export type SubType = "dub" | "sub"
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
