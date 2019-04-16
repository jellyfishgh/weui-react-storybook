import React from 'react'

import Icon from './index'

export const Delete = props => <Icon {...props} name="delete" />

export const Success = props => <Icon {...props} name="success" />
export const SuccessMsg = props => <Success {...props} msg />

export const Info = props => <Icon {...props} name="info" />
export const InfoMsg = props => <Info {...props} msg />

export const Warn = props => <Icon {...props} name="warn" />
export const WarnMsg = props => <Warn {...props} msg />

export const PrimaryWarn = props => (
  <Warn className="weui-icon_msg-primary" {...props} />
)
export const PrimaryWarnMsg = props => (
  <WarnMsg className="weui-icon_msg-primary" {...props} />
)

export const Waiting = props => <Icon {...props} name="waiting" />
export const WaitingMsg = props => <Waiting {...props} msg />

export const SuccessNoCircle = props => (
  <Icon {...props} name="success-no-circle" />
)
export const Circle = props => <Icon {...props} name="circle" />
export const Download = props => <Icon {...props} name="download" />
export const InfoCircle = props => <Icon {...props} name="info-circle" />
export const Cancel = props => <Icon {...props} name="cancel" />
export const Search = props => <Icon {...props} name="search" />
