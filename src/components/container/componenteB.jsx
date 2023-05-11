import React from "react";
import { UsuarioNuevo } from "../models/usuarioNuevoClass";
import ComponenteA from "../pure/componenteA";
import { useState } from "react";

function NuevosUsuarios() {
  const usuarioInvitado = new UsuarioNuevo(
    "Roberto",
    "Cabrera",
    "roberto@getDefaultNormalizer.com",
    true
  );
  const [conectedStatus, setConexion] = useState(false);
  const conectarDesconectar = () => {
    setConexion(conectedStatus - false);
  };
  return (
    <div>
      <div>Un nuevo usuario!! Bienvenido!</div>
      <ComponenteA usuarioNuevo={usuarioInvitado}></ComponenteA>
      <button onClick={conectarDesconectar}>Cambiar estado</button>
    </div>
  );
}

export default NuevosUsuarios;
