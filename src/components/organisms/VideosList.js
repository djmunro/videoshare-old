import React from 'react'

import * as mq from '../../media-queries'
import useWindowSize from '../../hooks/useWindowSize'

import Masonry from '../molecules/Masonry'
import VideoCard from '../molecules/VideoCard'

const VideosList = ({videos, handleDelete}) => {
  const windowSize = useWindowSize()

  return (
    <Masonry columns={windowSize.width >= mq.MEDIUM_MIN_WIDTH ? 2 : 1}>
      {videos &&
        videos.docs.reverse().map(link => {
          const data = link.data()
          return (
            <VideoCard
              key={link.id}
              id={link.id}
              data={data}
              handleDelete={handleDelete}
            />
          )
        })}
    </Masonry>
  )
}

export default VideosList
