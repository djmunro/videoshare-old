import React from 'react'
import styled from '@emotion/styled'
import Masonry from '../components/Masonry'

import * as mq from '../media-queries'

import {IconButton} from '../components/lib'
import {Emoji} from '../components/lib'
import YouTube from '../components/YouTube'

import useWindowSize from '../useWindowSize'

const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 8px;
`

const VideosList = ({videoDocuments, handleDelete}) => {
  const windowSize = useWindowSize()

  return (
    <Masonry columns={windowSize.width >= mq.MEDIUM_MIN_WIDTH ? 2 : 1}>
      {videoDocuments.reverse().map(link => {
        const data = link.data()
        return (
          <Card key={link.id}>
            <CardHeader>
              <IconButton onClick={() => handleDelete(link.id)}>
                <Emoji symbol="🗑️" label="delete" />
              </IconButton>
            </CardHeader>
            <YouTube link={data.url} />
          </Card>
        )
      })}
    </Masonry>
  )
}

export default VideosList
