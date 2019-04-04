import React from 'react'

import Page from '@/components/Page'
import PageFt from '@/components/PageFt'
import Button from '@/components/WeUI/Button'

const Buttons = () => {
  return (
    <Page title="Button" desc="按钮" spacing ft={PageFt}>
      {[1, 0].map(disabled =>
        [1, 0].map(mini =>
          [1, 0].map(loading =>
            [1, 0].map(plain =>
              ['primary', 'default', 'warn'].map((type, index) => (
                <Button
                  key={`${plain}${mini}${loading}${disabled}${type}${index}`}
                  {...{ disabled, mini, loading, plain, type }}
                  onClick={() => console.log(type)}
                >
                  {type}
                </Button>
              ))
            )
          )
        )
      )}
    </Page>
  )
}

export default Buttons
