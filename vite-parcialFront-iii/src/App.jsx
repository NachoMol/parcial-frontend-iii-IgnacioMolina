import React, { useState } from 'react';
import Card from "./Components/Card/Card.jsx";
import Form from "./Components/Form/Form.jsx";
import './App.css'

function App() {
  const [datosUsuario, setUserData] = useState({
    name: '',
    club: ''
  });

  return (
    <div>
      <h1>Carga de clubes de futbol</h1>
      <Form submitForm={setUserData} />
      {datosUsuario.name && datosUsuario.club && <Card name={datosUsuario.name} club={datosUsuario.club} />}
    </div>
  );
}

export default App;