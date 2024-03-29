import React from 'react'
import styled from '@emotion/styled'
import {darken, lighten} from 'polished'

import {db} from '../../firebase'
import * as mq from '../../media-queries'

import {COLLECTION_NAME} from '../../constants'

import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const Container = styled.div`
  /* background-color: ${({theme}) => lighten(0.1, theme.colors.primary)}; */
  background-color: ${({theme}) => darken(0.05, theme.app.background)};
  /* color: ${({theme}) => theme.app.background}; */
  padding: 1.5rem 1.5rem 0.1rem 1.5rem;
  border-radius: 3px;
`

const InputContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${mq.small} {
    flex-wrap: wrap;
  }
`

const AddTopicButton = styled(Button)`
  /* background-color: ${({theme}) => theme.app.background};
  border-color: ${({theme}) => theme.app.background}; */
  /* color: ${({theme}) => lighten(0.1, theme.colors.primary)}; */
  margin-left: 20px;
  ${mq.small} {
    margin-left: 0;
    width: 100%;
  }
  
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
    <Container>
      <Heading size={4}>Add new topic</Heading>
      <InputContainer onSubmit={handleSubjectSubmit}>
        <Input
          type="text"
          ref={topic}
          placeholder="Enter a topic&hellip;"
          required
          minLength="1"
          maxLength="40"
        />
        <AddTopicButton type="submit">Add Topic</AddTopicButton>
      </InputContainer>
    </Container>
  )
}
export default AddTopicForm
