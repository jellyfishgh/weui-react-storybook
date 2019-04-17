export const step = (end, start = 0, step = 1) => {
  const arr = []
  for (let i = start; i < end; i += step) {
    arr.push(i)
  }
  return arr
}

export const createList = arr => arr.map(([label, value]) => ({ label, value }))

export const getIndex = (
  value,
  arr,
  fn = (item, v) => item === v,
  defaultIndex = -1
) => {
  let index = -1
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], value)) {
      index = i
      break
    }
  }
  if (index === -1) index = defaultIndex
  return index
}
