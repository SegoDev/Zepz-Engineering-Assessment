import { screen, fireEvent } from "@testing-library/react";
import Logo from "./Logo";
import { openURLExternally } from "../../lib/utils";
import { render } from "../../tests/testUtil";

jest.mock("../../lib/utils", () => ({
  openURLExternally: jest.fn(),
}));

describe("Logo", () => {
  beforeEach(() => {
    render(<Logo />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the logo text", () => {
    const logoText = screen.getByText(/stackoverflow users/i);
    expect(logoText).toBeInTheDocument();
  });

  test("opens external URL when clicked", () => {
    const logoHeading = screen.getByRole("heading", {
      name: /stackoverflow users/i,
    });
    fireEvent.click(logoHeading);
    expect(openURLExternally).toHaveBeenCalledWith(
      "https://stackoverflow.com/users"
    );
  });
});
