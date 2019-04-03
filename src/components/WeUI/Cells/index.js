import React, { isValidElement, Fragment } from 'react'

import classnames from 'classnames'

const Cells = ({ title, tips, form, children }) => {
  const renderCells = () => (
    <div
      className={classnames({ 'weui-cells': true, 'weui-cells_form': form })}
    >
      {children}
    </div>
  )
  if (tips || title)
    return (
      <Fragment>
        {title && (
          <div className="weui-cells__title">
            {isValidElement(title) ? <title /> : title}
          </div>
        )}
        {renderCells()}
        {tips && (
          <div className="weui-cells__tips">
            {isValidElement(title) ? <title /> : title}
          </div>
        )}
      </Fragment>
    )
  return renderCells()
}

export default Cells
