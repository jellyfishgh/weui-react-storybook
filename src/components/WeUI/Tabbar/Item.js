import React from 'react'
import classnames from 'classnames'

import ALink from '@/components/ALink'
import Badge from '@/components/WeUI/Badge'

const Item = ({ label, icon, badge, active, onClick }) => {
  const renderIcon = () => (
    <img className="weui-tabbar__icon" alt={label} src={icon} />
  )
  return (
    <ALink
      onClick={onClick}
      className={classnames('weui-tabbar__item', {
        'weui-bar__item_on': active
      })}
    >
      {badge ? (
        <div className="inline-block relative">
          {renderIcon()}
          <Badge {...badge} />
        </div>
      ) : (
        renderIcon()
      )}
      <p className="weui-tabbar__label">{label}</p>
    </ALink>
  )
}

export default Item
