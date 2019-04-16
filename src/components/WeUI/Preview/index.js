import React from 'react'
import classnames from 'classnames'

import ALink from '@/components/ALink'

import { renderList } from '@/utils/ele'

const renderBtns = (btns, onClick) => {
  if (typeof btns === 'string') btns = [btns]
  btns = btns.map((children, index) => ({
    className: classnames(
      'weui-form-preview__btn',
      `weui-form-preview__btn_${
        btns.length === 1 || index ? 'primary' : 'default'
      }`
    ),
    children,
    onClick: () => onClick && onClick(index)
  }))
  return renderList(btns, ALink)
}

const PreviewItem = ({ label, value }) => (
  <div className="weui-form-preview__item">
    <label className="weui-form-preview__label">{label}</label>
    <span className="weui-form-preview__value">{value}</span>
  </div>
)

const Preview = ({ hdItems, bdItems, ftBtn, onClick }) => (
  <div className="weui-form-preview">
    {hdItems && hdItems.length && (
      <div className="weui-form-preview__hd">
        {hdItems.map((item, key) => (
          <PreviewItem {...item} key={key} />
        ))}
      </div>
    )}
    {bdItems && bdItems.length && (
      <div className="weui-form-preview__bd">
        {bdItems.map((item, key) => (
          <PreviewItem {...item} key={key} />
        ))}
      </div>
    )}
    {ftBtn && (
      <div className="weui-form-preview__ft">{renderBtns(ftBtn, onClick)}</div>
    )}
  </div>
)

export default Preview
