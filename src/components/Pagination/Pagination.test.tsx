import { fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";
import { render } from "../../tests/testUtil";

test("calls handlePrev when Prev button is clicked", () => {
  const handlePrev = jest.fn();
  const props = {
    pageNumber: 2,
    handlePrev: handlePrev,
    handleNext: jest.fn(),
    onItemsPerPageChange: jest.fn(),
    totalPages: 3,
  };

  const { getByText } = render(<Pagination {...props} />);

  const prevButton = getByText("Prev");

  fireEvent.click(prevButton);

  expect(handlePrev).toHaveBeenCalledTimes(1);
});

test("calls handleNext when Next button is clicked", () => {
  const handleNext = jest.fn();
  const props = {
    pageNumber: 2,
    handlePrev: jest.fn(),
    handleNext: handleNext,
    onItemsPerPageChange: jest.fn(),
    totalPages: 3,
  };

  const { getByText } = render(<Pagination {...props} />);

  const nextButton = getByText("Next");

  fireEvent.click(nextButton);

  expect(handleNext).toHaveBeenCalledTimes(1);
});

test("calls onItemsPerPageChange with selected value when items per page is changed", () => {
  const onItemsPerPageChange = jest.fn();
  const props = {
    pageNumber: 1,
    handlePrev: jest.fn(),
    handleNext: jest.fn(),
    onItemsPerPageChange: onItemsPerPageChange,
    totalPages: 3,
  };

  const { getByTestId } = render(<Pagination {...props} />);

  const selectElement = getByTestId("items-per-page-select");

  fireEvent.change(selectElement, { target: { value: "10" } });

  expect(onItemsPerPageChange).toHaveBeenCalledWith(10);
});
