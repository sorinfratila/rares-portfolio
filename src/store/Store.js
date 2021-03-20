export default class Store {
  static instance;
  constructor() {
    if (Store.instance) {
      return Store.instance;
    }

    this.instance = this;
  }

  getStore() {
    return Store.instance;
  }

  setStore(newStoreInstance) {
    Store.instance = newStoreInstance;
  }
}
