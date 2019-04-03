import React, { Fragment } from 'react'

import Page from '@/components/Page'
import Button from '@/components/Button'
import PageFt from '@/components/PageFt'

const Buttons = () => {
  return (
    <Page title="Button" desc="按钮" spacing ft={PageFt}>
      {[1, 0].map(plain =>
        [1, 0].map(mini =>
          ['primary', 'default', 'warn'].map((type, index) => (
            <Fragment key={index}>
              <Button
                type={type}
                plain={plain}
                mini={mini}
                onClick={() => console.log(type)}
              >
                {type}
              </Button>
              <Button type={type} plain={plain} mini={mini} loading>
                {type} loading
              </Button>
              <Button type={type} plain={plain} mini={mini} disabled>
                {type} disabled
              </Button>
            </Fragment>
          ))
        )
      )}
    </Page>
  )
}

export default Buttons
