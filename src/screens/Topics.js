/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React, {useState} from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'

import * as mq from '../media-queries'
import {CenteredRow, SuccessButton} from '../components/components'
import Topic from '../components/Topic'

const COLLECTION_NAME = 'topics'

const Topics = () => {
  const topic = React.createRef()
  const [topicFilter, setTopicFilter] = useState('')
  const [topics, loading, error] = useCollectionData(
    db.collection(COLLECTION_NAME),
  )

  const handleSubjectSubmit = event => {
    // handle topic validation
    const name = topic.current.value
    const slug = name.toLowerCase().replace(/ /g, '-')
    db.collection(COLLECTION_NAME)
      .doc(slug)
      .set({
        name: name,
        slug: slug,
      })
      .then((topic.current.value = ''))

    event.preventDefault()
  }

  const handleDeleteTopic = topic => {
    db.collection(COLLECTION_NAME)
      .doc(topic)
      .delete()
  }

  const handleTopicFilterChange = event => {
    setTopicFilter(event.target.value)
    event.preventDefault()
  }

  const filterObjects = s => {
    return s.filter(item =>
      item.name.toLowerCase().includes(topicFilter.toLowerCase()),
    )
  }

  return (
    <div
      className="container"
      css={{
        [mq.medium]: {
          width: '45em',
        },
        [mq.large]: {
          width: '45em',
        },
      }}
    >
      <CenteredRow
        css={css`
          text-align: 'center';
          margin-top: 30;
          margin-bottom: 30;
          align-items: 'center';
        `}
      >
        <h1 style={{marginBottom: '40px'}}>Videoshare</h1>
      </CenteredRow>

      <h2>Add Topic</h2>
      <form
        css={css`
          margin-bottom: 0;
        `}
        onSubmit={handleSubjectSubmit}
      >
        <CenteredRow
          css={{
            [mq.small]: {
              display: 'block',
            },
          }}
        >
          <input
            type="text"
            ref={topic}
            placeholder="Enter a topic"
            style={{flex: 1}}
            required
            minLength="1"
            maxLength="40"
          />
          <SuccessButton
            type="submit"
            css={{
              marginLeft: '20px',

              [mq.small]: {
                marginLeft: '0',
                width: '100%',
              },
            }}
          >
            Add Topic
          </SuccessButton>
        </CenteredRow>
      </form>

      <hr
        css={{
          [mq.small]: {
            marginTop: '8px',
            marginBottom: '8px',
          },
        }}
      />

      <h2>Topics</h2>
      <input
        type="text"
        value={topicFilter}
        onChange={handleTopicFilterChange}
        placeholder="Enter Topic..."
      />

      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <h2>Loading...</h2>}
      <div>
        {topics &&
          filterObjects(topics).map(item => (
            <Topic
              key={item.slug}
              slug={item.slug}
              topic={item.name}
              handleDeleteTopic={handleDeleteTopic}
            />
          ))}
      </div>

      <button
        className="button button-outline"
        onClick={() => setTopicFilter('')}
      >
        Reset filter
      </button>
    </div>
  )
}
export default Topics
