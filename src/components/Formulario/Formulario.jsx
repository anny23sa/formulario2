import React from 'react'
import { useState } from 'react';
import './Formulario.css'

const Formulario = () => {

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [contrasena, setContrasena] = useState("");
const [confirmacion, setConfirmacion] = useState("");

//Estado para los errores
const [error, setError] = useState(false);
//Funcion antes de enviar el formulario
const validarDatos = (e) => {
  e.preventDeFault();
  //Validacion;
  if (nombre === '' || email === '' || contrasena === '' || confirmacion === '') {
    setError(true);
    return;
}
setError(false);
        setNombre('');
        setEmail('');
        setContrasena('');
        setConfirmacion('');
}

return(
  <form className="Formulario" onSubmit={validarDatos}>
    {error ? <p>Todos los campos son obligatorios</p> : null}
    <div className="form-group">
      <label>Nombre</label>
      <input type="text" name="nombre" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </div>

    <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" name="contraseña" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Confirmar Contraseña</label>
        <input type="password" name="confirmar contraseña" className="form-control" value={confirmacion} onChange={(e) => setConfirmacion(e.target.value)} />
      </div>
      <br />
      
      <button type="submit" className="btn btn-primary w-100">Registrarse</button>
    </form>
    
  );
}

export default Formulario;
    
 /*return (
    <div className="container">
        <h2>Dime tu nombre</h2>
        {error ? <p className="error">Hay un error</p>: null}
        <form onSubmit={handleSubmit}>
            <div className="w-50">
                <label className="form-label">Agrega tu nombre</label>
                <input className="form-control" 
                type="text" 
                value={name} 
                onChange={ e => setName(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-4 w-50">Registrarse</button>
        </form>
    </div>
  );
}

export default Formulario*/