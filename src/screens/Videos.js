/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDocumentData} from 'react-firebase-hooks/firestore'
import styled from '@emotion/styled'

import * as mq from '../media-queries'
import {db} from '../firebase'
import YouTube from '../components/YouTube'
import {CenteredBox} from '../components/components'

const Card = styled.div`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 2em;
  ${mq.small} {
    margin-bottom: 1em;
  }
`

const Videos = () => {
  const {slug: subject} = useParams()
  const link = React.useRef()
  const [data, loading, error] = useDocumentData(db.doc(`videos/${subject}`))

  const handleOnSubmit = event => {
    // handle validation here
    const url = link.current.value

    if (url === '') return

    db.collection('videos')
      .doc(subject)
      .update({
        links: [url, ...data.links],
      })

    event.preventDefault()
  }

  return (
    <div
      className="container"
      css={css`
        padding-top: 0.5em;
      `}
    >
      <Link to="/">
        <button>Back to subjects</button>
      </Link>

      <h2
        css={{
          [mq.small]: {
            fontSize: '2rem',
          },
        }}
      >{`${data ? data.name : '...'} videos`}</h2>
      <form onSubmit={handleOnSubmit}>
        <input ref={link} type="text" />
        <button>Add Video</button>
      </form>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {data &&
          data.links.map(link => (
            <Card key={link}>
              <YouTube link={link} />
            </Card>
          ))}
      </div>
    </div>
  )
}
export default Videos
