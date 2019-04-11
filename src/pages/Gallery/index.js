import React, { useState } from 'react'

import Page from '@/components/Page'
import Gallery from '@/components/WeUI/Gallery'

const GalleryPage = () => {
  const [imgs, setImgs] = useState(
    ['pic_article.png', 'vcode.jpg'].map(name =>
      require(`@/assets/imgs/${name}`)
    )
  )
  return (
    <Page>
      <Gallery
        className="block"
        imgs={imgs}
        onDelete={index => setImgs(imgs.map((img, i) => i !== index))}
      />
    </Page>
  )
}

export default GalleryPage
