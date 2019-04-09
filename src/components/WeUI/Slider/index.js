import React, { useState, createRef } from 'react'
import { getEvent } from '@/utils/ele'

const Slider = ({ value, verti, box, onChange, start = 0, end = 100 }) => {
  if (!(value > start && value < end)) {
    throw new Error('value must be between start and end')
  }
  const sliderRef = createRef()
  const getPercent = v => Number.parseInt(((v - start) / (end - start)) * 100)
  const [percent, setPercent] = useState(getPercent(value))
  const [isMoving, setIsMoving] = useState(false)
  const [startCoord, setStartCoord] = useState(0)
  const getCoord = e => {
    const { clientX, clientY } = getEvent(e)
    return verti ? clientY : clientX
  }
  const onMouseDown = e => {
    setIsMoving(true)
    setStartCoord(getCoord(e))
  }
  const onMouseMove = e => {
    if (isMoving) {
      const coord = getCoord(e)
      if (coord >= startCoord && coord <= startCoord + sliderRef.offsetWidth) {
        setPercent(getPercent(coord))
      }
    }
  }
  const onMouseUp = () => {
    setIsMoving(false)
    // onChange(Number.parseInt(start * (1 + percent / 100)))
  }
  let sliderStyle = {}
  let innerStyle = {}
  let trackStyle = { width: `${percent}%` }
  let handlerStyle = { left: `${percent}%` }
  if (verti) {
    sliderStyle = {
      padding: '18px 15px',
      width: '2px',
      height: '360px',
      flexDirection: 'column'
    }
    innerStyle = {
      height: '100%',
      width: '2px'
    }
    trackStyle = { height: `${percent}%`, width: '2px' }
    handlerStyle = { top: `${percent}%`, left: '50%' }
  }
  const renderSlider = style => (
    <div className="weui-slider" ref={sliderRef} style={style}>
      <div className="weui-slider__inner" style={innerStyle}>
        <div className="weui-slider__track" style={trackStyle} />
        <div
          className="weui-slider__handler"
          style={handlerStyle}
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          onMouseMove={onMouseMove}
          onTouchMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchEnd={onMouseUp}
        />
      </div>
    </div>
  )
  if (box) {
    return (
      <div className="weui-slider-box" style={sliderStyle}>
        {renderSlider({
          ...sliderStyle,
          height: '1px'
        })}
        <div className="weui-slider-box__value">{value}</div>
      </div>
    )
  }
  return renderSlider(sliderStyle)
}

export default Slider
