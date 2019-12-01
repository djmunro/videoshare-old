import React from 'react'

import {db} from '../../firebase'

import {COLLECTION_NAME} from '../../constants'
import TopicCard from '../molecules/TopicCard'
import Heading from '../atoms/Heading'
import Input from '../atoms/Input'

const Button = ({children}) => (
  <button className="button button-outline">{children}</button>
)

const TopicsList = ({topics, loading}) => {
  const [topicFilter, setTopicFilter] = React.useState('')

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
    <>
      <Heading size={2}>Topics</Heading>
      <Input
        type="text"
        value={topicFilter}
        onChange={handleTopicFilterChange}
        placeholder="Enter Topic..."
      />

      {topics &&
        filterObjects(topics).map(item => (
          <TopicCard
            key={item.slug}
            slug={item.slug}
            topic={item.name}
            handleDeleteTopic={handleDeleteTopic}
          />
        ))}

      <Button onClick={() => setTopicFilter('')}>
        Reset filter
      </Button>
    </>
  )
}

export default TopicsList