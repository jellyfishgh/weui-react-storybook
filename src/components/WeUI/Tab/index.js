import React from 'react'

import { renderEle } from '@/utils/ele'

const Tab = ({ children, prefix, postfix }) => (
  <div className="weui-tab">
    {prefix && renderEle(prefix)}
    <div className="weui-tab__panel">{children}</div>
    {postfix && renderEle(postfix)}
  </div>
)

export default Tab
