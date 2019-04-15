import React, { Fragment } from 'react'

import Image from '@/components/Image'
import { version } from '../../../package.json'

const PageFt = () => (
  <Fragment>
    <Image name="icon_footer.png" />
    <h6 className="txt-info txt-center">{version}</h6>
  </Fragment>
)

export default PageFt
