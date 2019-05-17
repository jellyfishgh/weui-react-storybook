import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { version } from '../package.json'

import App from './App'
import { register } from './serviceWorker'

import '@/assets/style/weui/index.less'
import '@/assets/style/index.scss'

window.addEventListener('contextmenu', function(e) {
  e.preventDefault()
})

ReactDOM.render(
  <Router basename={process.env.REACT_APP_NAME}>
    <App />
  </Router>,
  document.getElementById('root')
)
register()
if (
  (process.env.NODE_ENV === 'production' &&
    process.env.GENERATE_SOURCEMAP === 'true') ||
  process.env.NODE_ENV === 'development'
) {
  const VConsole = require('vconsole')
  new VConsole()
  console.log(`${process.env.REACT_APP_NAME}@${version}`)
}
