import React from 'react'

import classnames from 'classnames'

const Loadmore = ({
  loading,
  dot,
  loadingTxt = '正在加载',
  emptyTxt = '暂无数据'
}) => (
  <div
    className={classnames(
      'weui-loadmore',
      loading ? '' : { 'weui-loadmore_line': true, 'weui-loadmore_dot': dot }
    )}
  >
    {!!loading && <i className="weui-loading" />}
    <span className="weui-loadmore__tips">
      {loading ? loadingTxt : dot ? '' : emptyTxt}
    </span>
  </div>
)

export default Loadmore
