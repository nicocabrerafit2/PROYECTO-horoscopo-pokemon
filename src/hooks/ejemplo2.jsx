import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  //vamos a crear 2 contadores distintos
  // cada uno en 2 estados diferentes
  const [contador1, setContador1] = useState(0);

  const [contador2, setContador2] = useState(0);
  //vamos a crear una referencia con useRef() para asociar una variable  con un elemento del DOM del componente (vista HTML)
  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 1);
  }

  //empezamos a trabajar con useEffect
  // caso! : ejecutar siempre un snippet de codigo
  // por lo que cada vez que haya un cambio en el estado del componente se ejecuta aquello que este dentro del useffect.
  useEffect(() => {
    console.log("este log muestra el cambio del estado del componente");
    console.log("ESTE LOG muestra referencia a el elemento del DOM");
    console.log(miRef);
  });
  return (
    <div>
      <h1>ejemplo de useRef, useEffect y useState</h1>
      <h2>contador 1: {contador1}</h2>
      <h2>contador 2: {contador2}</h2>
      <h4 ref={miRef}>referenciado:</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
};
export default Ejemplo2;
