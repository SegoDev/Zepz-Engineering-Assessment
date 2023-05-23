import { render } from "@testing-library/react";
import UserList from "./UserList";
import { mockUsers } from "../../tests/mockData";

test("renders user information correctly", () => {
  const { getByText } = render(<UserList users={mockUsers} />);

  const displayName = getByText("Jon Skeet");
  const location = getByText("Reading, United Kingdom");
  const reputation = getByText("1403976");

  expect(displayName).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(reputation).toBeInTheDocument();
});

// test("follows/unfollows a user when Follow/Unfollow button is clicked", () => {
//   const { getByText } = render(<UserList users={mockUsers} />);

//   const followButton = getByText("Follow");
//   fireEvent.click(followButton);

//   const unfollowButton = getByText("Unfollow");
//   fireEvent.click(unfollowButton);

//   expect(followButton).toBeInTheDocument();
// });

// test("expands/collapses user information when user is clicked", () => {
//   const { getByText, getByLabelText, getByRole } = render(<UserList users={mockUsers} />);

//   const user = getByText("Jon Skeet");
//   fireEvent.click(user);

//   const expandButton = getByLabelText("Toggle extra view");
//   fireEvent.click(expandButton);

//   expect(getByText("User badge counts")).toBeInTheDocument();

//   fireEvent.click(expandButton);

//   expect(
//     getByRole("button", {
//       name: /follow/i,
//     })
//   ).toBeInTheDocument();
// });
