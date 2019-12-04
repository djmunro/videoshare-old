import React from 'react'
import PropTypes from 'prop-types'

import * as mq from '../../media-queries'
import useWindowSize from '../../hooks/useWindowSize'

import Masonry from '../molecules/Masonry'
import VideoCard from '../molecules/VideoCard'
import EmptyVideoList from '../molecules/EmptyVideoList'

const VideosList = ({videos, handleDelete}) => {
  const windowSize = useWindowSize()

  if (!videos.docs || !videos.docs.length) return <EmptyVideoList />
  else
    return (
      <Masonry columns={windowSize.width >= mq.MEDIUM_MIN_WIDTH ? 2 : 1}>
        {videos.docs.map(link => {
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

VideosList.propTyles = {
  videos: PropTypes.array,
  handleDelete: PropTypes.func,
}

VideosList.defaultProps = {
  videos: [],
}

export default VideosList
