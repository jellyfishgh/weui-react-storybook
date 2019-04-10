import React from 'react'

import Page from '@/components/Page'
import Article from '@/components/WeUI/Article'

import { content } from './config'

const ArticlePage = () => (
  <Page title="Article" desc="文章">
    <Article content={content} />
  </Page>
)

export default ArticlePage
