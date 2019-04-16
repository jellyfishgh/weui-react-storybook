import { createEleOnPage } from '@/utils/ele'

import Actionsheet from '@/components/WeUI/Actionsheet'
import Dialog from '@/components/WeUI/Dialog'

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

export const alert = options => {
  if (typeof options !== 'object') options = { msg: options }
  const { title, msg, confirmTxt = '确定', android } = options
  return new Promise(resolve => {
    createEleOnPage(Dialog, {
      title,
      msg,
      android,
      btns: [confirmTxt],
      onClick: resolve
    })
  })
}

export const confirm = options => {
  if (typeof options !== 'object') options = { msg: options }
  const {
    title,
    msg,
    cancelTxt = '取消',
    confirmTxt = '确定',
    android
  } = options
  return new Promise((resolve, reject) => {
    const btns = [cancelTxt, confirmTxt]
    createEleOnPage(Dialog, {
      title,
      msg,
      android,
      btns,
      onClick: index => {
        if (index === btns.length - 1) {
          resolve && resolve()
        } else {
          reject && reject()
        }
      }
    })
  })
}