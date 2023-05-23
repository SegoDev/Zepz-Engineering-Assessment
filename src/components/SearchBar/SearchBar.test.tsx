import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  const mockHandleSearch = jest.fn();

  const defaultProps = {
    searchValue: "",
    handleSearch: mockHandleSearch,
  };

  beforeEach(() => {
    render(<SearchBar {...defaultProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders input with correct placeholder", () => {
    const inputElement = screen.getByPlaceholderText(/search users by name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("calls handleSearch with input value when input changes", () => {
    const inputElement = screen.getByPlaceholderText(/search users by name/i);
    fireEvent.change(inputElement, { target: { value: "John" } });
    expect(mockHandleSearch).toHaveBeenCalledWith("John");
  });
});
