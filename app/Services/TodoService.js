import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "../Services/AxiosService.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'brig/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    let results = res.data.data.map(rawData => new Todo(rawData))
    console.log(results)
    ProxyState.todos = results
    //TODO Handle this response from the server
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    this.getTodos()
    //TODO Handle this response from the server
  }

  async toggleTodoStatus(todoId) {

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
    if (todo) {
      if (todo.completed == true) {
        todo.completed = false
      } else {
        todo.completed = true;
      }
      console.log(todo)
      await api.put(url + todoId, todo);
      this.getTodos()
    }

    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    // let res = ProxyState.todos.find(t => t.id == todoId)
    await api.delete(url + todoId)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;