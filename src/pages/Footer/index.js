import React, { Fragment } from 'react'

import Page from '@/components/Page'
import Footer from '@/components/WeUI/Footer'

const link = '底部链接'
const txt = 'Copyright © 2008-2016 weui.io'

const config = [[txt], [txt, [link, link]], [txt, link]]

const fts = config.map(([txt, link]) => ({
  txt,
  link
}))

const FooterPage = () => (
  <Page title="Footer" desc="页脚" ftbt>
    {fts.map((ft, index) => (
      <Fragment key={index}>
        <Footer {...ft} />
        <br />
      </Fragment>
    ))}
  </Page>
)

export default FooterPage
