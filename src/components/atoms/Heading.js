import React from 'react'
import PropTypes from 'react'
import styled from '@emotion/styled'

const StyledHeading = styled.h1`
  font-weight: ${({theme}) => theme.typography.heading.fontWeight};
  color: ${({theme}) => theme.typography.heading.color};
  transition: color 0.2s;
`

const Heading = ({size, children}) => {
  return <StyledHeading as={`h${size}`}>{children}</StyledHeading>
}

// Heading.propTypes = {
//   size: PropTypes.number,
// }

// Heading.defaultProps = {
//   size: 1,
// }

export default Heading
