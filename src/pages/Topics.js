import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'

import Title from '../components/molecules/Title'
import TopicsList from '../components/organisms/TopicsList'
import AddTopicForm from '../components/molecules/AddTopicForm'
import Signature from '../components/molecules/Signature'
import Hr from '../components/atoms/Hr'

import {COLLECTION_NAME} from '../constants'

const Container = ({children}) => (
  <main
    className="container"
    style={{width: '300px'}}
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
      <Signature />
    </Container>
  )
}
export default Topics
