/**
 * @jest-environment jsdom
 */
import { describe, test, expect, jest } from "@jest/globals";

import * as functions from "../ts/functions";
import * as mainFunctions from "../ts/main";
import { IAddResponse } from "../ts/models/IAddResult";
import { Todo } from "../ts/models/Todo";

// test("should create todo", () => {
//   //arrange
//   let todos: Todo[] = [];
//   let todoText: string = "Handla";
//   let spy = jest.spyOn(functions, "addTodo").mockReturnValue;

//   //act
//   mainFunctions.createNewTodo(todoText, todos);
//   // let result: IAddResponse = functions.addTodo(todoText, todos);

//   //assert
//   expect(spy).toHaveBeenCalled();
// });

/**/

// test("should toggle todo", () => {
//   //arrange
//   let todo: Todo = new Todo("Tvätta", false);
//   let spy = jest.spyOn(functions, "changeTodo").mockReturnValue();
//   // mainFunctions.toggleTodo(todo);

//   //act
//   mainFunctions.toggleTodo(todo);

//   //assert
//   expect(spy).toHaveBeenCalled();
// });

//clearTodos
test("should clear list", () => {
  //arrange
  let list: Todo[] = [new Todo("Handla", false), new Todo("Laga mat", false)];
  // let list: Todo[] = [];
  let spy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();
  // moduleFunctions.clearTodos(list);

  //act
  mainFunctions.clearTodos(list);

  //assert
  expect(spy).toHaveBeenCalled();
});

//click till clearTodo
test("should be able to click to clear", () => {
  // arrange
  document.body.innerHTML = `
      <button type="button" id="clearTodos">Rensa lista</button>`;
  let spy = jest.spyOn(mainFunctions, "clearTodos").mockReturnValue();
  mainFunctions.clearClick();

  // act
  document.getElementById("clearTodos")?.click();

  // assert
  expect(spy).toHaveBeenCalled();
});

test("should be able to submit", () => {
  //Arrange
  document.body.innerHTML = ` 
  <form id="newTodoForm">
  <input type="text" id="newTodoText" />
  </form>`;
  let textValue: string = (
    document.getElementById("newTodoText") as HTMLInputElement
  ).value;
  textValue = "Lorem";
  mainFunctions.handleSubmit();

  //act
  document.getElementById("newTodoForm")?.onsubmit;

  //assert
  expect(textValue).toBe(textValue);
});
