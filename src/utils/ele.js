import React, { Fragment } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import classnames from 'classnames'

import ALink from '@/components/ALink'
import { PAGE_ID, MODAL_ID } from '@/components/Page'

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

export const createEleOnPage = (Ele, props, isRemove) => {
  const page = document.getElementById(PAGE_ID)
  const modal = document.getElementById(MODAL_ID)
  if (page) {
    try {
      unmountComponentAtNode(modal)
      page.removeChild(modal)
    } catch (err) {
    } finally {
      if (isRemove) return
      const div = document.createElement('div')
      div.id = MODAL_ID
      page.appendChild(div)
      const ele = <Ele {...props} />
      render(ele, div)
      return ele
    }
  }
}

export const renderDlgBtns = (
  btns,
  className,
  onClick,
  isPrimary = (index, btns) => btns.length - 1 === index
) => {
  if (typeof btns === 'string') btns = [btns]
  btns = btns.map((children, index) => ({
    className: classnames(
      className,
      `${className}_${isPrimary(index, btns) ? 'primary' : 'default'}`
    ),
    children,
    onClick: () => onClick && onClick(index)
  }))
  return renderList(btns, ALink)
}
