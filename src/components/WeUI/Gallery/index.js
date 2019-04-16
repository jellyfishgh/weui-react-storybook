import React, { useState, createRef } from 'react'
import classnames from 'classnames'

import ALink from '@/components/ALink'
import { Delete } from '@/components/WeUI/Icons/icons'

import { getEvent } from '@/utils/ele'

const Gallery = ({
  imgs,
  index = 0,
  onDelete,
  onHide,
  onActive,
  className
}) => {
  const [xy, setXY] = useState({ x: 0, y: 0 })
  const getCoord = e => {
    const { clientX, clientY } = getEvent(e)
    return { x: clientX, y: clientY }
  }
  const imgRef = createRef()
  const onMouseDown = e => {
    setXY(getCoord(e))
  }
  const onMouseUp = e => {
    const { x, y } = getCoord(e)
    if (Math.sqrt(Math.pow(x - xy.x, 2) + Math.pow(y - xy.y, 2)) < 3) {
      // 防止隐藏后点击到了后面的图片
      window.setTimeout(onHide, 300)
      return
    }
    const dis = x - xy.x
    if (Math.abs(dis) >= (1 / 5) * imgRef.current.offsetWidth) {
      if (dis > 0 && index > 0) {
        onActive(index - 1)
      }
      if (dis < 0 && index < imgs.length - 1) {
        onActive(index + 1)
      }
    }
  }
  return (
    <div className={classnames('weui-gallery', className)}>
      {imgs && imgs[index] && (
        <span
          ref={imgRef}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchEnd={onMouseUp}
          className="weui-gallery__img"
          style={{ backgroundImage: `url(${imgs[index]})` }}
        />
      )}
      {onDelete && (
        <div className="weui-gallery__opr">
          <ALink
            className="weui-gallery__del"
            onClick={() => {
              onDelete(index)
            }}
          >
            <Delete className="weui-icon_gallery-delete" />
          </ALink>
        </div>
      )}
    </div>
  )
}

export default Gallery
