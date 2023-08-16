import React, { useState } from 'react';

const Form = ({ submitForm }) => {
  const [usuario, setUsuario] = useState({
    name: '',
    club: ''
  });

  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if(usuario.name.length >= 3 && usuario.club.length >= 6) {
      setError(false)
      submitForm(usuario);
  } else {
      setError(true)
  }
  };

console.log(usuario.name, usuario.club)

  return (
    <form className='form-container'>
      <h3>Por favor, completa este formulario:</h3>
      <label>Nombre: </label>
      <input type="text" onChange={(event) => setUsuario({ ...usuario, name: event.target.value })} />
      <label>¿De qué club sos hincha?</label>
      <input type="text" onChange={(event) => setUsuario({ ...usuario, club: event.target.value })} />
      <button onClick={handleSubmit}>Enviar</button>
      {error && <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3>}
    </form>
  );
};

export default Form;