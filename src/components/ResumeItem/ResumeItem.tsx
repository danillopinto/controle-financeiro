import React from 'react';
import "./ResumeStyles";
import { Container, Header, HeaderTitle, Total } from "./ResumeStyles";
import { IconType } from 'react-icons';

interface ResumeItemProps {
  title: string;
  icon: IconType; // Tipo para componentes de ícones
  value: string;  // Adicionado tipo para a propriedade `value`
}

const ResumeItem: React.FC<ResumeItemProps> = ({ title, value, icon: Icon }) => {
  return (
    <Container>
      <Header>
        <Icon />
        <HeaderTitle>{title}</HeaderTitle>
      </Header>
      <Total>{value}</Total>
    </Container>
  );
};

export default ResumeItem;
