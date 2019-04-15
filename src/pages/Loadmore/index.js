import React, { useState } from 'react'

import Page from '@/components/Page'
import ScrollView from '@/components/ScrollView'
import Loadmore from '@/components/WeUI/Loadmore'

import { step } from '@/utils/arr'

const PAGE_SIZE = 10

const LoadmorePage = () => {
  const [list, setList] = useState(step(PAGE_SIZE))
  const getList = () =>
    new Promise((resolve, reject) => {
      const random = Math.random()
      window.setTimeout(() => {
        if (random < 0.2) reject && reject(new Error('接口超时'))
        else if (random < 0.5 || list.length > 30)
          reject && reject(new Error('暂无数据'))
        else {
          const start = list[list.length - 1] + 1
          setList([...list, ...step(start + PAGE_SIZE, start)])
          resolve && resolve()
        }
      }, 2000)
    })
  return (
    <Page title="Loadmore" desc="加载更多" ft={null} onPullDown={getList}>
      <div className="full-w" style={{ height: '200px' }}>
        <ScrollView Loader={Loadmore} onPullDown={getList}>
          {list.map((item, key) => (
            <div key={key} className="p-c-m txt-center">
              {item}
            </div>
          ))}
        </ScrollView>
      </div>
      <div className="full-w m-tp-m" style={{ height: '240px' }}>
        <ScrollView
          Loader={props => <Loadmore {...props} dot />}
          onPullDown={getList}
        >
          {list.map((item, key) => (
            <div key={key} className="p-c-m txt-center">
              {item}
            </div>
          ))}
        </ScrollView>
      </div>
    </Page>
  )
}

export default LoadmorePage
