export const step = (end, start = 0, step = 1) => {
  const arr = []
  for (let i = start; i < end; i += step) {
    arr.push(i)
  }
  return arr
}

export const createList = arr => arr.map(([label, value]) => ({ label, value }))
