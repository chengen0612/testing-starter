import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Todo from "../Todo";

function MockTodo() {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

const addTodos = (todos) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  todos.forEach((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  beforeEach(() => {
    render(<MockTodo />);
  });

  describe("integrations between input and todo list", () => {
    it("should show the input value in the todo list after add button is clicked", () => {
      addTodos(["A new task"]);

      const todoItem = screen.getByText("A new task");

      expect(todoItem).toBeInTheDocument();
    });

    it("should have same amount of todo that user has added", () => {
      addTodos(["Go jogging", "Practice react testing", "By new clothes"]);

      const todoItems = screen.getAllByTestId("todo-item");

      expect(todoItems).toHaveLength(3);
    });
  });

  describe("initial style of todo item", () => {
    it("should not have active class when initially rendered", () => {
      addTodos(["A new task"]);

      const todoItem = screen.getByText("A new task");

      expect(todoItem).not.toHaveClass("todo-item-active");
    });
  });
});
