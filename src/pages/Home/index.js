import React from 'react'
import { observer } from 'mobx-react'

import Page from '@/components/Page'
import NavItem from '@/components/NavItem'
import Logo from '@/components/Logo'
import PageFt from '@/components/PageFt'
import { desc, items } from './config'
import store, { NO_ACTIVE_INDEX } from './store'

const Home = observer(({ store }) => {
  return (
    <Page title={Logo} desc={desc} ft={PageFt} spacing>
      <ul>
        {items.map((item, index) => (
          <NavItem
            {...item}
            active={index === store.activeIndex}
            setActiveIndex={index => {
              const result =
                index === store.activeIndex ? NO_ACTIVE_INDEX : index
              store.setActiveIndex(result)
            }}
            index={index}
            key={index}
          />
        ))}
      </ul>
    </Page>
  )
})

export default () => <Home store={store} />
