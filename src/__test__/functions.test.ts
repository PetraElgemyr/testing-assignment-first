import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

test("should clear list", () => {
  //arrange
  let theList: Todo[] = [new Todo("Handla", true), new Todo("Laga mat", true)];

  //act
  removeAllTodos(theList);

  //assert
  expect(theList.length).toBe(0);
});

describe("changeTodo", () => {
  test("should change boolean to true", () => {
    //arrange
    let todo: Todo = new Todo("Handla", false);

    //act
    changeTodo(todo);

    //assert
    expect(todo.done).toBe(true);
  });

  test("should change boolean to false", () => {
    //arrange
    let todo: Todo = new Todo("Handla", true);

    //act
    changeTodo(todo);

    //assert
    expect(todo.done).toBe(false);
  });
});

describe("addTodo", () => {
  test("should accept text", () => {
    //arrange
    let todoText = "Sov";
    let todos: Todo[] = [];

    //act
    let response: IAddResponse = addTodo(todoText, todos);

    //assert
    expect(response.success).toBe(true);
  });

  test("should reject text", () => {
    //arrange
    let todoText = "Ät";
    let todos: Todo[] = [];

    //act
    let response: IAddResponse = addTodo(todoText, todos);

    //assert
    expect(response.success).toBe(false);
  });
});
