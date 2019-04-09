import React, { useState, createRef } from 'react'
import { getEvent } from '@/utils/ele'

const Slider = ({ value, verti, box, onChange, start = 0, end = 100 }) => {
  if (!(value >= start && value <= end)) {
    throw new Error('value must be between start and end')
  }
  const sliderRef = createRef()
  const getPercent = (s, v, e) => Number.parseInt(((v - s) / (e - s)) * 100)
  const percent = getPercent(start, value, end)
  const [isMoving, setIsMoving] = useState(false)
  const [startCoord, setStartCoord] = useState(0)
  const getCoord = e => {
    const { clientX, clientY } = getEvent(e)
    return verti ? clientY : clientX
  }
  const getFullGap = () =>
    verti ? sliderRef.current.offsetHeight : sliderRef.current.offsetWidth
  const onMouseDown = e => {
    setIsMoving(true)
    const startCoord =
      getCoord(e) - Number.parseInt((getFullGap() * percent) / 100)
    setStartCoord(startCoord)
  }
  const onMouseMove = e => {
    if (isMoving) {
      const coord = getCoord(e)
      const fullGap = getFullGap()
      if (coord >= startCoord && coord <= startCoord + fullGap) {
        const percent = getPercent(startCoord, coord, startCoord + fullGap)
        onChange(Number.parseInt(start + ((end - start) * percent) / 100))
      }
    }
  }
  const onMouseUp = () => {
    setIsMoving(false)
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
