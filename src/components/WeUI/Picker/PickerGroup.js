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
  initWheel = () => {
    if (this.wheel) {
      this.wheel.refresh()
      return
    }
    const { index, onChange } = this.props
    this.wheel = new BScroll(this.wheelRef.current, {
      wheel: {
        selectedIndex: index,
        wheelWrapperClass: 'weui-picker__content',
        wheelItemClass: 'weui-picker__item'
      },
      probeType: 3
    })
    this.wheel.on('scrollEnd', () => {
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
