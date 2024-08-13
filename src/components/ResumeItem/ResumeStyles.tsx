import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
  
  @media (max-width: 750px) {
    width: 27%;

  div {
    font-size: 12px;
  }

  h4 {
    font-size: 20px;
  }

  svg {
    display: none;
  }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 20px;
`;

export const Total = styled.h4`
  font-size: 30px;
  font-weight: bold;
`;