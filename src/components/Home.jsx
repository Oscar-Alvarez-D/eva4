import React from 'react'
import portada from "../assets/img/portada.png";

export const Home = () => {
  return (
    <div className='container'>
        <img style={{ width: 800, height: 600, objectFit: "cover" }} src={portada} />
    </div>
  )
}
