"use client"
import React, { useEffect, useRef } from 'react';
import Artplayer from 'artplayer';
import Hls from "hls.js"
import { AnifySources } from '@/types/anify';
import { AnimeStreamingLink, Source } from '@/types/consumet';

interface RenderVideoSourcesProps extends React.HTMLAttributes<HTMLDivElement> {
  sources: Source[]
  option: any
}

export default function RenderVideoSources({ 
  sources,
  option, 
  ...rest 
}: RenderVideoSourcesProps
) {
  const source_360 = sources.find((item) => item.quality === "360p")
  const source_480 = sources.find((item) => item.quality === "480p")
  const source_720 = sources.find((item) => item.quality === "720p")
  const source_1080 = sources.find((item) => item.quality === "1080p")
  
  const artRef = useRef();



  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current!,
      setting: true,
      playbackRate: true,
      pip: true,
      fullscreen: true,
      type: 'm3u8',
      customType: {
          m3u8: playM3u8,
      },
      settings: [
          {
              html: 'Quality',
              width: 150,
              tooltip: "1080P" ,
              selector: [
                  {
                      html: '1080P',
                      url: source_1080?.url,
                  },
                  {
                      default: true,
                      html: '720P',
                      url: source_720?.url,
                  },
                  {
                      html: '360P',
                      url: source_360?.url,
                  },
              ],
              onSelect: function (item, $dom, event) {
                  console.info(item, $dom, event);
                  art.switchQuality(item.url, item.html);
                  return item.html;
              },
          },
      ],
      
    });

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={artRef} {...rest}></div>;
}


function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
      if (art.hls) art.hls.destroy();
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
      art.hls = hls;
      art.on('destroy', () => hls.destroy());
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = url;
  } else {
      art.notice.show = 'Unsupported playback format: m3u8';
  }
}


