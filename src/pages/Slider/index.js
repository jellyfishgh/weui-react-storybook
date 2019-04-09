import React, { useState } from 'react'

import Page from '@/components/Page'
import Slider from '@/components/WeUI/Slider'

const SliderPage = () => {
  const [value, setValue] = useState(20)
  return (
    <Page title="slider" desc={`滑块(${value})`} spacing>
      <Slider value={value} onChange={setValue} />
      <Slider value={value} onChange={setValue} box />
      <Slider value={value} onChange={setValue} start={0} end={100} />
      <Slider value={value} onChange={setValue} verti />
      <Slider value={value} onChange={setValue} verti box />
    </Page>
  )
}

export default SliderPage
