import { decorate, observable, action } from 'mobx'

export const NO_ACTIVE_INDEX = -1

const DEFAULT_ACTIVE_INDEX = NO_ACTIVE_INDEX

class Store {
  activeIndex = DEFAULT_ACTIVE_INDEX
  setActiveIndex(index) {
    this.activeIndex = index
  }
}

new decorate(Store, {
  activeIndex: observable,
  setActiveIndex: action
})

export default new Store()
