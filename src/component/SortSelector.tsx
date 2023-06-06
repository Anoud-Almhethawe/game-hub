import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuItem, Button, MenuList } from "@chakra-ui/react";

interface Props {
  onSelectedSort: (sort: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSelectedSort, selectedSort }: Props) => {
  const sortList = [
    { value: " ", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortList.find(order => order.value === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {currentSortOrder?.label || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortList.map(item => (
          <MenuItem
            key={item.value}
            value={item.value}
            onClick={() => onSelectedSort(item.value)}
            fontWeight={selectedSort == item.value ? "bold" : "normal"}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
