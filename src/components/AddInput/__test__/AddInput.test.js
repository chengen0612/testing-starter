import { render, screen, fireEvent } from "@testing-library/react";

import AddInput from "../AddInput";

describe("AddInput", () => {
  const mockProps = { todos: [], setTodos: jest.fn() };

  beforeEach(() => {
    render(<AddInput {...mockProps} />);
  });

  it("should render input element", () => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type in input", () => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, { target: { value: "A new task" } });
    expect(inputElement).toHaveValue("A new task");
  });

  it("should have empty input when add button is clicked", () => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "A new task" } });
    fireEvent.click(buttonElement);

    expect(inputElement).not.toHaveValue();
  });
});
