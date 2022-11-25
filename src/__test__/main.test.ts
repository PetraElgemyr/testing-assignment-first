/**
 * @jest-environment jsdom
 */

import * as functions from "../ts/functions";
import * as mainFunctions from "../ts/main";
import { Todo } from "../ts/models/Todo";

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

/*
test("should clear list", () => {
  //arrange
  let list: Todo[] = [new Todo("Handla", false), new Todo("Laga mat", false)];
  let spy = jest.spyOn(moduleFunctions, "createHtml").mockReturnValue();
  // moduleFunctions.clearTodos(list);

  //act
  moduleFunctions.clearTodos(list);

  //assert
  expect(spy).toHaveBeenCalled;
  expect(moduleFunctions.createHtml).toHaveBeenCalled();
});
*/

test("should toggle todo", () => {
  //arrange
  let todo: Todo = new Todo("Tvätta", false);
  let spy = jest.spyOn(functions, "changeTodo").mockReturnValue();

  //act
  mainFunctions.toggleTodo(todo);

  //assert
  expect(spy).toHaveBeenCalled();
});
