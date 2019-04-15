import React from 'react'

import ALink from '@/components/ALink'

import { renderList } from '@/utils/ele'

const Footer = ({ txt, link }) => (
  <div className="weui-footer">
    {link && (
      <p className="weui-footer__links">
        {renderList(link, ({ children }) => (
          <ALink className="weui-footer__link">{children}</ALink>
        ))}
      </p>
    )}
    {txt && <p className="weui-footer__text">{txt}</p>}
  </div>
)

export default Footer
