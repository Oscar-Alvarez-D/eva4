import React, { useState } from 'react'
import { registrarPersona, obtenerPersonas } from '../firebase/promesas'

export const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [direccion, setDireccion] = useState("")
  const [modelo, setModelo] = useState("")
  const [ciudad, setCiudad] = useState("")
  const [envio, setEnvio] = useState("")
  const [comentarios, setComentarios] = useState("")
  const [terminos, setTerminos] = useState(false)

  const [errorNombre, setErrorNombre] = useState("")
  const [errorApellido, setErrorApellido] = useState("")
  const [errorTelefono, setErrorTelefono] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorDireccion, setErrorDireccion] = useState("")
  const [errorModelo, setErrorModelo] = useState("")
  const [errorCiudad, setErrorCiudad] = useState("")
  const [errorEnvio, setErrorEnvio] = useState("")
  const [errorComentarios, setErrorComentarios] = useState("")
  const [errorTerminos, setErrorTerminos] = useState("")

  const validarNombre = (valor) => {
    setNombre(valor);
    if (valor.length < 3) {
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else {
      setErrorNombre("")
    }

  }

  const validarApellido = (valor) => {
    setApellido(valor);
    if (valor.length < 3) {
      setErrorApellido("Debe tener mas de 3 letras")
    }
    else {
      setErrorApellido("")
    }

  }

  const validarTelefono = (valor) => {
    setTelefono(valor);
    if (valor.length === 0 || !telefono.startsWith("+56")) {
      setErrorTelefono("Debe contener prefijo +56")
    }
    else {
      setErrorTelefono("")
    }
  }

  const validarEmail = (valor) => {
    setEmail(valor);
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(valor)) {
      setErrorEmail("No es un email valido")
    }
    else {
      setErrorEmail("")
    }
  }

  const validarDireccion = (valor) => {
    setDireccion(valor);
    if (valor.trim().length === 0) {
      setErrorDireccion("La direccion es obligatoria")
    }
    else {
      setErrorDireccion("")
    }
  }

  const validarModelo = (valor) => {
    setModelo(valor);
    if (valor === "") {
      setErrorModelo("El modelo es obligatorio")
    }
    else {
      setErrorModelo("")
    }
  }

  const validarCiudad = (valor) => {
    setCiudad(valor);
    if (valor === "") {
      setErrorCiudad("La Ciudad es obligatoria")
    }
    else {
      setErrorCiudad("")
    }
  }

  const validarEnvio = (valor) => {
    setEnvio(valor);
    if (valor === "") {
      setErrorEnvio("El envio es obligatorio")
    }
    else {
      setErrorEnvio("")
    }
  }

  const validarComentarios = (valor) => {
    setComentarios(valor);
    if (valor === "") {
      setErrorComentarios("El envio es obligatorio")
    }
    else {
      setErrorEnvio("")
    }
  }

  const validarTerminos = (valor) => {
    setTerminos(valor);
    if (valor === false) {
      setErrorTerminos("Debe aceptar los terminos y servicios")
    }
    else {
      setErrorTerminos("")
    }
  }

  const registrar = (e) => {
    e.preventDefault()
    if (nombre.trim() == "") {
      setErrorNombre("El nombre es obligatorio")
    } else {
      setNombre(nombre.trim())
    }

    if (apellido.trim() == "") {
      setErrorApellido("El apellido es obligatorio")
    } else {
      setApellido(apellido.trim())
    }

    if (telefono.trim() == "") {
      setErrorTelefono("El telefono es obligatorio")
    } else {
      setTelefono(nombre.trim())
    }

    if (email.trim() == "") {
      setErrorEmail("El email es obligatorio")
    } else {
      setEmail(email.trim())
    }

    if (direccion.trim() == "") {
      setErrorDireccion("la direccion es obligatorio")
    } else {
      setDireccion(direccion.trim())
    }

    if (modelo.trim() == "") {
      setErrorModelo("El modelo es obligatorio")
    } else {
      setModelo(modelo.trim())
    }

    if (ciudad.trim() == "") {
      setErrorCiudad("La ciudad es obligatorio")
    } else {
      setCiudad(nombre.trim())
    }
    if (envio.trim() == "") {
      setErrorEnvio("El envio es obligatorio")
    } else {
      setEnvio(envio.trim())
    }

    if (comentarios.trim() == "") {
      setErrorComentarios("Los comentarios son obligatorio")
    } else {
      setComentarios(comentarios.trim())
    }

    if (terminos === false) {
      setErrorTerminos("Los terminos son obligatorio")
    } else {
      setTerminos(nombre.trim())
    }

    const datos = {
      nombre,
      apellido,
      telefono,
      email,
      direccion,
      modelo,
      ciudad,
      envio,
      comentarios,
      terminos,
    }

    registrarPersona(datos)
    alert("Se registro el usuario")
  }

  return (
    <div className='main'>
      <form className='form' onSubmit={registrar}>
      <h3>Formulario de compra</h3>
        <input className='input-class' placeholder='Ingresa el nombre...' type="text" value={nombre} onChange={(e) => { validarNombre(e.target.value) }} />
        <span>{errorNombre}</span>
        <input className='input-class' placeholder='Ingresa tu apellido...' type="text" value={apellido} onChange={(e) => { validarApellido(e.target.value) }} />
        <span>{errorApellido}</span>
        <input className='input-class' placeholder='Ingresa tu numero telefonico' type="telefono" value={telefono} onChange={(e) => { validarTelefono(e.target.value) }} />
        <span>{errorTelefono}</span>
        <input className='input-class' placeholder="Ingrese su email" type="email" value={email} onChange={(e) => { validarEmail(e.target.value) }} />
        <span>{errorEmail}</span>
        <input className='input-class' placeholder='Ingrese su direccion' type="text" value={direccion} onChange={(e) => { validarDireccion(e.target.value) }} />
        <span>{errorDireccion}</span>
        <select className='input-class' value={modelo} onChange={(e) => { validarModelo(e.target.value) }}>
          <option value="">Seleccione un modelo</option>
          <option value="Scott Contesa">Scott RC 900</option>
          <option value="Scott Spark">Scott Scale 950</option>
          <option value="Scott Scale">Scott Spark 2023</option>
          <option value="Scott SuperSonic">Scott Ransom</option>
          <option value="Scott Marlin">Scott Aspect</option>
          <option value="Scott Ghost">Scott Contessa</option>
        </select>
        <span>{errorModelo}</span>
        <select className='input-class' value={ciudad} onChange={(e) => { validarCiudad(e.target.value) }}>
          <option value="">Seleccione una ciudad</option>
          <option value="Copiapo">Copiapo</option>
          <option value="La serena">La serena</option>
          <option value="Caldera">Caldera</option>
        </select>
        <span>{errorCiudad}</span>
        <select className='input-class' name="Envio" value={envio} onChange={(e) => { validarEnvio(e.target.value) }} >
          <option value="">Seleccione un método de envío</option>
          <option value="Domicilio">Envio a domicilio</option>
          <option value="Retiro en tienda">Retiro en tienda</option>
        </select>
        <span>{errorEnvio}</span>
        <textarea value={comentarios} onChange={(e) => { validarComentarios(e.target.value) }} placeholder="Información adicional"></textarea>
        <span>{errorComentarios}</span>
        <input className='input-class' type="checkbox" value={terminos} onChange={(e) => { validarTerminos(e.target.value) }} />
        <span>Acepto los terminos y condiciones</span>
        <span>{errorTerminos}</span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
