import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Row, IconButton} from '../components/lib'

const StyledRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 20px 0;
`

const Topic = ({topic, slug, handleDeleteTopic}) => {
  return (
    <StyledRow>
      <Link to={`/topics/${slug}`}>{topic}</Link>
      <IconButton onClick={() => handleDeleteTopic(slug)}>
        <span role="img" aria-label="delete">
          ❌
        </span>
      </IconButton>
    </StyledRow>
  )
}

Topic.PropTypes = {
  topic: PropTypes.string,
  slug: PropTypes.string,
  handleDeleteTopic: PropTypes.func,
}

export default Topic
