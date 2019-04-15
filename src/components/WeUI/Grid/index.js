import React from 'react'

import ALink from '@/components/ALink'

import { renderEle } from '@/utils/ele'

const GridItem = ({ icon, label, width, onClick }) => (
  <ALink className="weui-grid" onClick={onClick} style={{ width }}>
    <div className="weui-grid__icon">{renderEle(icon)}</div>
    <p className="weui-grid__label">{renderEle(label)}</p>
  </ALink>
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
