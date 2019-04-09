import React from 'react'

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
