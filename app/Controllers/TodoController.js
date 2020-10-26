import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template1 = /*html*/`
  <div class = "col-12 text-white">
  <h5>to-do</h5>
  <form onsubmit="app.todoController.addTodo(event)">
      <div class="form-group">
          <div class="d-flex justify-content-between">
              <input type="text" id = "description" name="description" class="form-control" placeholder="Enter todo...">
              <button type="submit" name="" id="" class="btn btn-dark">Add</button>
          </div>
      </div>
  </form>
  </div>
  <div id = "todos"></div>
  `
  document.getElementById('to-do').innerHTML = template1

  let template2 = ""
  ProxyState.todos.forEach(t => template2 += t.Template)
  document.getElementById("todos").innerHTML = template2
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;

    var todo = {
      description: form.description.value,
      completed: false
    };
    try {
      todoService.addTodo(todo);
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      console.log(todoId)
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}