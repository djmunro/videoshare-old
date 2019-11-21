/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React, {useState} from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'

import * as mq from '../media-queries'
import {CenteredBox, CenteredRow, SuccessButton} from '../components/components'
import Subject from '../components/Subject'

const COLLECTION_NAME = 'topics'

const Subjects = () => {
  const subject = React.createRef()
  const [subjectFilter, setSubjectFilter] = useState('')
  const [subjects, loading, error] = useCollectionData(
    db.collection(COLLECTION_NAME),
  )

  const handleSubjectSubmit = event => {
    // handle subject validation
    const name = subject.current.value
    const slug = name.toLowerCase().replace(/ /g, '-')
    db.collection(COLLECTION_NAME)
      .doc(slug)
      .set({
        name: name,
        slug: slug,
        links: [],
      })
      .then((subject.current.value = ''))

    event.preventDefault()
  }

  const handleDeleteSubject = subject => {
    db.collection(COLLECTION_NAME)
      .doc(subject)
      .delete()
  }

  const handleSubjectFilterChange = event => {
    setSubjectFilter(event.target.value)
    event.preventDefault()
  }

  const filterObjects = s => {
    return s.filter(item =>
      item.name.toLowerCase().includes(subjectFilter.toLowerCase()),
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

      <h2>Add Subject</h2>
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
            ref={subject}
            placeholder="Add a subject"
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
            Add Subject
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

      <h2>Subjects</h2>
      <input
        type="text"
        value={subjectFilter}
        onChange={handleSubjectFilterChange}
        placeholder="Enter Subject..."
      />

      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <h2>Loading...</h2>}
      <div>
        {subjects &&
          filterObjects(subjects).map(item => (
            <Subject
              key={item.slug}
              slug={item.slug}
              subject={item.name}
              handleDeleteSubject={handleDeleteSubject}
            />
          ))}
      </div>

      <button
        className="button button-outline"
        onClick={() => setSubjectFilter('')}
      >
        Reset filter
      </button>
    </div>
  )
}
export default Subjects
