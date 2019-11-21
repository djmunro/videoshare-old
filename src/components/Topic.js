/** @jsx jsx */
import {css, jsx} from '@emotion/core'

import {Link} from 'react-router-dom'

import {Row, IconButton} from './components'

const Topic = ({topic, slug, handleDeleteTopic}) => {
  return (
    <div>
      <Row
        css={css`
          justify-content: space-between;
          align-items: center;
          margin: 20px 0 20px 0;
        `}
      >
        <Link to={`/topics/${slug}`}>{topic}</Link>
        <IconButton
          onClick={e => {
            e.target.blur()
            if (
              window.confirm(
                '🚨 Hey! Are you sure you wanna delete that TOPIC? 🚨',
              )
            ) {
              handleDeleteTopic(slug)
            }
          }}
        >
          ❌
        </IconButton>
      </Row>
    </div>
  )
}

export default Topic
