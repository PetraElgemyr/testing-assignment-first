/**
 *@jest-environment jsdom
 */

//importerar alla mina funktioner från main.ts till main.test.ts
import * as functions from "./../ts/main";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { describe, test, expect, jest } from "@jest/globals";
import * as fnsFunctions from "./../ts/functions";

describe("createNewTodo", () => {
  test("should run createHTML when success=true", () => {
    //Arrange
    let todos: Todo[] = [];
    let theText: string = "hej";
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //Act
    functions.createNewTodo(theText, todos);

    //Assert
    expect(spy).toBeCalledTimes(1);
  });

  test("if the result.success==false", () => {
    //Arrange
    let todos: Todo[] = [];
    let aText: string = "m";
    let spy = jest.spyOn(functions, "displayError").mockReturnValue();

    //Act
    functions.createNewTodo(aText, todos);

    //Assert
    expect(spy).toBeCalledTimes(1);
  });
});

describe("createHtml", () => {
  test("should loop my list", () => {
    //Arrange
    //Act
    //Assert
  });

  test("should empty ul", () => {
    //Arrange
    let todos: Todo[] = [new Todo("text", false)];
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    //act
    functions.createHtml(todos);

    //assert
    expect(document.getElementById("todos")?.innerHTML).toBe("");
  });
  // test("should add to localstorage", () => {
  //   //Arrange
  //   let todos: Todo[] = [new Todo("text", false)];

  //   //Act
  //   functions.createHtml(todos);

  //   //Assert
  //   expect(localStorage).toBe(todos);
  // });

  // test("should loop list", () => {
  //   //Arrange
  //   let todos: Todo[] = [new Todo("Tvätta", false), new Todo("Handla", false)];
  //   let aText: string = "";
  //   let newLi = document.createElement("li");
  //   // let oldLis: HTMLLIElement = document.getElementsByClassName("todo__text");
  //   //Act
  //   functions.createHtml(todos);
  //   //Assert
  //       expect((newLi.innerText = aText)).toBe(aText);
  // });

  // test("should click li-element", () => {
  //   //Arrange
  //   let spy = jest.spyOn(functions, "toggleTodo").mockReturnValue();
  //   document.body.innerHTML = `<li id="myLiTag"></li>`;

  //   let todos: Todo[] = [new Todo("text", false)];

  //   functions.createHtml(todos);
  //   //Act
  //   document.getElementById("myLiTag")?.click();

  //   //Assert
  //   expect(spy).toBeCalledTimes(0);
  // });
});

describe("toggleTodo", () => {
  test("should call changeTodo", () => {
    //Arrange
    // let todos: Todo[] = [];
    let todo: Todo = new Todo("Tvätta", false);
    let spy = jest.spyOn(fnsFunctions, "changeTodo").mockReturnValue();

    functions.toggleTodo(todo);
    //Act
    // addfunctions.changeTodo(todosOne);
    //Assert
    expect(spy).toHaveBeenCalled();
    // expect(spy).toBeCalledWith(todos);
  });

  test("should call createHtml", () => {
    //Arrange
    let todo: Todo = new Todo("Tvätta", false);
    //let todosOne: Todo = [new Todo("text", false)];
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    // functions.toggleTodo(todosOne);
    //Act
    functions.toggleTodo(todo);
    //Assert
    expect(spy).toHaveBeenCalled();
    // expect(spy).toBeCalledWith(todos);
  });
});

describe("clearTodo", () => {
  test("should call createHtml", () => {
    //Arrange
    let todos: Todo[] = [new Todo("Städa", false)];
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //Act
    functions.clearTodos(todos);

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should call removeAllTodos", () => {
    //Arrange
    let todos: Todo[] = [new Todo("Städa", false)];
    let spy = jest.spyOn(fnsFunctions, "removeAllTodos").mockReturnValue();

    //Act
    functions.clearTodos(todos);

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

test("should be able to click", () => {
  //Arrange
  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;

  functions.clearClick();
  //Act
  document.getElementById("clearTodos")?.click();

  //Assert
  expect(spy).toHaveBeenCalled();
});

// describe("handleSubmit", () => {
//   test("should be able to submit", () => {
//     //Arrange
//     let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
//     document.body.innerHTML = `<form id="newTodoForm"><button>Skapa</button></form>`;
//     let todoText: string = "text";
//     let todos: Todo[] = [new Todo("tvätta", false)];

//     functions.handleSubmit();
//     // functions.createNewTodo(todoText, todos);
//     //Act
//     document.getElementById("newTodoForm")?.onsubmit;

//     //Assert
//     expect(spy).toHaveBeenCalled();
//     //
//     expect(spy).toBeCalledWith(todoText, todos);
//   });
// });

/**********
 * test("should be able to submit", () => {
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
 * 
 * 
 */
describe("displayError", () => {
  test("add to localStorage", () => {
    let show: boolean = true;
    let error: string = "Du måste ange minst två bokstäver";
    document.body.innerHTML = `<div id="error" class="error"></div> `;

    functions.displayError(error, show);

    expect(document.getElementById("error")?.classList).toBe("show");
  });
});
