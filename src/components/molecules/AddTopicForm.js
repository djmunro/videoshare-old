import React from 'react'
import styled from '@emotion/styled'

import {db} from '../../firebase'

import {COLLECTION_NAME} from '../../constants'

import Heading from '../atoms/Heading'
import Button from '../atoms/Button'

const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const TopicInput = styled.input`
`

const AddTopicButton = styled(Button)`
  background-color: #3bb272;
  border-color: #3bb272;
  margin-left: 20px;
`

const AddTopicForm = () => {
  const topic = React.createRef()

  const handleSubjectSubmit = event => {
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

  return (
    <>
      <Heading size={2}>Add Topic</Heading>
      <InputContainer
        onSubmit={handleSubjectSubmit}
      >
          <TopicInput
            type="text"
            ref={topic}
            placeholder="Enter a topic"
            required
            minLength="1"
            maxLength="40"
          />
          <AddTopicButton type="submit">Add Topic</AddTopicButton>
      </InputContainer>
    </>
  )
}
export default AddTopicForm
