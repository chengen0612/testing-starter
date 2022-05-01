import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TodoFooter from "../TodoFooter";

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter {...{ numberOfIncompleteTasks }} />
    </BrowserRouter>
  );
}

it("should render the correct amount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);

  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

// it("should display 'task' when the number of incomplete tasks is one", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);

//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeInTheDocument();
// });

// it("should has paragraph element with specific text", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);

//   const paragraphElement = screen.getByRole("paragraph");
//   expect(paragraphElement).toHaveTextContent("1 task left");
// });

// it("should has paragraph element with specific text", () => {
//   render(<MockTodoFooter numberOfIncompleteTasks={1} />);

//   const paragraphElement = screen.getByRole("paragraph");
//   expect(paragraphElement.textContent).toBe("1 task left");
// });
