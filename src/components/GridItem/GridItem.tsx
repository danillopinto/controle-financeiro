import React from "react";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";
import { Tr, Td } from "./GridItemStyles"; 

interface GridItemProps {
  item: {
    id: number;
    desc: string;
    amount: string;
    expense: boolean;
  };
  onDelete: (id: number) => void;
}

const GridItem: React.FC<GridItemProps> = ({ item, onDelete }) => {
  return (
    <Tr>
      <Td>{item.desc}</Td>
      <Td>{item.amount}</Td>
      <Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Td>
      <Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} style={{ cursor: 'pointer' }} />
      </Td>
    </Tr>
  );
};

export default GridItem;
