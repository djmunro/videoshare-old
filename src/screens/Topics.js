/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import styled from '@emotion/styled'

import {db} from '../firebase'

import * as mq from '../media-queries'
import {CenteredRow} from '../components/lib'
import Topic from '../components/Topic'
import AddTopic from '../components/AddTopic'

import {COLLECTION_NAME} from '../constants'

const Title = () => (
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
)

const Container = ({children}) => (
  <div
    className="container"
    css={css`
      ${mq.medium} {
        width: 45em;
      }
      ${mq.large} {
        width: 45em;
      }
    `}
  >
    {children}
  </div>
)

const StyledHr = styled.hr`
  ${mq.small} {
    margin: 8px 8px 0 0;
  }
`

const Topics = () => {
  const [topicFilter, setTopicFilter] = React.useState('')
  const [topics, loading, error] = useCollectionData(
    db.collection(COLLECTION_NAME),
  )

  const handleDeleteTopic = topic => {
    const deleteTopic = window.confirm(
      '🚨 Hey! Are you sure you wanna delete that TOPIC? 🚨',
    )
    if (deleteTopic) {
      db.collection(COLLECTION_NAME)
        .doc(topic)
        .delete()
    }
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
    <Container>
      <Title />
      <AddTopic />
      <StyledHr />

      <h2>Topics</h2>
      <input
        type="text"
        value={topicFilter}
        onChange={handleTopicFilterChange}
        placeholder="Enter Topic..."
      />

      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <h2>Loading...</h2>}
      {topics &&
        filterObjects(topics).map(item => (
          <Topic
            key={item.slug}
            slug={item.slug}
            topic={item.name}
            handleDeleteTopic={handleDeleteTopic}
          />
        ))}

      <button
        className="button button-outline"
        onClick={() => setTopicFilter('')}
      >
        Reset filter
      </button>
    </Container>
  )
}
export default Topics
