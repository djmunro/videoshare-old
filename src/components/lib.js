/** @jsx jsx */
import {jsx} from '@emotion/core'

import {keyframes} from '@emotion/core'
import {FaSpinner} from 'react-icons/fa'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

export function Spinner(props) {
  return (
    <FaSpinner
      css={{animation: `${spin} 1s linear infinite`}}
      aria-label="loading"
      {...props}
    />
  )
}

export function FullPageSpinner() {
  return (
    <div css={{marginTop: '3em', fontSize: '4em'}}>
      <Spinner />
    </div>
  )
}

export function Emoji({symbol, label = false}) {
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
