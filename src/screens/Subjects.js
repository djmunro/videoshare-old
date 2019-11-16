/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React, {useState} from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import {db} from '../firebase'

import {
  CenteredBox,
  CenteredRow,
  IconButton,
  SuccessButton,
} from '../components/components'
import Subject from '../components/Subject'

const Subjects = () => {
  const subject = React.createRef()
  const [subjectFilter, setSubjectFilter] = useState('')
  const [subjects, loading, error] = useCollectionData(db.collection('videos'))

  const handleSubjectSubmit = event => {
    // handle subject validation
    const name = subject.current.value
    const slug = name.toLowerCase().replace(/ /g, '-')
    db.collection('videos')
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
    db.collection('videos')
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

  // how to get subjectFIlter to use uncontrolled input
  // but still be able to filter
  return (
    <CenteredBox
      css={css`
        width: 500px;
        margin: 0 auto;
      `}
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
        <CenteredRow>
          <input
            type="text"
            ref={subject}
            placeholder="Add a subject"
            style={{flex: 1}}
          />
          <SuccessButton
            type="submit"
            css={css`
              margin-left: 20px;
            `}
          >
            Add Subject
          </SuccessButton>
        </CenteredRow>
      </form>

      <hr />

      <h2>Subjects</h2>
      <input
        type="text"
        value={subjectFilter}
        onChange={handleSubjectFilterChange}
        placeholder="Enter Subject..."
      />

      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Loading...</span>}
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

      <button onClick={() => setSubjectFilter('')}>Reset filter</button>
    </CenteredBox>
  )
}
export default Subjects
