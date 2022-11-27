/**
 *@jest-environment jsdom
 */

//importerar alla mina funktioner från main.ts till main.test.ts
import * as functions from "./../ts/main";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import * as fnsFunctions from "./../ts/functions";

describe("createNewTodo", () => {
  test("should run createHTML when success=true", () => {
    //Arrange
    let todos: Todo[] = [];
    let theText: string = "Städa";
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //Act
    functions.createNewTodo(theText, todos);

    //Assert
    expect(spy).toBeCalledTimes(1);
  });

  test("should run displayError when success=false", () => {
    //Arrange
    let todos: Todo[] = [];
    let theText: string = "Ex";
    let spy = jest.spyOn(functions, "displayError").mockReturnValue();
    //Act
    functions.createNewTodo(theText, todos);
    //Assert
    expect(spy).toBeCalledTimes(1);
  });
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

test("should be able to click clear btn", () => {
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
// describe("displayError", () => {
//   test("add to localStorage", () => {
//     let show: boolean = true;
//     let error: string = "Du måste ange minst två bokstäver";
//     document.body.innerHTML = `<div id="error" class="error"></div> `;

//     functions.displayError(error, show);

//     expect(document.getElementById("error")?.classList).toBe("show");
//   });
// });

describe("createHtml", () => {
  test("should empty ul", () => {
    //Arrange
    let todos: Todo[] = [new Todo("Handla", false)];
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    //act
    functions.createHtml(todos);

    //assert
    expect(document.getElementById("todos")?.innerHTML).toBe(
      '<li class="todo__text">Handla</li>'
    );
  });
  beforeEach(() => {
    jest.resetModules();
    jest.restoreAllMocks();
  });
  test("should create li-tags for list", () => {
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let theUl = document.getElementById("todos") as HTMLUListElement;
    let todos: Todo[] = [new Todo("Handla", false)];

    functions.createHtml(todos);

    expect(theUl.innerHTML).toBe(`<li class=\"todo__text\">Handla</li>`);
  });

  // test("should add to localstorage", () => {
  //   //Arrange
  //   let todos: Todo[] = [new Todo("text", false)];
  //   //Act
  //   functions.createHtml(todos);
  //   //Assert
  //   expect(localStorage).toContain(JSON.stringify(todos));
  //   //revieced är:`{"todos": "[{\"text\":\"text\",\"done\":false}]"}`
  //   //går ej att skriva in
  // });

  /***************************Funkar ej*********/
  // test("should click li-element", () => {
  //   //Arrange
  //   let spy = jest.spyOn(functions, "toggleTodo").mockReturnValue();
  //   document.body.innerHTML = `<li class="todo__text"></li>`;
  //   let liClassNameLength: number = "todo__text".length;
  //   let todos: Todo[] = [new Todo("Handla", false)];
  //   functions.createHtml(todos);

  //   //Act
  //   functions.createHtml(todos);

  //   //Assert
  //   expect(document.getElementsByTagName("li").classlist).toBe(
  //     liClassNameLength
  //   );
  // });
});
