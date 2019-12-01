import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Trash2 } from "react-feather";

import {Link} from 'react-router-dom'

import Row from '../atoms/Row'

const Container = styled(Row)`
  justify-content: space-between;
  margin: 20px 0;
`

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const TrashIcon = styled(Trash2)`
  opacity: 0.25;
  color: ${({ theme }) => theme.typography.paragraph.color};
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.danger};
  }
  transition: color 0.2s, opacity 0.2s;
  cursor: pointer;
`;

const TopicCard = ({topic, slug, handleDeleteTopic}) => {
  return (
    <Container>
      <InnerContainer>
        <Link to={`/topics/${slug}`}>{topic}</Link>
      </InnerContainer>
      <InnerContainer>
        <TrashIcon onClick={() => handleDeleteTopic(slug)} />
      </InnerContainer>
    </Container>
  )
}

TopicCard.propTypes = {
  topic: PropTypes.string,
  slug: PropTypes.string,
  handleDeleteTopic: PropTypes.func,
}

export default TopicCard
