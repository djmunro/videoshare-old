import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDocumentData, useCollection} from 'react-firebase-hooks/firestore'
import styled from '@emotion/styled'

import * as mq from '../media-queries'
import {db} from '../firebase'

import AddVideoForm from '../components/molecules/AddVideoForm'
import Loading from '../components/molecules/Loading'
import Error from '../components/molecules/Error'

import VideosList from '../components/organisms/VideosList'

const Container = ({children}) => (
  <main className="container" style={{maxWidth: '45em'}}>
    {children}
  </main>
)

const Title = styled.h1`
  ${mq.small} {
    font-size: 2rem;
  }
`

const Button = ({children}) => (
  <button className="button button-outline">{children}</button>
)

const Videos = () => {
  const {slug: topic} = useParams()
  const [data] = useDocumentData(db.doc(`topics/${topic}`))
  const [videos, loading, error] = useCollection(
    db.collection(`topics/${topic}/links`),
  )

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
        <Button>Back to topics</Button>
      </Link>
      <Title>{`${data ? data.name : '...'} videos`}</Title>
      <AddVideoForm topic={topic} />
      {loading && <Loading />}
      {error && <Error />}
      {videos && <VideosList videos={videos} handleDelete={handleDelete} />}
    </Container>
  )
}

export default Videos
