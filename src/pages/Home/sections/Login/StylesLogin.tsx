import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  a {
    text-decoration: none;
    color: white;
    transition: .3s;

  }

  a:hover {
    color: #7EA6BF;
    transition: .3s;
  }

  @media (max-width: 750px) {
  
  }

`;

export const TelaLogin = styled.div`
  width: 400px;
  height: 480px;
  overflow: hidden;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid white;
  backdrop-filter: blur(10px);

  @media (max-width: 750px) {
    height: 100%;
    border: 0;
  }

`;


export const LogIn = styled.div`
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;

  a {
    margin-bottom: 28px;
    border-top: 1px solid rgba(228, 228, 228, 0.342);
    width: 300px;
    text-align: center;
    padding-top: 25px;
  }

`;

export const SignUp = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  input {
    padding: 15px 70px 15px 10px;
    background-color: transparent;
    border: 0;
    color: white;
  }

input:focus {
    outline: 0;
} 

  button {
    padding: 15px 40px;
    background-color: transparent;
    backdrop-filter: blur(10px);
    border: 0;
    margin-top: 15px;
    border-radius: 10px;
    font-weight: 600;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    transition: .3s;
  }

  button:hover {
    padding: 18px 43px;
    transition: .3s;
  }

  div {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid white;
  }

  h2 {
    color: white;
    width: 100%;
    text-align: center;
    margin-top: -50px;
  }
`;