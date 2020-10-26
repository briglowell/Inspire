import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"
export default class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data._id || generateId();
    this.completed = data.completed || false
    this.user = data.user

  }

  get Template() {
    return /*html */`

    <div class="col-12 text-white d-flex justify-content-around">
      <p>${this.description}</p>
      <div class="checkbox">
          <label><input type= "checkbox" value = "" class="strikethrough" onclick = "app.todoController.toggleTodoStatus('${this.id}')"></label>
        </div>
        <button class = "text-danger mb-4 close" onclick = "app.todoController.removeTodo('${this.id}')"><span>&times;</span>
        </button>
    </div>

    `
  }

  completedStatus(id) {

  }
}