import { FaUserAlt, FaLock} from "react-icons/fa"
import Alert from "@mui/material/Alert"
import { InputAdornment, TextField } from "@material-ui/core";
import Btn from "../components/Btn"
import styled from "styled-components";
import { useState } from "react";

function Login(){
  const [usuarioText, setUsuarioText] = useState("")
  const [contrasenaText, setContrasenaText] = useState("")
  const [alert, setAlert] = useState(false)

  return (
    <div className="Login">
      <InputContainer>
        <img src="../logo.png" alt="Logo Sorteo del Cetys"/>
        <InputForm>
          <TextField
            style={{margin: "1rem"}}
            label="Usuario"
            value={usuarioText}
            onChange={(e)=>setUsuarioText(e.target.value)}
            InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <FaUserAlt/>
              </InputAdornment>
            ),
          }}/>
          <TextField
            style={{margin: "1rem"}}
            type="password"
            label="Contraseña"
            value={contrasenaText}
            onChange={(e)=>setContrasenaText(e.target.value)}
            InputProps={{
              startAdornment: (
              <InputAdornment position="start">
                  <FaLock/>
              </InputAdornment>
            ),
          }}/>
          
        </InputForm>
        { alert ? <Alert severity="error">Datos incorrectos</Alert> : ""}
        <Btn onClick={async ()=> {
          const valid = await login(usuarioText, contrasenaText)
          setAlert(!valid);
          }} />
        <LinkRegister href="">Regístrate</LinkRegister>
      </InputContainer>
    </div>
  );
}

//Request functions
const login = async (username, password) => {
  try {
    const values = {
      username: username,
      password: password
    }
    const headers = {
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*"
    }

    const response = await fetch("http://localhost:4000/login", {
        method: "post",
        headers: headers,
        body: JSON.stringify(values)
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

const InputContainer = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
`;

const InputForm = styled.form`  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinkRegister = styled.a`
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

export default Login;
