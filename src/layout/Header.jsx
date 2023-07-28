import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <nav>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/"}> Home </Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/nosotros"}> Nosotros</Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/nuestros-productos"}>Productos</Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/componentes"}>Componentes</Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/accesorios"}>Accesorios</Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/multimedia"}>Multimedia</Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/formulario"}>Formulario</Link>
        <Link style={{ textDecoration: "none", color: "white"}} to={"/usuarios"}>Usuarios</Link>
      </nav>
    </div>
  )
}
