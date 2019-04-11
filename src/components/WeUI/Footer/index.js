import React, { Fragment } from 'react'

const OneLink = ({ label }) => (
  <a
    href="void(0);"
    className="weui-footer__link"
    onClick={e => e.preventDefault()}
  >
    {label}
  </a>
)

const renderLink = link => {
  if (link instanceof Array) {
    return (
      <Fragment>
        {link.map((label, index) => (
          <OneLink label={label} key={index} />
        ))}
      </Fragment>
    )
  }
  return <OneLink label={link} />
}

const Footer = ({ txt, link }) => (
  <div className="weui-footer">
    {link && <p className="weui-footer__links">{renderLink(link)}</p>}
    {txt && <p className="weui-footer__text">{txt}</p>}
  </div>
)

export default Footer
