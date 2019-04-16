import React, { useState, Fragment } from 'react'

import Gallery from '@/components/WeUI/Gallery'
import Cells from '@/components/WeUI/Cells'
import Cell from '@/components/WeUI/Cell'
// import Toast from '@/components/WeUI/Toast'
import { Warn } from '@/components/WeUI/Icon/icons'

const PureUploader = ({
  title = '图片上传',
  limit = 9,
  imgs,
  onAddImg,
  onShowImg
}) => (
  <div className="weui-uploader">
    <div className="weui-uploader__hd">
      <p className="weui-uploader__title">{title}</p>
      <div className="weui-uploader__info">
        {imgs.length}/{limit}
      </div>
    </div>
    <div className="weui-uploader__bd">
      <ul className="weui-uploader__files">
        {imgs.map(({ pic, content, error }, key) => (
          <li
            onClick={({ target, currentTarget }) => {
              if (target === currentTarget) {
                onShowImg(key)
              }
            }}
            key={key}
            className="weui-uploader__file"
            style={{ backgroundImage: `url(${pic})` }}
          >
            {content && (
              <div className="weui-uploader__file-content">
                {error ? <Warn /> : content}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="weui-uploader__input-box">
        <input
          type="file"
          className="weui-uploader__input"
          accept="image/*"
          multiple
          onChange={e => {
            if (e.target.files.length + imgs.length > limit) {
              // todo 改用 toast
              window.alert(`最多只能上传${limit}张图片`)
              return
            }
            const URL = window.URL || window.webkitURL
            const pics = []
            for (let i = 0; i < e.target.files.length; i++) {
              pics[i] = {
                pic: URL.createObjectURL(e.target.files[i])
              }
            }
            onAddImg(pics)
          }}
        />
      </div>
    </div>
  </div>
)

const Uploader = props => {
  const [imgs, setImgs] = useState([])
  const [index, setIndex] = useState(-1)
  return (
    <Fragment>
      {imgs[index] && (
        <Gallery
          className="block"
          imgs={imgs.map(({ pic }) => pic)}
          index={index}
          onDelete={delIndex => {
            const newImgs = imgs.filter((img, i) => i !== delIndex)
            setImgs(newImgs)
            if (!newImgs[index]) {
              setIndex(-1)
            }
          }}
          onHide={() => setIndex(-1)}
          onActive={setIndex}
        />
      )}
      <Cells form>
        <Cell
          bd={() => (
            <PureUploader
              {...props}
              imgs={imgs}
              onAddImg={newImgs => setImgs([...newImgs, ...imgs])}
              onShowImg={setIndex}
            />
          )}
        />
      </Cells>
    </Fragment>
  )
}

export default Uploader
