import React from 'react'

import Page from '@/components/Page'
import IconBox from '@/components/IconBox'
import {
  SuccessMsg,
  InfoMsg,
  WarnMsg,
  PrimaryWarnMsg,
  WaitingMsg,
  Success,
  SuccessNoCircle,
  Circle,
  Warn,
  Download,
  InfoCircle,
  Cancel,
  Search
} from '@/components/WeUI/Icon/icons'

const IconsPage = () => (
  <Page title="Icons" desc="图标" spacing ftbt bdClass="p-r-xxxl">
    {[
      [SuccessMsg, '成功', '用于表示操作顺利达成'],
      [
        InfoMsg,
        '提示',
        '用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息'
      ],
      [WarnMsg, '普通警告', '用于表示操作后将引起一定后果的情况'],
      [
        PrimaryWarnMsg,
        '强烈警告',
        '用于表示操作后将引起严重的不可挽回的后果的情况'
      ],
      [WaitingMsg, '等待', '用于表示等待']
    ].map(([Icon, title, desc], key) => (
      <IconBox
        key={key}
        {...{
          Icon: () => <Icon style={{ marginRight: '18px' }} />,
          title,
          desc
        }}
      />
    ))}
    <div className="m-tp-m">
      {[
        Success,
        SuccessNoCircle,
        Circle,
        Warn,
        Download,
        InfoCircle,
        Cancel,
        Search
      ].map((Icon, key) => (
        <Icon key={key} />
      ))}
    </div>
  </Page>
)

export default IconsPage
