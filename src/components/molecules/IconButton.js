import styled from '@emotion/styled'

import Button from '../atoms/Button'

const IconButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-size: 1em;
  padding: 0;
  margin: 0;
  transition: all 0.1s;
  ::before {
    transform: translate(-3px, 11px);
    z-index: -1;
    content: '';
    opacity: 0;
    transition: all 0.2s;
    background-color: #aaa;
    box-shadow: 0px 0px 20px 12px #aaa;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    transform: scale(1.1);
    ::before {
      opacity: 1;
    }
  }
  :active {
    transform: scale(0.9);
  }
`

export default IconButton