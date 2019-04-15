import React, { useState } from 'react'

import classnames from 'classnames'

import { scroll_view, scroll_view__list } from './style.module.less'

const LOADING_STOP = 0
const LOADING_START = 1

const LIMIT = 20
const HOLD_TIME = 1500

const getScrollTop = ({ scrollTop }) => scrollTop

const ScrollView = ({ children, Loader, onPullDown }) => {
  const [loading, setLoading] = useState(LOADING_STOP)
  const [emptyTxt, setEmptyTxt] = useState('暂无数据')
  const [holding, setHolding] = useState(false)
  let viewSrollTop = null
  let inter = null
  const pulldownHandler = () => {
    setLoading(LOADING_START)
    onPullDown()
      .then(() => {
        setLoading(LOADING_STOP)
      })
      .catch(err => {
        setLoading(LOADING_STOP)
        setEmptyTxt(err.message)
        setHolding(true)
        window.setTimeout(() => {
          setHolding(false)
        }, HOLD_TIME)
      })
  }
  const scrollHandler = ({ target }) => {
    if (loading || holding) return
    const { clientHeight, scrollHeight } = target
    if (viewSrollTop === null) viewSrollTop = getScrollTop(target)
    // 向下滚动
    if (getScrollTop(target) > viewSrollTop) {
      viewSrollTop = getScrollTop(target)
      if (inter === null) {
        inter = window.setInterval(() => {
          // 停止滚动
          if (viewSrollTop === getScrollTop(target)) {
            window.clearInterval(inter)
            inter = null
            if (clientHeight + viewSrollTop + LIMIT >= scrollHeight) {
              pulldownHandler()
            }
          }
        })
      }
    } else {
      viewSrollTop = getScrollTop(target)
    }
  }
  return (
    <div className={classnames('full bg-white', scroll_view)}>
      <div
        className={classnames('scroll', scroll_view__list)}
        onScroll={scrollHandler}
      >
        {children}
      </div>
      {(loading || holding) && <Loader loading={loading} emptyTxt={emptyTxt} />}
    </div>
  )
}

export default ScrollView
