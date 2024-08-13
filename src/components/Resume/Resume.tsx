import React from 'react';
import ResumeItem from "../ResumeItem/ResumeItem";
import "./styles";
import { Container } from "./styles";
import { 
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

// Definindo a interface para as propriedades do componente Resume
interface ResumeProps {
  income: string;
  expense: string;
  total: string;
}

const Resume: React.FC<ResumeProps> = ({ income, expense, total }) => {
  return (
    <Container>
      <ResumeItem title="Entradas" icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem title="Saídas" icon={FaRegArrowAltCircleDown} value={expense} />
      <ResumeItem title="Total" icon={FaDollarSign} value={total} />
    </Container>
  );
}

export default Resume;
