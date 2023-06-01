import React from 'react'

const Boleto = ({invt}) => {
  return (
    <div className='boleto'>
          <h1>Bienvenidos {invt.persona} y {invt.mascota} </h1>
          <h2>Gracias por participar en el evento!</h2>
    </div>
  )
}

export default Boleto