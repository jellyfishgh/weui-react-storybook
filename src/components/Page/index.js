import React from 'react'
import classnames from 'classnames'

import PageFt from '@/components/PageFt'
import { renderEle } from '@/utils/ele'

import './page.scss'

const Page = ({
  title,
  desc,
  spacing,
  bdStyle,
  children,
  ft = PageFt,
  ftbt
}) => (
  <div
    className={classnames('page', {
      ftbt
    })}
  >
    {(title || desc) && (
      <div className="page__hd">
        {title && <h1 className="page__title">{renderEle(title)}</h1>}
        {desc && <p className="page__desc">{renderEle(desc)}</p>}
      </div>
    )}
    <div
      className={classnames({ page__bd: true, page__bd_spacing: spacing })}
      style={bdStyle}
    >
      {children}
    </div>
    {ft && (
      <div
        className={classnames('page__ft', {
          'fixed bt bg-page': ftbt
        })}
      >
        {renderEle(ft)}
      </div>
    )}
  </div>
)

export default Page
