import React, { Fragment } from 'react'

import ALink from '@/components/ALink'

export const renderEle = (Ele, props = {}) =>
  typeof Ele === 'function' ? <Ele {...props} /> : Ele

export const getEvent = event => {
  let { type, touches, changedTouches } = event
  if (['touchstart'].includes(type)) {
    return touches[0]
  }
  if (['touchmove', 'touchend'].includes(type)) {
    return changedTouches[0]
  }
  return event
}

export const getTag = isLink => props =>
  isLink ? <ALink {...props} /> : <div {...props}>{props.children}</div>

export const renderLabel = children =>
  typeof children === 'string' ? { children } : children

export const renderList = (list, Ele) => {
  if (list instanceof Array) {
    return (
      <Fragment>
        {list.map((item, key) => (
          <Ele key={key} {...renderLabel(item)} />
        ))}
      </Fragment>
    )
  }
  return <Ele {...renderLabel(list)} />
}
