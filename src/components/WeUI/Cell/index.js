import React from 'react'
import classnames from 'classnames'

import { renderEle } from '@/utils/ele'

const Cell = ({ hd, bd, ft, access, onClick, className, style }) => (
  <div
    className={classnames('weui-cell', className, {
      'weui-cell_access': access
    })}
    onClick={onClick}
    style={style}
  >
    {hd && <div className="weui-cell__hd">{renderEle(hd)}</div>}
    {bd && <div className="weui-cell__bd">{renderEle(bd)}</div>}
    {(ft || access) && <div className="weui-cell__ft">{renderEle(ft)}</div>}
  </div>
)

export default Cell
