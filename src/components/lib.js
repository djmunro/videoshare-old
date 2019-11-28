/** @jsx jsx */
import {jsx} from '@emotion/core'
import styled from '@emotion/styled'

const Button = styled.button`
  transition: all 0.1s;
  &:hover {
    transition: all 0.2s;
    background-color: #606c76;
    border-color: #606c76;
    color: #fff;
    outline: 0;
  }
`

const SuccessButton = styled(Button)`
  background-color: #3bb272;
  border-color: #3bb272;
`

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

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const CenteredBox = styled(Box)`
  justify-content: center;
`

const CenteredRow = styled(Row)`
  justify-content: center;
`

const Emoji = ({symbol, label = false}) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  )
}

export {CenteredBox, CenteredRow, Button, SuccessButton, IconButton, Row, Emoji}
