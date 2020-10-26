export default class Quote {
  constructor(data) {
    this.id = data.id
    this.author = data.author
    this.body = data.body
  }

  get Template() {
    return /*html*/`
    <div class="col-6 text-center">
    <h5 class = "text-light bg-fade rounded pb-1">"${this.body}" - ${this.author} </h5>
    </div>
    `
  }
}