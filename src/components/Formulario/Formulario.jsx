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
    e.preventDefault();

    //Validacion;
    if (nombre === '' || email === '' || contrasena === '' || confirmacion === '') {
      /*alert("Datos vacios")*/
      setError(true);
      return;
    }
    setError(false);
    
    setNombre('');
    setEmail('');
    setContrasena('');
    setConfirmacion('');
  };

  return (
    <div>
    <form className="Formulario" onSubmit={validarDatos}>
      {error ? <p>Completa todos los campos !</p> : null}
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
        <input type="confirmarPassword" name="confirmarPassword" className="form-control" value={confirmacion} onChange={(e) => setConfirmacion(e.target.value)} />
      </div>
      <br />

      <button type="submit" className="btn btn-primary w-100">Registrarse</button>
    </form>
   <hr />
    <h1>Datos Ingresados</h1>
    {nombre} - {email} - {contrasena} - {confirmacion}
</div>
  );
};

export default Formulario;

