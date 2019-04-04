import React, { Fragment } from 'react'

import classnames from 'classnames'

const Cells = ({ title, tips, form, radio, checkbox, children }) => {
  const renderCells = () => (
    <div
      className={classnames('weui-cells', {
        'weui-cells_form': form,
        'weui-cells_radio': radio,
        'weui-cells_checkbox': checkbox
      })}
    >
      {children}
    </div>
  )
  if (tips || title)
    return (
      <Fragment>
        {title && <div className="weui-cells__title">{title}</div>}
        {renderCells()}
        {tips && <div className="weui-cells__tips">{tips}</div>}
      </Fragment>
    )
  return renderCells()
}

export default Cells
