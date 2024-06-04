import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
    return (
        <div className='producto'>
            <img src={producto.imagen}/>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>USD$ {producto.precio}</p>
            <Link to={`/item/${producto.id}`}>Ver más</Link>
         </div>

    )

}