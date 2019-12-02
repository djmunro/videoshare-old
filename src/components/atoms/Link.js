import styled from '@emotion/styled'
import {lighten} from 'polished'

const Link = styled.a`
  color: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    color: ${({theme}) => lighten(0.1, theme.colors.primary)};
  }
`

export default Link
