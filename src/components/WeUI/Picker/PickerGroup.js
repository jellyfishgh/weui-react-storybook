import React, { createRef, Component } from 'react'
import BScroll from 'better-scroll'

class PickerGroup extends Component {
  constructor(props, context) {
    super(props, context)
    this.wheelRef = createRef()
    this.wheel = null
  }
  componentDidMount() {
    this.initWheel()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.index !== prevProps.index) {
      this.initWheel()
    }
  }
  initWheel = () => {
    const { index, onChange } = this.props
    if (this.wheel) {
      this.autoWheel = true
      this.wheel.wheelTo(index)
      window.setTimeout(() => {
        this.wheel.refresh()
        this.autoWheel = false
      }, 100)
      return
    }
    this.wheel = new BScroll(this.wheelRef.current, {
      wheel: {
        selectedIndex: index,
        wheelWrapperClass: 'weui-picker__content',
        wheelItemClass: 'weui-picker__item'
      },
      probeType: 3
    })
    this.wheel.on('scrollEnd', () => {
      if (this.autoWheel) return
      onChange(this.wheel.getSelectedIndex())
    })
  }
  render() {
    return (
      <div className="weui-picker__group" ref={this.wheelRef}>
        <div className="weui-picker__content">
          {this.props.items.map(({ label, value }) => (
            <div className="weui-picker__item" key={value}>
              {label}
            </div>
          ))}
        </div>
        <div className="weui-picker__mask" />
        <div className="weui-picker__indicator" />
      </div>
    )
  }
}

export default PickerGroup
