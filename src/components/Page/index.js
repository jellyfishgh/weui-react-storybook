import React from 'react'
import { Helmet } from 'react-helmet'
import classnames from 'classnames'

import PageFt from '@/components/PageFt'
import { renderEle } from '@/utils/ele'

import './page.scss'

export const PAGE_ID = 'PAGE_ID'
export const MODAL_ID = 'MODAL_ID'

const Page = ({
  title,
  desc,
  spacing,
  bdStyle,
  bdClass,
  children,
  ft = PageFt,
  ftbt,
  className,
  style,
  hd = true
}) => (
  <div
    id={PAGE_ID}
    className={classnames('page scroll', className, {
      ftbt
    })}
    style={style}
  >
    {typeof title === 'string' && (
      <Helmet>
        <title>{title}</title>
      </Helmet>
    )}
    {(title || desc) && hd && (
      <div className="page__hd">
        {title && <h1 className="page__title">{renderEle(title)}</h1>}
        {desc && <p className="page__desc">{renderEle(desc)}</p>}
      </div>
    )}
    <div
      className={classnames('page__bd', { page__bd_spacing: spacing }, bdClass)}
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
