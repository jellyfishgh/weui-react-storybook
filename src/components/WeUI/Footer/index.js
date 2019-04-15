import React, { Fragment } from 'react'

import ALink from '@/components/ALink'

const renderLink = link => {
  if (link instanceof Array) {
    return (
      <Fragment>
        {link.map((label, index) => (
          <ALink key={index} className="weui-footer__link">
            {label}
          </ALink>
        ))}
      </Fragment>
    )
  }
  return <ALink className="weui-footer__link">{link}</ALink>
}

const Footer = ({ txt, link }) => (
  <div className="weui-footer">
    {link && <p className="weui-footer__links">{renderLink(link)}</p>}
    {txt && <p className="weui-footer__text">{txt}</p>}
  </div>
)

export default Footer
