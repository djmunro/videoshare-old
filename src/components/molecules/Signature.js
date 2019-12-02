import React from 'react'
import styled from '@emotion/styled'

import Paragraph from '../atoms/Paragraph'
import Link from '../atoms/Link'

const Container = styled.footer`
  text-align: center;
  margin: 3rem 0;
`

const Signature = () => (
  <Container>
    <Paragraph>
      Code wizardry by <Link href="mailto:munrodj86@gmail.com">@dmunro</Link>
    </Paragraph>
  </Container>
)

export default Signature
