import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { register } from './serviceWorker'

import '@/assets/style/weui/index.less'
import '@/assets/style/index.scss'

ReactDOM.render(
  <Router basename={process.env.REACT_APP_NAME}>
    <App />
  </Router>,
  document.getElementById('root')
)
register()
