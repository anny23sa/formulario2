import React from 'react'
import SocialButton from '../SocialButton/SocialButton'
import Formulario from '../Formulario/Formulario'
import Alert from '../Alert/Alert';

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
      
      <Alert tipo="danger" mensaje="Datos invalidos"/>
      <Alert tipo="success" mensaje="Registro correcto"/>
    </div>
  );
}

export default Registro;
