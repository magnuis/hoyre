'use client'

import YouTube from 'react-youtube'

interface IYouTubeComponent {
  id: string
}
export const YouTubeComponent = ({ id }: IYouTubeComponent) => {
  return (
    <div className="w-fit mx-auto">
      <YouTube videoId={id} id={id} opts={{ height: '200', width: `328` }} className="sm:hidden" />
      <YouTube
        videoId={id}
        id={id}
        opts={{ height: '300', width: `492` }}
        className="hidden sm:flex xl:hidden"
      />
      <YouTube
        videoId={id}
        id={id}
        opts={{ height: '390', width: `640` }}
        className="hidden xl:flex"
      />
    </div>
  )
}
