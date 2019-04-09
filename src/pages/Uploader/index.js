import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Page from '@/components/Page'
import Uploader from '@/components/WeUI/Uploader'

const UploaderPage = () => (
  <Page
    title="Uploader"
    desc={() => (
      <Fragment>
        上传组件，一般配合
        <Link className="link" to="/gallery">
          组件Gallery
        </Link>
        来使用。
      </Fragment>
    )}
  >
    <Uploader />
  </Page>
)

export default UploaderPage
