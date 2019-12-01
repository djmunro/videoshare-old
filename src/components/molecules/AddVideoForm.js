import React from 'react'
import styled from '@emotion/styled'
import {darken} from 'polished'

import {db} from '../../firebase'

import Button from '../atoms/Button'
import Heading from '../atoms/Heading'
import Input from '../atoms/Input'

const Container = styled.div`
  /* margin: 2rem 0; */
  /* background-color: ${({theme}) => darken(0.05, theme.app.background)}; */
  /* padding: 0.5rem 1.5rem 1rem 1.5rem; */
  /* border-radius: 3px; */
`

const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AddVideoButton = styled(Button)`
  background-color: #3bb272;
  border-color: #3bb272;
  margin-left: 20px;
`

const AddVideoForm = ({topic}) => {
  const [inputValue, setInputValue] = React.useState()

  const handleOnSubmit = event => {
    event.preventDefault()
    if (inputValue === '') return

    db.collection(`topics/${topic}/links`).add({
      url: inputValue,
    })
    setInputValue('')
  }

  return (
    <Container>
      <Heading size={4}>Add new video</Heading>
      <InputContainer onSubmit={handleOnSubmit}>
        <Input
          value={inputValue}
          onChange={ev => setInputValue(ev.target.value)}
          type="text"
          required
          minLength="1"
        />
        <AddVideoButton>Add</AddVideoButton>
      </InputContainer>
    </Container>
  )
}

export default AddVideoForm
