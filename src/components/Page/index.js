import React from 'react'
import classnames from 'classnames'

import './page.scss'

const Page = ({ title, desc, spacing, bdStyle, children, ft }) => (
  <div className="page">
    {(title || desc) && (
      <div className="page__hd">
        {title && <h1 className="page__title">{title}</h1>}
        {desc && <p className="page__desc">{desc}</p>}
      </div>
    )}
    <div
      className={classnames({ page__bd: true, page__bd_spacing: spacing })}
      style={bdStyle}
    >
      {children}
    </div>
    {ft && <div className="page__ft">{ft}</div>}
  </div>
)

export default Page
