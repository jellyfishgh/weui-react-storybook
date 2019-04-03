import React from 'react'
import { withRouter } from 'react-router'
import classnames from 'classnames'

import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'

import './style.scss'

const NavItem = ({
  title,
  icon,
  active,
  items,
  index,
  setActiveIndex,
  history
}) => (
  <li className="nav-item">
    <div
      className={classnames({ 'nav-item_label weui-flex': true, active })}
      onClick={() => setActiveIndex(index)}
    >
      <p className="weui-flex__item">{title}</p>
      <img src={require(`@/assets/imgs/${icon}.png`)} alt={icon} />
    </div>
    {active && (
      <div className="nav-item_list">
        <Cells>
          {items.map(({ path, label }, index) => (
            <Cell
              bd={label}
              access
              key={index}
              onClick={() => history.push(path)}
            />
          ))}
        </Cells>
      </div>
    )}
  </li>
)

export default withRouter(NavItem)
