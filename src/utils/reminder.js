import { createEleOnPage } from '@/utils/ele'

import Actionsheet from '@/components/WeUI/Actionsheet'

export const actionsheet = ({ items, title, android, cancelTxt }) =>
  new Promise((resolve, reject) => {
    createEleOnPage(Actionsheet, {
      items,
      title,
      android,
      cancelTxt,
      onConfirm: resolve,
      onCancel: reject
    })
  })
