import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import FollowersList from "../FollowersList";

function MockFollowersList() {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
}

describe("FollowersList", () => {
  it("should render follower item", async () => {
    render(<MockFollowersList />);

    const firstFollowerItem = await screen.findByTestId("follower-item-0");

    expect(firstFollowerItem).toBeInTheDocument();
  });

  it("should render same amount of follower items as expected", async () => {
    render(<MockFollowersList />);

    const followerItems = await screen.findAllByTestId(/^follower-item/i);

    expect(followerItems).toHaveLength(5);
  });
});
