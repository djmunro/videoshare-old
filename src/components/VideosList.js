import React from 'react'
import styled from '@emotion/styled'

import * as mq from '../media-queries'

import {IconButton} from '../components/lib'
import {Emoji} from '../components/lib'
import YouTube from '../components/YouTube'

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

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;

  ${mq.small} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const VideosList = ({videoDocuments, handleDelete}) => (
  <VideosContainer>
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
  </VideosContainer>
)

export default VideosList
