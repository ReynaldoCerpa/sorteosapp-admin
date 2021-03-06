import { FaUserAlt, FaLock} from "react-icons/fa"
import Alert from "@mui/material/Alert"
import { useNavigate } from 'react-router-dom'
import { InputAdornment, TextField } from "@material-ui/core";
import Btn from "../components/Btn"
import styled from "styled-components";
import { useState } from "react";
import { headers } from "../config/headers";

const Login = () => {
  const [usuarioText, setUsuarioText] = useState("")
  const [contrasenaText, setContrasenaText] = useState("")
  const [alert, setAlert] = useState(false)
  const nav = useNavigate();

  return (
      <div className="Login">
        <InputContainer>
          <img src="../logo.png" alt="Logo Sorteo del Cetys"/>
          <InputForm>
            <TextField
              style={{margin: "0.5rem"}}
              label="Usuario"
              variant="filled"
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
              style={{margin: "0.5rem"}}
              type="password"
              label="Contraseña"
              variant="filled"
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
            const response = await valid;
            setAlert(!response)
            if(response) nav("/Colaboradores")
            }} />
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

export default Login;
