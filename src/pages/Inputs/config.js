import React from 'react'

export const list = new Array(3)
  .fill(0)
  .map((item, value) => ({ label: `label_${value}`, value }))

export const radioKey = 'radio'
export const checkboxKey = 'checkbox'
export const switchKey = 'switch'
export const areaCodeKey = 'areaCode'
export const idType = 'idType'
export const country = 'country'

export const inputList = [
  [
    'qq',
    'qq',
    {
      type: 'number',
      patter: '[0-9]'
    }
  ],
  [
    '手机号',
    'mobile',
    {
      type: 'tel',
      maxLength: 11
    },
    () => <button className="weui-vcode-btn">获取验证码</button>
  ],
  [
    '日期',
    'date',
    {
      type: 'date'
    }
  ],
  [
    '时间',
    'time',
    {
      type: 'datetime-local'
    }
  ],
  [
    '验证码',
    'vcode',
    {
      type: 'number'
    },
    () => (
      <img
        src={require('@/assets/imgs/vcode.jpg')}
        alt="vcode"
        className="weui-vcode-img"
      />
    )
  ]
]
