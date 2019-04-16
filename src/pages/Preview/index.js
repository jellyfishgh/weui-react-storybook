import React from 'react'

import Page from '@/components/Page'
import Preview from '@/components/WeUI/Preview'

import { createList } from '@/utils/arr'

const previewInfo = {
  hdItems: createList([['付款金额', '¥2400.00']]),
  bdItems: createList([
    ['商品', '电动打蛋机'],
    ['标题标题', '名字名字名字'],
    [
      '标题标题',
      '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
    ]
  ])
}

const previewItems = [
  {
    ...previewInfo,
    ftBtn: '操作'
  },
  {
    ...previewInfo,
    ftBtn: ['操作']
  },
  {
    ...previewInfo,
    ftBtn: ['辅助操作', '操作']
  }
]

const PreviewPage = () => (
  <Page title="Preview" desc="表单预览">
    {previewItems.map((item, key) => (
      <Preview {...item} key={key} onClick={index => console.log(index)} />
    ))}
  </Page>
)

export default PreviewPage
