/**
 * @jest-environment jsdom
 */

import { removeAllTodos } from "../ts/functions";
import * as moduleFunctions from "../ts/main";
import { Todo } from "../ts/models/Todo";

test("should be able to click to clear", () => {
  // arrange
  document.body.innerHTML = `
      <button type="button" id="clearTodos">Rensa lista</button>`;
  let spy = jest.spyOn(moduleFunctions, "clearTodos").mockReturnValue();
  moduleFunctions.clearClick();

  // act
  document.getElementById("clearTodos")?.click();

  // assert
  expect(spy).toBeCalled();
});

test("should clear list", () => {
  //arrange
  let list: Todo[] = [new Todo("Handla", false), new Todo("Laga mat", false)];

  //act
  moduleFunctions.clearTodos(list);

  //assert
  expect(moduleFunctions.removeAllTodos).toHaveBeenCalledWith(list);
  //   expect(list).toBe([]);
});
