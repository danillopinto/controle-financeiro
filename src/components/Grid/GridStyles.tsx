import styled from "styled-components";

interface ThProps {
  alignCenter?: boolean;
  width?: number;
}

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  border-collapse: collapse; // Melhora a aparência das bordas da tabela
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th<ThProps>`
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  border-bottom: 1px solid #ddd; // Alterado de 'inset' para 'solid' para melhorar a aparência
  padding: 10px; // Aumentado o padding para melhorar a legibilidade
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

