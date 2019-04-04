import React, { Fragment, useState } from 'react'

const Textarea = props => {
  const [value, setValue] = useState(props.defaultValue || '')
  return (
    <Fragment>
      <textarea
        className="weui-textarea"
        {...props}
        onInput={e => {
          setValue(e.target.value)
          props.onInput && props.onInput(e)
        }}
      />
      {props.maxLength && (
        <div className="weui-textarea-counter">{`${value.length}/${
          props.maxLength
        }`}</div>
      )}
    </Fragment>
  )
}

export default Textarea
