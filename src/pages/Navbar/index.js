import React, { useState } from 'react'

import Page from '@/components/Page'
import Navbar from '@/components/WeUI/Navbar'

import { step } from '@/utils/arr'

const NavbarPage = () => {
  const [index, setIndex] = useState(0)

  return (
    <Page ft={null} className="full-h" bdClass="full-h">
      <Navbar items={step(3)} onChange={setIndex} index={index}>
        <div className="txt-center p-c-m">{index}</div>
      </Navbar>
    </Page>
  )
}

export default NavbarPage
