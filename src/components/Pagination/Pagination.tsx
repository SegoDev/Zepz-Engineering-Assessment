import { VStack, HStack, Button, Text, Select, Box } from "@chakra-ui/react";
import { useState } from "react";

interface PaginationProps {
  pageNumber: number;
  handlePrev: () => void;
  handleNext: () => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  totalPages: number;
}

const Pagination = ({
  pageNumber,
  handlePrev,
  handleNext,
  onItemsPerPageChange,
  totalPages
}: PaginationProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = parseInt(event.target.value);
    setItemsPerPage(selectedValue);
    onItemsPerPageChange(selectedValue); // Invoke the callback prop to update the state in the parent component
  };

  const isPrevDisabled = pageNumber === 1; // Disable "Prev" button if on the first page
  const isNextDisabled = pageNumber === totalPages; // Disable "Next" button if on the last page

  return (
    <VStack spacing={4} alignItems={"center"} my={8}>
      <Box maxW={"65px"}>
        <Select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          size={"sm"}
          data-testid="items-per-page-select"
        >
          <option disabled value="">
            Number of items
          </option>
          <option value={20}>20</option>
          <option value={10}>10</option>
          <option value={5}>5</option>
        </Select>
      </Box>
      <HStack spacing={4} alignItems={"center"}>
        <Button
          onClick={handlePrev}
          colorScheme="orange"
          size={"sm"}
          isDisabled={isPrevDisabled}
          id="Next"
        >
          Prev
        </Button>
        <Text fontSize={"sm"} fontWeight="bold" textColor={"blue.400"}>
          {pageNumber}
        </Text>
        <Button
          onClick={handleNext}
          colorScheme="teal"
          size={"sm"}
          isDisabled={isNextDisabled}
          id="Prev"
        >
          Next
        </Button>
      </HStack>
    </VStack>
  );
};

export default Pagination;
