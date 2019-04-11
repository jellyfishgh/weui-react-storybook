import React, { Fragment } from 'react'

import Page from '@/components/Page'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'
import Badge from '@/components/WeUI/Badge'

const BadgePage = () => (
  <Page title="Badge" desc="徽章" ftbt>
    <Cells title="新消息提示跟摘要信息后，统一在列表右侧">
      <Cell
        access
        bd="单行列表"
        ftClass="font-0"
        ft={() => (
          <Fragment>
            <span style={{ verticalAlign: 'middle', fontSize: '17px' }}>
              详细信息
            </span>
            <Badge dot style={{ marginLeft: '5px', marginRight: '5px' }} />
          </Fragment>
        )}
      />
    </Cells>
    <Cells title="未读数红点跟在主题信息后，统一在列表左侧">
      <Cell
        hdClass="m-rg-m relative"
        hd={() => (
          <Fragment>
            <img
              src={require('@/assets/imgs/pic_160.png')}
              alt="pic_160"
              className="block m-rg-0"
              style={{ width: '50px' }}
            />
            <Badge
              className="absolute"
              style={{ top: '-0.4em', right: '-0.4em' }}
            >
              8
            </Badge>
          </Fragment>
        )}
        bd={() => (
          <Fragment>
            <p>联系人名称</p>
            <p style={{ fontSize: '13px', color: '#888' }}>摘要信息</p>
          </Fragment>
        )}
      />
      <Cell
        access
        bd={() => (
          <Fragment>
            <span className="v-center">单行列表</span>
            <Badge className="m-lt-s">8</Badge>
          </Fragment>
        )}
      />
      <Cell
        access
        bd={() => (
          <Fragment>
            <span className="v-center">单行列表</span>
            <Badge className="m-lt-s">8</Badge>
          </Fragment>
        )}
        ft="详细信息"
      />
      <Cell
        access
        bd={() => (
          <Fragment>
            <span className="v-center">单行列表</span>
            <Badge className="m-lt-s">New</Badge>
          </Fragment>
        )}
      />
    </Cells>
  </Page>
)

export default BadgePage
