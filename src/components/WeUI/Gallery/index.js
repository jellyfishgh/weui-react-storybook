import React, { useState, createRef } from 'react'

import { getEvent } from '@/utils/ele'
import { DeleteIcon } from '@/components/WeUI/Icons/icons'

const Gallery = ({ imgs, index, onDelete, onHide, onActive, style }) => {
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
    <div className="weui-gallery" style={style}>
      <span
        ref={imgRef}
        onMouseDown={onMouseDown}
        onTouchStart={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onMouseUp}
        className="weui-gallery__img"
        style={{ backgroundImage: `url(${imgs[index]})` }}
      />
      {onDelete && (
        <div className="weui-gallery__opr">
          <a
            className="weui-gallery__del"
            href="void(0);"
            onClick={e => {
              e.preventDefault()
              onDelete(index)
            }}
          >
            <DeleteIcon className="weui-icon_gallery-delete" />
          </a>
        </div>
      )}
    </div>
  )
}

export default Gallery
