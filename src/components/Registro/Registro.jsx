import React from 'react'
import SocialButton from '../SocialButton/SocialButton'
import Formulario from '../Formulario/Formulario'
import { Alert } from 'react-bootstrap'


const Registro = () => {



  return (
    <div>
      {/* Utiliza SocialButton y pasa el icono como prop */}
      <SocialButton icon="facebook" />
      <SocialButton icon="github" />
      <SocialButton icon="linkedin" />
      <br />
      <h5>o usa tu email para registrarte</h5>
      <Formulario />
      <br />
      <Alert />
    </div>
  );
}

export default Registro;
