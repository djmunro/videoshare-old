import React, {Children} from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(${({columns}) => columns}, 1fr);
  grid-gap: ${({gridGap}) => gridGap};
  list-style-type: none;
`

const Column = styled.li`
  display: grid;
  grid-gap: ${({gridGap}) => gridGap};
  grid-auto-rows: max-content;
`

export default function Masonry({
  columns = 3,
  gridGap = '1rem',
  isProvideLi = false,
  children,
}) {
  // split children into N arrays for columns
  const output = Children.toArray(children).reduce((acc, child, i) => {
    acc[i % columns] = [
      ...acc[i % columns],
      isProvideLi ? <li key={child.key}>{child}</li> : child,
    ]
    return acc
  }, new Array(columns).fill([]))

  return (
    <Wrapper columns={columns} gridGap={gridGap}>
      {output.map((column, i) => (
        <Column key={i} gridGap={gridGap}>
          {column}
        </Column>
      ))}
    </Wrapper>
  )
}
