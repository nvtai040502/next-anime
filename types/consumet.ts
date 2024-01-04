export type MangaProvider = "mangadex" | "mangahere" | "mangakakalot" | "mangapark" | "mangapill" | "mangareader" | "mangasee123"
export type AnimeProvider = "9anime" |"animefox" | "animepahe" | "bilibili" | "crunchyroll" | "enime" | "gogoanime" | "marin" | "zoro"

export type MangaStreamingLink = {
  "img": "string",
  "page": "integer",
}[]


export type Source = {
  "url": "string",
  "isM3U8": "boolean"
  "quality": "360p" | "480p" | "720p" | "1080p" | "default" | "backup"
}

export type AnimeStreamingLink = {
  "sources": Source[],
  "download": "string",
  "headers": {
      [key: string]: string[]
  }
}

export type AnimeInfo = {
  "id": "string",
  "title": "string[]",
  "malId": "integer",
  "trailer": {
    "id": "string",
    "site": "string",
    "thumbnail": "string"
  },
  "image": "string",
  "popularity": "number",
  "color": "string",
  "description": "string",
  "status": "string",
  "releaseDate": "integer",
  "startDate": {
    "year": "number",
    "month": "number",
    "day": "number"
  },
  "endDate": {
    "year": "number",
    "month": "number",
    "day": "number"
    },
  "rating": "integer",
  "genres": "string[]",
  "season": "string",
  "studios": "string[]",
  "type": "string",
  "recommendations": {
    "id": "string",
    "malId": "string",
    "title": "string[]",
    "status": "string",
    "episodes": "number",
    "image": "string",
    "cover": "string",
    "rating": "number",
    "type": "string",
  },
  "characters": {
    "id": "string",
    "role": "string",
    "name": "string[]",
    "image": "string",
  }[],
  "relations": {
    "id": "integer",
    "relationType": "string",
    "malId": "integer",
    "title": "string[]",
    "status": "string",
    "episodes": "integer",
    "image": "string",
    "color": "string",
    "type": "string",
    "cover": "string",
    "rating": "integer",
  }[],
  "episodes": {
    "id": "string",
    "title": "string",
    "episode": "string",
  }[]
}

export type MangaInfo = {
  "id": "string",
  "title": "string[]",
  "malId": "integer",
  "trailer": {
    "id": "string",
    "site": "string",
    "thumbnail": "string"
  },
  "image": "string",
  "popularity": "number",
  "color": "string",
  "description": "string",
  "status": "string",
  "releaseDate": "integer",
  "startDate": {
    "year": "number",
    "month": "number",
    "day": "number"
  },
  "endDate": {
     "year": "number",
     "month": "number",
     "day": "number"
    },
  "rating": "integer",
  "genres": "string[]",
  "season": "string",
  "studios": "string[]",
  "type": "string",
  "recommendations": {
    "id": "string",
    "malId": "string",
    "title": "string[]",
    "status": "string",
    "chapters": "number",
    "image": "string",
    "cover": "string",
    "rating": "number",
    "type": "string",
  },
  "characters": {
    "id": "string",
    "role": "string",
    "name": "string[]",
    "image": "string",
  },
  "relations": {
    "id": "integer",
    "relationType": "string",
    "malId": "integer",
    "title": "string[]",
    "status": "string",
    "chapters": "integer",
    "image": "string",
    "color": "string",
    "type": "string",
    "cover": "string",
    "rating": "integer",
  },
  "chapters": {
    "id": "string",
    "title": "string",
    "chapterNumber": 'string',
    "volumeNumber": 'string',
    "pages": "number"
  }[]
}