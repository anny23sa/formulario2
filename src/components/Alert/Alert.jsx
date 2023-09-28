import React from 'react'
import Alerta from "react-bootstrap/Alert";

const Alert = (props) => {
  return (
    <Alerta key={props.tipo} variant={props.tipo}>{props.mensaje}</Alerta>
  )
}

export default Alert