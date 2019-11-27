/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDocumentData, useCollection} from 'react-firebase-hooks/firestore'
import styled from '@emotion/styled'

import * as mq from '../media-queries'
import {db} from '../firebase'
import YouTube from '../components/YouTube'
import {SuccessButton, IconButton} from '../components/components'
import {Emoji} from '../components/lib'

const Container = ({children}) => (
  <div
    className="container"
    css={css`
      padding-top: 0.5em;
    `}
  >
    {children}
  </div>
)

const Title = styled.h1`
  ${mq.small} {
    font-size: 2rem;
  }
`

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

const Videos = () => {
  const {slug: topic} = useParams()
  const link = React.useRef()
  const [data, loading, error] = useDocumentData(db.doc(`topics/${topic}`))
  const [linksCollection] = useCollection(
    db.collection(`topics/${topic}/links`),
  )

  const handleOnSubmit = async event => {
    event.preventDefault()
    const url = link.current.value

    if (url === '') return

    db.collection(`topics/${topic}/links`).add({
      url: url,
    })
    link.current.value = ''
  }

  function handleDelete(id) {
    db.collection(`topics/${topic}/links`)
      .doc(id)
      .delete()
  }

  return (
    <Container>
      <Link to="/">
        <button className="button button-outline">Back to topics</button>
      </Link>

      <Title>{`${data ? data.name : '...'} videos`}</Title>
      <form onSubmit={handleOnSubmit}>
        <input ref={link} type="text" required minLength="1" />
        <SuccessButton>Add Video</SuccessButton>
      </form>
      <VideosContainer>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {linksCollection &&
          linksCollection.docs.reverse().map(link => {
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
    </Container>
  )
}
export default Videos
