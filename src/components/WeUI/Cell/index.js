import React, { useState } from 'react'
import classnames from 'classnames'

import { getEvent, renderEle } from '@/utils/ele'

const Cell = ({ hd, bd, ft, access, swiped, onClick, className, style }) => {
  const [isMoving, setIsMoving] = useState(false)
  const [startX, setStartX] = useState(0)
  const [endX, setEndX] = useState(0)
  let ftRef = null,
    onMouseDown,
    onMouseMove,
    onMouseUp
  if (swiped) {
    onMouseDown = e => {
      const { clientX } = getEvent(e)
      setIsMoving(true)
      setStartX(clientX + startX - endX)
      setEndX(clientX)
    }
    onMouseMove = e => {
      if (isMoving) {
        const { clientX } = getEvent(e)
        setEndX(clientX)
      }
    }
    onMouseUp = () => {
      if (isMoving) {
        if (startX - endX >= ftRef.offsetWidth / 2) {
          setEndX(startX - ftRef.offsetWidth)
        } else {
          setEndX(startX)
        }
      }
      setIsMoving(false)
    }
  }
  return (
    <div
      className={classnames('weui-cell', className, {
        'weui-cell_access': access,
        'weui-cell_swiped': swiped
      })}
      onClick={onClick}
      style={style}
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
      onMouseMove={onMouseMove}
      onTouchMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchEnd={onMouseUp}
    >
      {hd && <div className="weui-cell__hd">{renderEle(hd)}</div>}
      {bd && (
        <div
          className="weui-cell__bd"
          style={
            swiped && startX > endX
              ? { transform: `translateX(${endX - startX}px)` }
              : {}
          }
        >
          {renderEle(bd)}
        </div>
      )}
      {(ft || access) && (
        <div className="weui-cell__ft" ref={ref => (ftRef = ref)}>
          {renderEle(
            ft,
            swiped
              ? {
                  reset: () => {
                    setIsMoving(false)
                    setStartX(0)
                    setEndX(0)
                  }
                }
              : {}
          )}
        </div>
      )}
    </div>
  )
}

export default Cell
