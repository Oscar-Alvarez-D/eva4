import React from 'react'
import Scott1 from "../assets/img/RC 900.jpg";
import Scott2 from "../assets/img/spark2020.jpg";
import Scott3 from "../assets/img/Scalpel.jpg";




export const Productos = () => {
  return (
    <div>
      <h1>productos</h1>
      <div className='container'>
        <img style={{ width: 300, height: 300 }} src={Scott1} />
        <img style={{ width: 300, height: 300 }} src={Scott2} />
        <img style={{ width: 300, height: 300 }} src={Scott3} />
      </div>
    </div>
  )
}
