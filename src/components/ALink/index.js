import React from 'react'

const ALink = props => (
  <a
    href="void(0);"
    {...props}
    onClick={e => {
      e.preventDefault()
      props.onClick && props.onClick(e)
    }}
  >
    {props.children}
  </a>
)

export default ALink
