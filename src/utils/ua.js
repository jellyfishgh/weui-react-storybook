const { userAgent } = window.navigator

export const isIOS = /iP(ad|hone|od)/gi.test(userAgent)

export const isAndroid = () => /android/gi.test(userAgent)
