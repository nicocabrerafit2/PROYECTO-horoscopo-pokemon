import React from "react";

const ConsultarHoroscopo = (props) => {
  let iterar = () => {
    let resultado = props.nombreParaConsultar.split();
    return resultado;
  };

  return (
    <div>
      <p>
        Hola {props.nombreParaConsultar} su horoscopo de hoy es:{iterar}
      </p>
      <button onClick={iterar}>Consular hososcopo</button>
    </div>
  );
};

ConsultarHoroscopo.propTypes = {};

export default ConsultarHoroscopo;
