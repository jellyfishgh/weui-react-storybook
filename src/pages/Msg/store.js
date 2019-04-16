import { decorate, observable, action } from 'mobx'

class Store {
  result = {}
  setResult(result) {
    this.result = result
  }
}

new decorate(Store, {
  result: observable,
  setResult: action
})

export default new Store()
