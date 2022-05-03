import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import response from "./response";

import FollowersList from "../FollowersList";

jest.mock("axios");

function MockFollowersList() {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
}

describe("FollowersList", () => {
  it("should render follower item", async () => {
    axios.get.mockResolvedValue(response);

    render(<MockFollowersList />);

    const firstFollowerItem = await screen.findByTestId("follower-item-0");

    expect(firstFollowerItem).toBeInTheDocument();
  });

  // it("should render same amount of follower items as expected", async () => {
  //   render(<MockFollowersList />);

  //   const followerItems = await screen.findAllByTestId(/^follower-item/i);

  //   expect(followerItems).toHaveLength(5);
  // });
});
