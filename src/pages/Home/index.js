import React, { useState } from 'react'

import Page from '@/components/Page'
import NavItem from '@/components/NavItem'
import Logo from '@/components/Logo'
import PageFt from '@/components/PageFt'
import { desc, items } from './config'

const NO_ACTIVE_INDEX = -1
const DEFAULT_ACTIVE_INDEX = NO_ACTIVE_INDEX

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX)
  return (
    <Page title={Logo} desc={desc} ft={PageFt} spacing>
      <ul>
        {items.map((item, index) => (
          <NavItem
            {...item}
            active={index === activeIndex}
            setActiveIndex={index =>
              setActiveIndex(index === activeIndex ? NO_ACTIVE_INDEX : index)
            }
            index={index}
            key={index}
          />
        ))}
      </ul>
    </Page>
  )
}

export default Home
