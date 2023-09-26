import React from 'react'
import { useState } from 'react';
import './Formulario.css'

const Formulario = () => {

const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [contrasena, setContrasena] = useState("");
const [confirmacion, SeTConfirmacion] = useState("");
//const [error, setError] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()
  if(nombre.trim()===""){
  setError(true)
}else {
  alert('datos enviados')
  setError(false)
}
}

return(
  <form onSumit={handleSubmit}>
    <div className="form-group">
      <label>Nombre</label>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    </div>

    <div className="form-group">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
      </div>
      
      <div className="form-group">
        <label>Confirmar Contraseña</label>
        <input type="password" value={confirmacion} onChange={(e) => setConfirmacion(e.target.value)} />
      </div>
      <button type="submit">Registrarse</button>
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