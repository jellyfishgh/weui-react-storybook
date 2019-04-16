import React from 'react'

import ALink from '@/components/ALink'
import { Cancel } from '@/components/WeUI/Icon/icons'

const Progress = ({ precent = 0, onCancel }) => (
  <div className="weui-progress">
    <div className="weui-progress__bar">
      <div
        className="weui-progress__inner-bar"
        style={{ width: `${precent}%` }}
      />
    </div>
    {onCancel && (
      <ALink className="weui-progress__opr" onClick={onCancel}>
        <Cancel />
      </ALink>
    )}
  </div>
)

export default Progress
