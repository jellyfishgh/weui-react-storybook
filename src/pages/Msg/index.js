import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Page from '@/components/Page'
import ALink from '@/components/ALink'
import Button from '@/components/WeUI/Button'
import Footer from '@/components/WeUI/Footer'

import { alert } from '@/utils/reminder'

import Result from './Result'
import store from './store'

const RESULT_PATH = '/msg/result'

const ActionsheetPage = ({ history }) => {
  const ope = txt => alert(txt).then(history.goBack)
  const btns = ['推荐操作', '辅助操作'].map(txt => ({
    txt,
    onClick: () => ope(txt)
  }))
  const onClick = (status, title) => {
    store.setResult({
      status,
      title,
      desc: () => (
        <Fragment>
          内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现
          <ALink>文字链接</ALink>
        </Fragment>
      ),
      btns,
      extra: () => (
        <Footer link="底部链接文本" txt="Copyright © 2008-2016 weui.io" />
      )
    })
    history.push(RESULT_PATH)
  }
  return (
    <Page title="Msg" desc="提示页" spacing ftbt>
      <Button onClick={() => onClick('success', '操作成功')}>成功页</Button>
      <Button onClick={() => onClick('warn', '操作失败')}>失败页</Button>
    </Page>
  )
}

export default () => (
  <Router>
    <Switch>
      <Route extra path={RESULT_PATH} component={Result} />
      <Route path="*" component={ActionsheetPage} />
    </Switch>
  </Router>
)
