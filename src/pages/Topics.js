import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'

import Hr from '../components/atoms/Hr'

import Title from '../components/molecules/Title'
import AddTopicForm from '../components/molecules/AddTopicForm'
import Loading from '../components/molecules/Loading'
import ThemeToggle from '../components/molecules/ThemeToggle'
import Signature from '../components/molecules/Signature'

import TopicsList from '../components/organisms/TopicsList'

import {COLLECTION_NAME} from '../constants'

const Container = ({children}) => (
  <main className="container" style={{maxWidth: '45em'}}>
    {children}
  </main>
)

const Topics = ({setCurrentTheme}) => {
  const [topics, loading, error] = useCollectionData(
    db.collection(COLLECTION_NAME),
  )

  return (
    <Container>
      <Title />
      <AddTopicForm />
      <Hr />
      {/* <Loading /> */}
      {!loading && <TopicsList topics={topics} />}
      {loading && <Loading />}
      <ThemeToggle setCurrentTheme={setCurrentTheme} />
      <Signature />
    </Container>
  )
}
export default Topics
