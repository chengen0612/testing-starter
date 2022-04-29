import { render, screen } from "@testing-library/react";
import Header from "../Header";

// getBy
it("should render same text pass into title prop", () => {
  render(<Header title="My header" />);

  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// it("should heading element exist", () => {
//   render(<Header title="My header" />);

//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should header has same text pass into title prop", () => {
//   render(<Header title="My header" />);

//   const headingElement = screen.getByRole("heading", { name: /my header/i });
//   expect(headingElement).toBeInTheDocument();
// });

// findBy
// it("should content cats text", async () => {
//   render(<Header />);

//   const headingElement = await screen.findByText("cats");
//   expect(headingElement).toBeInTheDocument();
// });

// queryBy
// it("should not content dogs text", () => {
//   render(<Header />);

//   const headingElement = screen.queryByText("dogs");
//   expect(headingElement).not.toBeInTheDocument();
// });

// // getAllBy
// it("should render two headers", () => {
//   render(<Header />);

//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
