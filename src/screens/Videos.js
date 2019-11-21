/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDocumentData, useCollection} from 'react-firebase-hooks/firestore'
import styled from '@emotion/styled'

import * as mq from '../media-queries'
import {db} from '../firebase'
import YouTube from '../components/YouTube'

const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Videos = () => {
  const {slug: subject} = useParams()
  const link = React.useRef()
  const [data, loading, error] = useDocumentData(db.doc(`topics/${subject}`))
  const [linksCollection] = useCollection(
    db.collection(`topics/${subject}/links`),
  )

  const handleOnSubmit = async event => {
    event.preventDefault()
    // handle validation here
    const url = link.current.value

    if (url === '') return

    db.collection(`topics/${subject}/links`).add({
      url: url,
    })
    link.current.value = ''
  }

  function handleDelete(id) {
    db.collection(`topics/${subject}/links`)
      .doc(id)
      .delete()
  }

  return (
    <div
      className="container"
      css={css`
        padding-top: 0.5em;
      `}
    >
      <Link to="/">
        <button className="button button-outline">Back to subjects</button>
      </Link>

      <h2
        css={{
          [mq.small]: {
            fontSize: '2rem',
          },
        }}
      >{`${data ? data.name : '...'} videos`}</h2>
      <form onSubmit={handleOnSubmit}>
        <input ref={link} type="text" required minLength="1" />
        <button>Add Video</button>
      </form>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 1em;

          ${mq.small} {
            grid-template-columns: repeat(1, 1fr);
          }
        `}
      >
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {linksCollection &&
          linksCollection.docs.reverse().map(link => {
            const data = link.data()
            return (
              <Card key={link.id}>
                <button onClick={() => handleDelete(link.id)}>Delete</button>
                <YouTube link={data.url} />
              </Card>
            )
          })}
      </div>
    </div>
  )
}
export default Videos
