import { ProxyState } from "../AppState.js";
export default class Image {
  constructor(data) {
    this.id = data.id
    this.url = data.large_url || data.url
  }
}