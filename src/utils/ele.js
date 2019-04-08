import React from 'react'

export const renderEle = (Ele, props = {}) =>
  typeof Ele === 'function' ? <Ele {...props} /> : Ele

export const getEvent = event => {
  let { type, touches } = event
  if (['touchstart', 'touchmove', 'touchend'].includes(type)) {
    return touches[0]
  }
  return event
}
