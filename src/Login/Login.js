import React, { useState } from 'react'
import './Login.css';
import { useHistory } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@mui/material/IconButton';

function Login() {
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => { setShowPassword(!showPassword) };
    const handleMouseDownPassword = (e) => { e.preventDefault() };
    let hola = useHistory();
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);

    const iniciarSesion = () => {
        if (correo == "" || contraseña == "") {
            alert("Ambos campos son obligatorios.")
        } else {
            hola.push("/Secundaria")
        }


    }
    return (
        <div className="pantallaCompleta">
            <div className="Contenedor">
                <img src={require("./imagenes/bienvenidos.jpg").default} />
                <TextField
                    error={error1}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="cuadroCorreo" label="Correo" variant="outlined"
                    value={correo} color="secondary" />
                <TextField
                    error={error2}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setContraseña(e.target.value)}
                    className="cuadroContraseña" label="Contraseña" value={contraseña}
                    variant="outlined" color="secondary" style={{ marginTop: "2%" }}
                    InputProps={{
                        endAdornment: (<InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>)
                    }}
                />
                <Button className="boton" variant="contained" style={{ marginTop: "2%" }}
                    onClick={() => { iniciarSesion() }}
                >Iniciar sesion </Button>
            </div>
        </div>
    )
}

export default Login;
