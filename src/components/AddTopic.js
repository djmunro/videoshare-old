/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'

import {db} from '../firebase'

import {CenteredRow, SuccessButton} from '../components/lib'
import {COLLECTION_NAME} from '../constants'
import * as mq from '../media-queries'

const AddTopic = () => {
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
    </>
  )
}
export default AddTopic
