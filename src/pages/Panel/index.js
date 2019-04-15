import React from 'react'

import Page from '@/components/Page'
import Image from '@/components/Image'
import Panel from '@/components/WeUI/Panel'
import MediaBox from '@/components/WeUI/MediaBox'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'

import { step } from '@/utils/arr'

const desc =
  '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。'

const PanelPage = () => (
  <Page title="Panel" desc="面板">
    <Panel hd="图文组合列表">
      {step(3, 1)
        .map(index => ({
          title: `标题 ${index}`,
          desc
        }))
        .map((props, key) => (
          <MediaBox
            key={key}
            hd={() => (
              <Image className="weui-media-box__thumb" name="WeUI.png" />
            )}
            appmsg
            {...props}
          />
        ))}
    </Panel>
    <Panel hd="文字组合列表">
      {step(3, 1)
        .map(index => ({
          title: `标题 ${index}`,
          desc
        }))
        .map((props, key) => (
          <MediaBox key={key} text bd={null} {...props} />
        ))}
    </Panel>
    <Panel hd="小图文组合列表" ft={null}>
      <MediaBox smallAppmsg bd={null}>
        <Cells>
          {step(3, 1)
            .map(() => '文字标题')
            .map((txt, key) => (
              <Cell
                key={key}
                access
                hd={() => <Image name="icon.png" />}
                bd={() => <p>{txt}</p>}
                bdClass="weui-cell_primary"
              />
            ))}
        </Cells>
      </MediaBox>
    </Panel>
    <Panel hd="文字列表附来源" ft={null}>
      <MediaBox text bd={null} title="标题" desc={desc} info="文字来源" />
      <MediaBox
        text
        bd={null}
        title="标题"
        desc={desc}
        info={['文字来源', '时间']}
      />
      <MediaBox
        text
        bd={null}
        title="标题"
        desc={desc}
        info={[['文字来源', '时间'], '其他信息']}
      />
      <MediaBox
        text
        bd={null}
        title="标题"
        desc={desc}
        info={[['文字来源', '时间'], ['其他信息1', '其他信息2']]}
      />
    </Panel>
  </Page>
)

export default PanelPage
