import React, { useState } from "react";

const Ejemplo1 = () => {
  const valorInicial = 0;

  const personalInicial = {
    nombre: "Nicolás",
    email: "nicocabrera8@outlook.com",
  };

  const [contador, setContador] = useState(valorInicial);
  const [concambioDePersona, setConcambioDePersona] = useState(personalInicial);

  const sumarVotos = () => {
    setContador(contador + 1);
  };
  function cambiarDeVotante() {
    setConcambioDePersona({
      nombre: "Pepito",
      email: "pepito@outlook.com",
    });
  }
  return (
    <div>
      <h2>Persona votante:</h2>
      <h2>{concambioDePersona.nombre}</h2>
      <h2>{concambioDePersona.email}</h2>
      <button onClick={cambiarDeVotante}>Cambiar</button>
      <h2>Contador de votos: {contador}</h2>
      <button onClick={sumarVotos}>Votar</button>
    </div>
  );
};

export default Ejemplo1;
