import React from 'react'

import BtnArea from '@/components/WeUI/BtnArea'
import Icon from '@/components/WeUI/Icon'

import { renderEle, renderDlgBtns } from '@/utils/ele'

const Msg = ({ status, title, desc, btns, extra }) => {
  const onClick = index => btns[index].onClick()
  return (
    <div className="weui-msg">
      {status !== undefined && (
        <div className="weui-msg__icon-area">
          <Icon name={status} msg />
        </div>
      )}
      <div className="weui-msg__text-area">
        {title && <h2 className="weui-msg__title">{renderEle(title)}</h2>}
        {desc && <p className="weui-msg__desc">{renderEle(desc)}</p>}
      </div>
      {btns && (
        <div className="weui-msg__opr-area">
          <BtnArea>
            {renderDlgBtns(
              btns.map(({ txt }) => txt),
              'weui-btn',
              onClick,
              index => !index
            )}
          </BtnArea>
        </div>
      )}
      {extra && <div className="weui-msg__extra-area">{renderEle(extra)}</div>}
    </div>
  )
}

export default Msg
