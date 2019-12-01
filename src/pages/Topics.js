/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'

import * as mq from '../media-queries'
import Title from '../components/molecules/Title'
import TopicsList from '../components/organisms/TopicsList'
import AddTopicForm from '../components/molecules/AddTopicForm'
import Hr from '../components/atoms/Hr'

import {COLLECTION_NAME} from '../constants'

const Container = ({children}) => (
  <main
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
  </main>
)

const Topics = () => {
  const [topics, loading, error] = useCollectionData(
    db.collection(COLLECTION_NAME),
  )

  return (
    <Container>
      <Title />
      <AddTopicForm />
      <Hr />
      <TopicsList topics={topics} loading={loading} />
    </Container>
  )
}
export default Topics
