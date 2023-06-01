import React from 'react'

const Formulario = ({ setInvt }) => {
  
    const handelerSubmit = (e) => {
        e.preventDefault();

        const datos = {
            setInvt
        }
    }
  return (
    <div>
          <form onSubmit="handelerSubmit">
              
              <input type="text" placeholder='Tu nombre' onChange={(e) => setInvt((prevInvt) => ({ ...prevInvt, persona: e.target.value }))} />

              
              <input type="text" placeholder="Nombre de tu mascota🐶" onChange={(e) => setInvt((prevInvt) => ({ ...prevInvt, mascota: e.target.value }))} />

              <input type="submit" />
        </form>  
    </div>
  )
}

export default Formulario