'use client'
import getYouTubeID from 'get-youtube-id'
import { useEffect, useState } from 'react'
import { poppins } from 'styles/fonts'
import { VideoCategory } from 'type'
import { VideoPageYouTubeComponent } from './VideoPageYoutubeComponent'

interface IYouTubeVideoGridComponent {
  videoCategories: VideoCategory[]
}

export const YouTubeVideoGridComponent = ({ videoCategories }: IYouTubeVideoGridComponent) => {
  return (
    <div className="mt-10 sm:mx-8 mb-36">
      {videoCategories.map((category) => (
        <div key={category.title}>
          <div className="mb-6">
            <h1 className={`${poppins.className} text-xl sm:text-2xl font-medium`}>
              {category.title}
            </h1>
            <p className="md:text-lg mt-1 text-gray">{category.description}</p>
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            {category.referencedBy.map((video) => (
              <div
                key={video.title}
                className={`${poppins.className} text-lg font-semibold w-fit mb-7`}
              >
                <VideoPageYouTubeComponent id={getYouTubeID(video.url) ?? ''} title={video.title} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
