import React, { Component } from 'react'

import ALink from '@/components/ALink'
import Mask from '@/components/WeUI/Mask'

import PickerGroup from './PickerGroup'

import { getIndex, getValue } from '@/utils/arr'

class Picker extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      hide: false,
      index: []
    }
  }
  componentDidMount() {
    this.initIndex()
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.value !== prevProps.value ||
      this.props.items !== prevProps.items
    ) {
      this.initIndex()
    }
  }

  setHide = hide => {
    this.setState({ hide })
  }
  setIndex = index => {
    this.setState({ index })
  }
  initIndex = () => {
    const { value = [], items } = this.props
    this.setIndex(
      items.map((group, index) =>
        getIndex(value[index], group, (item, v) => item.value === v, 0)
      )
    )
  }
  cancelHandler = () => {
    this.setHide(true)
    this.props.onCancel && this.props.onCancel()
  }
  confirmHandler = () => {
    this.setHide(true)
    this.props.onConfirm &&
      this.props.onConfirm(getValue(this.props.items, this.state.index))
  }
  changeHandler = (selectedIndex, groupIndex) => {
    const newIndex = [...this.state.index]
    if (newIndex[groupIndex] === selectedIndex) return
    newIndex[groupIndex] = selectedIndex
    this.setIndex(newIndex)
    this.props.onChange &&
      this.props.onChange(getValue(this.props.items, newIndex))
  }
  render() {
    const { index, hide } = this.state
    const { items, title } = this.props
    const { cancelHandler, confirmHandler, changeHandler } = this
    return (
      <Mask
        className={`weui-animate-fade-${hide ? 'out' : 'in'}`}
        {...{ hide }}
      >
        <div
          className={`weui-picker weui-animate-slide-${hide ? 'down' : 'up'}`}
        >
          <div className="weui-picker__hd">
            <ALink className="weui-picker__action" onClick={cancelHandler}>
              取消
            </ALink>
            {title && <div className="txt-info txt-center">{title}</div>}
            <ALink className="weui-picker__action" onClick={confirmHandler}>
              确定
            </ALink>
          </div>
          <div className="weui-picker__bd">
            {items.map((group, groupIndex) => (
              <PickerGroup
                key={groupIndex}
                items={group}
                index={index[groupIndex]}
                onChange={selectedIndex =>
                  changeHandler(selectedIndex, groupIndex)
                }
              />
            ))}
          </div>
        </div>
      </Mask>
    )
  }
}

export default Picker
