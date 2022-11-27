import { describe, test, expect, jest } from "@jest/globals";
import { IAddResponse } from "./models/IAddResult";
import { Todo } from "./models/Todo";

export function addTodo(todoText: string, todos: Todo[]): IAddResponse {
  if (todoText.length > 2) {
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);
    console.log(newTodo);
    console.log(todos);

    return { success: true, error: "Du måste ange minst två bokstäver" };
  } else {
    return { success: false, error: "Du måste ange minst två bokstäver" };
  }
}

export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
  console.log(todo.done);
}

export function removeAllTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
}
