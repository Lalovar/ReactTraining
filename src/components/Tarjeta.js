import React from 'react';
import "./css/tarjeta.css"
export default function Tarjeta(props) {
    const usuario = props.usuario;
    return (
        <div style={ {backgroundColor:usuario.bgColor} } className="tarjeta">
            <h3 id="titulo" > {usuario.nombre} </h3>
            <p>{usuario.puesto}</p>
        </div>
    )
}