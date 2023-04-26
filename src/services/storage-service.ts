class storageService {

  ls = window.sessionStorage

  setItem(key: string, value: any) {
    value = JSON.stringify(value)
    this.ls.setItem(key, value)
    return true
  }

  getItem(key: string) {
    //I sum "" for transform the value in string before JSON.parse
    let value = this.ls.getItem(key) + ""
    try {
      return JSON.parse(value)
    } catch (e) {
      return null
    }
  }

  removeItem(key: string) {
    this.ls.removeItem(key);
  }
}

export default new storageService();