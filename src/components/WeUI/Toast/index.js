import React, { Component } from 'react'

import Mask from '@/components/WeUI/Mask'
import { SuccessNoCircle } from '@/components/WeUI/Icon/icons'

class Toast extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      hide: false
    }
  }
  componentDidMount() {
    const { icon, timeout = 1500 } = this.props
    if (icon !== 'loading' && timeout) {
      window.setTimeout(() => {
        this.setState({ hide: true })
      }, timeout)
    }
  }
  render() {
    const { icon, msg } = this.props
    let style = {
      width: 'auto',
      maxWidth: '96%',
      transform: 'translateX(-50%)',
      marginRight: '-100%',
      marginLeft: 0,
      minHeight: 0,
      maxHeight: '20%',
      overflow: 'auto'
    }
    if (icon) style = {}
    return (
      <Mask hide={this.state.hide} transparent>
        <div className="weui-toast" style={style}>
          {icon &&
            (icon === 'loading' ? (
              <i className="weui-loading weui-icon_toast" />
            ) : (
              <SuccessNoCircle className="weui-icon_toast" />
            ))}
          <p className="weui-toast__content">{msg}</p>
        </div>
      </Mask>
    )
  }
}

export default Toast
