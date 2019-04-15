import React from 'react'

import { renderEle } from '@/utils/ele'
import classnames from 'classnames'

const Pane = ({ hd, bd, ft, access }) => (
  <div
    className={classnames('weui-panel', {
      'weui-panel_access': access
    })}
  >
    {hd && <div className="weui-panel__hd">{renderEle(hd)}</div>}
    {bd && <div className="weui-panel__bd">{renderEle(bd)}</div>}
    {ft && <div className="weui-panel__ft">{renderEle(ft)}</div>}
  </div>
)

export default Pane
