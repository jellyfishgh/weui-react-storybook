import React from 'react'

import { renderEle } from '@/utils/ele'

const GridItem = ({ icon, label, width, onClick }) => (
  <a
    href="void(0);"
    className="weui-grid"
    onClick={e => {
      e.preventDefault()
      onClick && onClick()
    }}
    style={{ width }}
  >
    <div className="weui-grid__icon">{renderEle(icon)}</div>
    <p className="weui-grid__label">{renderEle(label)}</p>
  </a>
)

const Grid = ({ items, onClick, count = 3 }) => (
  <div className="weui-grids">
    {items.map((item, index) => (
      <GridItem
        {...item}
        key={index}
        onClick={() => onClick(index)}
        width={`${100 / count}%`}
      />
    ))}
  </div>
)

export default Grid
