import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDocumentData, useCollection} from 'react-firebase-hooks/firestore'
import styled from '@emotion/styled'

import * as mq from '../media-queries'
import {db} from '../firebase'
import {SuccessButton} from '../components/lib'
import VideosList from '../components/VideosList'

const Container = ({children}) => <div className="container">{children}</div>

const Title = styled.h1`
  ${mq.small} {
    font-size: 2rem;
  }
`

const Videos = () => {
  const {slug: topic} = useParams()
  const link = React.useRef()
  const [data, loading, error] = useDocumentData(db.doc(`topics/${topic}`))
  const [linksCollection] = useCollection(
    db.collection(`topics/${topic}/links`),
  )

  const handleOnSubmit = event => {
    event.preventDefault()
    const url = link.current.value

    if (url === '') return

    db.collection(`topics/${topic}/links`).add({
      url: url,
    })
    link.current.value = ''
  }

  function handleDelete(id) {
    const deleteVideo = window.confirm(
      '🚨 Hey! Are you sure you wanna delete that VIDEO? 🚨',
    )
    if (deleteVideo) {
      db.collection(`topics/${topic}/links`)
        .doc(id)
        .delete()
    }
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

      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Loading...</span>}
      {linksCollection && (
        <VideosList
          videoDocuments={linksCollection.docs}
          handleDelete={handleDelete}
        />
      )}
    </Container>
  )
}
export default Videos
