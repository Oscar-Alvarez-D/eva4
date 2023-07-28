import React from 'react'
import comp1 from "../assets/img/CadenaXX1.jpg";
import comp2 from "../assets/img/DesviadorSram rival.jpg";



export const Componentes = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <div className='container'>
        <img style={{ width: 300, height: 300 }} src={comp1} />
        <img style={{ width: 300, height: 300 }} src={comp2} />
      </div>
    </div>
  )
}
