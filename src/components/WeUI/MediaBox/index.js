import React, { Fragment } from 'react'
import classnames from 'classnames'

import { renderEle, getTag, renderList } from '@/utils/ele'

const InfoMeta = ({ children, extra }) => (
  <div
    className={classnames('weui-media-box__info__meta', {
      'weui-media-box__info__meta_extra': extra
    })}
  >
    {children}
  </div>
)

const renderInfo = info => {
  if (typeof info === 'string') return renderList(info, InfoMeta)
  if (info instanceof Array) {
    if (info[0] instanceof Array) {
      return (
        <Fragment>
          {renderList(info[0], InfoMeta)}
          {renderList(info[1], props => (
            <InfoMeta extra {...props} />
          ))}
        </Fragment>
      )
    } else {
      return renderList(info, InfoMeta)
    }
  }
}

const MediaBox = ({
  appmsg,
  text,
  smallAppmsg,
  title,
  desc,
  info,
  hd,
  bd,
  ft,
  children
}) => {
  const createTitleDesc = () => (
    <Fragment>
      <h4 className="weui-media-box__title">{title}</h4>
      <p className="weui-media-box__desc">{desc}</p>
      {info && <ul className="weui-media-box__info">{renderInfo(info)}</ul>}
    </Fragment>
  )
  if (bd === undefined) {
    bd = createTitleDesc
  }
  const Tag = getTag(appmsg)
  return (
    <Tag
      className={classnames('weui-media-box', {
        'weui-media-box_appmsg': appmsg,
        'weui-media-box_text': text,
        'weui-media-box_small-appmsg': smallAppmsg
      })}
    >
      {hd && <div className="weui-media-box__hd">{renderEle(hd)}</div>}
      {bd || children ? (
        <div className="weui-media-box__bd">{renderEle(bd) || children}</div>
      ) : (
        createTitleDesc()
      )}
      {ft && <div className="weui-media-box__ft">{renderEle(ft)}</div>}
    </Tag>
  )
}

export default MediaBox
