import React, { useState } from 'react';
import "./StylesLogin";
import { ContainerLogin, LogIn, SignUp, TelaLogin } from "./StylesLogin";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import finace5 from "../../../assets/finances5.jpg";
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateForm(e.target.value, password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validateForm(email, e.target.value);
  };

  const validateForm = (email: string, password: string) => {
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = password.length >= 6; // Exemplo: senha deve ter pelo menos 6 caracteres
    setIsValid(emailValid && passwordValid);
  };

  const handleSubmit = () => {
    if (isValid) {
      navigate('/Home');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <>
      <img src={finace5} alt="Background" style={{ width: "100%", height: "100vh" }} />

      <ContainerLogin>
        <TelaLogin>
          <SignUp>
            <h2>Entrar</h2>
            <div>
              <PersonOutlineIcon style={{ fontSize: "30px", color: "white", marginLeft: "-22px" }} />
              <input
                type="email"
                id="InputEmail"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div>
              <LockOpenIcon style={{ fontSize: "30px", color: "white" }} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="InputPassword"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
              />
              <span onClick={handleClickShowPassword} style={{ cursor: 'pointer' }}>
                {showPassword ? (
                  <VisibilityOff style={{ fontSize: "24px", color: "white" }} />
                ) : (
                  <Visibility style={{ fontSize: "24px", color: "white" }} />
                )}
              </span>
            </div>

            <button onClick={handleSubmit} style={{ width: "100%" }}>Entrar</button>
            <a href="#" style={{ padding: "5px 0 0 0" }}>Esqueceu a senha?</a>
          </SignUp>

          <LogIn>
            <a href="#">Cadastre-se</a>
          </LogIn>
        </TelaLogin>
      </ContainerLogin>
    </>
  );
};

export default Login;
