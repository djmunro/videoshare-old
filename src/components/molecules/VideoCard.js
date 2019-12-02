import React from 'react'
import styled from '@emotion/styled'

import Emoji from '../atoms/Emoji'
import YouTube from '../molecules/YouTube'
import IconButton from '../molecules/IconButton'

const Container = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 8px;
`

const VideoCard = ({id, data, handleDelete}) => {
  return (
    <Container>
      <Header>
        <IconButton onClick={() => handleDelete(id)}>
          <Emoji symbol="🗑️" label="delete" />
        </IconButton>
      </Header>
      <YouTube link={data.url} />
    </Container>
  )
}

export default VideoCard
