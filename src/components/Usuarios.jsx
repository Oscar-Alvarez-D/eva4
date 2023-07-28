import React, { useEffect, useState } from 'react'
import { eliminarPersona, obtenerPersonas } from '../firebase/promesas'


export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([])
  useEffect(() => {
    obtenerPersonas().then((listado) => {
      setUsuarios(listado)
    })
  })

  const mostrarListaUsuarios = () => {
    let data = usuarios.map((u) => {
      console.log(u, "gente")
      return <tr>
        <td>{u.nombre}</td>
        <td>{u.apellido}</td>
        <td>{u.telefono}</td>
        <td>{u.email}</td>
        <td>{u.direccion}</td>
        <td>{u.modelo}</td>
        <td>{u.ciudad}</td>
        <td>{u.envio}</td>
        <td>{u.comentarios}</td>
        <td>{u.terminos}</td>
        <td><button onClick={() => {eliminarPersona(u.idUsuario)}}>Eliminar</button></td>

      </tr>
    })
    return data
  }
  return (
    <div style={{ width: "50%" }}>
      <h3>Lista de usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Direccion</th>
            <th>Modelo</th>
            <th>ciudad</th>
            <th>envio</th>
            <th>comentarios</th>
            <th>terminos</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            mostrarListaUsuarios()
          }
        </tbody>
      </table>
    </div>
  )
}

