import React from 'react'

import { renderEle } from '@/utils/ele'
import classnames from 'classnames'

import Cell from '@/components/WeUI/Cell'

const Panel = ({ hd, bd, ftTxt = '查看更多', ft, access, children }) => {
  if (ft === undefined) {
    ft = () => <Cell className="weui-cell_link" access bd={ftTxt} />
  }
  return (
    <div
      className={classnames('weui-panel', {
        'weui-panel_access': access
      })}
    >
      {hd && <div className="weui-panel__hd">{renderEle(hd)}</div>}
      {(bd || children) && (
        <div className="weui-panel__bd">{renderEle(bd) || children}</div>
      )}
      {ft && <div className="weui-panel__ft">{renderEle(ft)}</div>}
    </div>
  )
}

export default Panel
