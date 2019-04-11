import React from 'react'
import Page from '@/components/Page'

import Flex from '@/components/WeUI/Flex'
import FlexItem from '@/components/WeUI/Flex/FlexItem'
import Placeholder from './Placeholder'
import { step } from '@/utils/arr'

const FlexPage = () => (
  <Page title="Flex" desc="Flex 布局" spacing ftbt>
    {step(5, 1).map(count => (
      <Flex key={count}>
        {step(count).map(index => (
          <FlexItem key={index}>
            <Placeholder txt="WeUI" />
          </FlexItem>
        ))}
      </Flex>
    ))}
    <Flex>
      <Placeholder txt="WeUI" />
      <FlexItem>
        <Placeholder txt="WeUI" />
      </FlexItem>
      <FlexItem>
        <Placeholder txt="WeUI" />
      </FlexItem>
      <Placeholder txt="WeUI" />
    </Flex>
  </Page>
)

export default FlexPage
