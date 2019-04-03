import React from 'react'
import classnames from 'classnames'

const PageLoading = ({ error }) => (
  <div
    className={classnames([
      'txt-center',
      'p-c-m',
      error ? 'txt-error' : 'txt-info'
    ])}
  >
    {error ? '页面不存在' : '组件加载中...'}
  </div>
)

export default PageLoading
