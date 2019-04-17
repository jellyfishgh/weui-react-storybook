import { createEleOnPage } from '@/utils/ele'

import Actionsheet from '@/components/WeUI/Actionsheet'
import Dialog from '@/components/WeUI/Dialog'
import Toast from '@/components/WeUI/Toast'
import Picker from '@/components/WeUI/Picker'

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

export const loading = (msg = '加载中...') =>
  createEleOnPage(Toast, {
    msg,
    icon: 'loading'
  })

export const stopLoading = () => {
  createEleOnPage(null, null, true)
}

export const toast = options => {
  if (typeof options === 'string') {
    options = { msg: options }
  }
  createEleOnPage(Toast, options)
}

export const picker = ({ items, title, value }) => {
  if (!(value instanceof Array)) value = [value]
  if (!(items[0] instanceof Array)) items = [items]
  return new Promise((resolve, reject) => {
    createEleOnPage(Picker, {
      items,
      value,
      title,
      onConfirm: resolve,
      onCancel: reject
    })
  })
}
