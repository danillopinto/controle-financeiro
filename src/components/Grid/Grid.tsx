import React from "react";
import GridItem from "../GridItem/GridItem";
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody
} from "./GridStyles"; 

interface Transaction {
  id: number;
  desc: string;
  amount: string;
  expense: boolean;
}

interface GridProps {
  itens: Transaction[];
  setItens: (items: Transaction[]) => void;
}

const Grid: React.FC<GridProps> = ({ itens, setItens }) => {

  const onDelete = (ID: number) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={40}>Descrição</Th>
          <Th width={40}>Valor</Th>
          <Th width={10} alignCenter>
            Tipo
          </Th>
          <Th width={10}></Th> {}
        </Tr>
      </Thead>
      <Tbody>
        {itens.map((item) => (
          <GridItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
