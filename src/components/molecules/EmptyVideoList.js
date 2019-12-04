import React from 'react'
import styled from '@emotion/styled'
import {VideoOff} from 'react-feather'

import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`

const VideoIcon = styled(VideoOff)`
  opacity: 0.05;
  margin: 2rem;
`

const EmptyVideoList = () => {
  return (
    <Container>
      <VideoIcon size={64} />
      <Heading size={2}>No videos yet!</Heading>
      <Paragraph>Why don't you start adding some videos to share?</Paragraph>
    </Container>
  )
}

export default EmptyVideoList
