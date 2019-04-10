import React, { Fragment } from 'react'

import { renderEle } from '@/utils/ele'

const getHB = ladder => {
  let Hd
  let Bd = ({ children }) => <section>{children}</section>
  if (ladder === 1) {
    Hd = ({ title }) => <h1>{title}</h1>
    Bd = ({ children }) => <Fragment>{children}</Fragment>
  } else if (ladder === 2) {
    Hd = ({ title }) => <h2>{title}</h2>
  } else if (ladder === 3) {
    Hd = ({ title }) => <h3>{title}</h3>
  } else {
    Hd = ({ title }) => <div>{title}</div>
  }
  return {
    Hd,
    Bd
  }
}

const Article = ({ content }) => {
  const renderSections = (sections, ladder) => {
    const { Hd, Bd } = getHB(ladder)
    if (sections && sections.length) {
      return sections.map((sec, index) => {
        const { title, sections } = sec
        if (title || sections)
          return (
            <Bd key={index}>
              {title ? <Hd title={title} /> : null}
              {renderSections(sections, ladder + 1)}
            </Bd>
          )
        return <p key={index}>{renderEle(sec)}</p>
      })
    }
    return null
  }
  return <div className="weui-article">{renderSections(content, 1)}</div>
}

export default Article
