/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import React from 'react'
import {formatDistance} from 'date-fns'
import {useCollectionData} from 'react-firebase-hooks/firestore'

import * as mq from '../media-queries'
import {db} from '../firebase'

function Comments({id, topic}) {
  const commentInput = React.useRef()
  const commentsPath = `topics/${topic}/links/${id}/comments`
  const [commentsData] = useCollectionData(db.collection(commentsPath))

  function handleSubmit(event) {
    event.preventDefault()
    const comment = commentInput.current.value

    db.collection(commentsPath).add({
      from: 'Brandon',
      comment: comment,
      created: new Date(),
    })
    commentInput.current.value = ''
  }

  return (
    <div
      css={{
        padding: '32px',
        [mq.small]: {
          display: 'block',
          padding: '12px',
        },
      }}
    >
      <form css={{marginBottom: '0px'}} onSubmit={handleSubmit}>
        <input
          css={css`
            margin-bottom: 4px;
          `}
          ref={commentInput}
          type="text"
          required
          minLength="1"
        />
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <button
            css={{
              backgroundColor: '#ccc',
              borderColor: '#ccc',
              [mq.small]: {
                marginLeft: '0',
                width: '100%',
              },
            }}
          >
            Comment
          </button>
        </div>
      </form>
      <ul>
        {commentsData &&
          commentsData.map(commentData => (
            <li
              key={commentsData.created}
              css={css`
                border-bottom: 1px solid #e3e3e3;
                list-style: none;
              `}
            >
              <span
                css={css`
                  font-weight: 700;
                `}
              >
                {commentData.from}
              </span>
              <span
                css={css`
                  color: #999;
                  font-style: italic;
                  font-size: 1.25rem;
                `}
              >
                - {formatDistance(commentData.created.toDate(), new Date())} ago
              </span>
              <p
                css={css`
                  margin-bottom: 8px;
                `}
              >
                {commentData.comment}
              </p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Comments
