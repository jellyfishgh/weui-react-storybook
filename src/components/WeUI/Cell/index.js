import React from 'react'
import classnames from 'classnames'

const Cell = ({ hd, bd, ft, access, onClick }) => (
  <div
    className={classnames({
      'weui-cell': true,
      'weui-cell_access': access
    })}
    onClick={onClick}
  >
    {hd && <div className="weui-cell__hd">{hd}</div>}
    {bd && <div className="weui-cell__bd">{bd}</div>}
    {(ft || access) && <div className="weui-cell__ft">{ft}</div>}
  </div>
)

export default Cell
