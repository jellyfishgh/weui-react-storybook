import React from 'react'

import { renderDlgBtns } from '@/utils/ele'

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
      <div className="weui-form-preview__ft">
        {renderDlgBtns(ftBtn, 'weui-form-preview__btn', onClick)}
      </div>
    )}
  </div>
)

export default Preview
