import React from 'react'
import classnames from 'classnames'

import { placeholder } from './ph.module.less'

const Placeholder = ({ txt }) => (
  <div className={classnames('m-s p-r-m txt-center', placeholder)}>{txt}</div>
)

export default Placeholder
