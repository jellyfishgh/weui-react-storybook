import { getDaysInMonth } from 'date-fns'
import { n2s } from './str'
import { step, createList } from './arr'

export const getItemsBetween = (start, end, value) => {
  const [sy, sm, sd] = start.split('/').map(v => parseInt(v, 10))
  const [ey, em, ed] = end.split('/').map(v => parseInt(v, 10))
  const [y, m] = value.map(v => parseInt(v, 10))
  const ys = step(ey + 1, sy)
  let ms = step(13, 1)
  const mDaysMax = getDaysInMonth(new Date(y, m - 1)) + 1
  let ds = step(mDaysMax, 1)
  if (y === sy) {
    ms = step(13, sm)
    if (m === sm) {
      ds = step(mDaysMax, sd)
    }
  } else if (y === ey) {
    ms = step(em + 1, 1)
    if (m === em) {
      ds = step(ed + 1, 1)
    }
  }
  return [[ys, '年'], [ms, '月'], [ds, '日']].map(([s, unit]) =>
    createList(s.map(value => [`${value}${unit}`, n2s(value)]))
  )
}
