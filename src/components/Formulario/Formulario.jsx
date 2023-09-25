import React from 'react'
import { useState } from 'react';

const Formulario = () => {

const [name, setname] = useState("")


  return (
    <div className="container">
        <h2>Dime tu nombre</h2>
        <form>
            <div className="w-50">
                <label className="form-label">Agrega tu nombre</label>
                <input className="form-control" 
                type="text" 
                value={name} 
                onChange={ e => setname(e.target.value)} />
            </div>
            <button className="btn btn-primary mt-4 w-50">Registrarse</button>
        </form>
    </div>
  );
}

export default Formulario