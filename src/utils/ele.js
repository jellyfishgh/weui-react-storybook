import React from 'react'

export const renderEle = Ele => (typeof Ele === 'function' ? <Ele /> : Ele)
