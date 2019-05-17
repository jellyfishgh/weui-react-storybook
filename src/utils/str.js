export const upFirst = str => {
  if (!str) return ''
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export const n2s = n => (n < 10 ? `0${n}` : `${n}`)
