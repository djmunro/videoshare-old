/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {useDocumentData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'
import YouTube from '../components/YouTube'
import {CenteredBox} from '../components/components'

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
    <div class="container">
      <Link to="/">
        <button>Back to subjects</button>
      </Link>

      <h2>{`${data ? data.name : '...'} videos`}</h2>
      <form onSubmit={handleOnSubmit}>
        <input ref={link} type="text" />
        <button>Add Video</button>
      </form>
      <div>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {data && data.links.map(link => <YouTube key={link} link={link} />)}
      </div>
    </div>
  )
}
export default Videos
