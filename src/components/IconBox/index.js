import React from 'react'

import * as style from './style.module.less'

const IconBox = ({ Icon, title, desc }) => (
  <div className={style['icon-box']}>
    <Icon />
    <div className={style['icon-box__ctn']}>
      <h3 className={style['icon-box__title']}>{title}</h3>
      <p className={style['icon-box__desc']}>{desc}</p>
    </div>
  </div>
)

export default IconBox
