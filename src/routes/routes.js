import Loadable from 'react-loadable'
import { home, items } from '@/pages/Home/config'

import PageLoading from '@/components/PageLoading'

export default items
  .reduce((x, y) => [...x, ...y.items], [home])
  .map(({ path, label }) => ({
    path,
    component: Loadable({
      loader: () => import(`@/pages/${label}`),
      loading: PageLoading
    })
  }))
