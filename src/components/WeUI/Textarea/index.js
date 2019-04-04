import React, { Fragment } from 'react'

const Textarea = props => (
  <Fragment>
    <textarea className="weui-textarea" {...props} />
    {props.maxlength && (
      <div className="weui-textarea-counter">{`${
        props.value ? props.value.length : 0
      }/${props.maxlength}`}</div>
    )}
  </Fragment>
)

export default Textarea
