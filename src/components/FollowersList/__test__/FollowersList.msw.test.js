import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";

import response from "./response";

import FollowersList from "../FollowersList";

const server = setupServer(
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    // const amount = req.url.searchParams.get("results");
    // console.log("amount", amount);

    return res(ctx.status(200), ctx.json(response.data));
  })
);

function MockFollowersList() {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
}

describe("FollowersList", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should render follower item", async () => {
    render(<MockFollowersList />);

    const firstFollowerItem = await screen.findByTestId("follower-item-0");

    expect(firstFollowerItem).toBeInTheDocument();
  });

  it("should render same amount of follower items as expected", async () => {
    render(<MockFollowersList />);

    const followerItems = await screen.findAllByTestId(/follower-item/i);

    expect(followerItems).toHaveLength(1);
  });
});
