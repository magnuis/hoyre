'use client'

import useWindowWidth from 'hooks/useWindowWidth'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

interface IYouTubeComponent {
  id?: string
  title: string
}
export const VideoPageYouTubeComponent = ({ id, title }: IYouTubeComponent) => {
  const [width, setWidth] = useState(0)
  const [widthString, setWidthString] = useState<string>()
  const windowWidth = useWindowWidth()

  const setRoundedWidth = (width: number) => {
    setWidth(Math.floor(width))
    setWidthString(`${Math.floor(width)}px`)
  }

  useEffect(() => {
    if (windowWidth > 900 && width !== 250) {
      setRoundedWidth(250)
    } else if (windowWidth <= 500) {
      setRoundedWidth(windowWidth - 48)
    } else if (windowWidth <= 640) {
      setRoundedWidth((windowWidth - 72) / 2)
    } else if (windowWidth <= 1024) {
      setRoundedWidth((windowWidth - 128) / 3)
    }
  }, [windowWidth])

  return (
    <div className={`text-start`}>
      <h3
        style={{
          width: `${widthString}`,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        className={`text-lg font-semibold mb-1`}
      >
        {title}
      </h3>
      <YouTube videoId={id} id={id} opts={{ height: `${width / 1.78}`, width: `${width}` }} />
    </div>
  )
}
