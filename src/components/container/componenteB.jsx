import React from "react";
import { UsuarioNuevo } from "../models/usuarioNuevoClass";
import ComponenteA from "../pure/componenteA";

function NuevosUsuarios() {
  const usuarioInvitado = new UsuarioNuevo(
    "Roberto",
    "Cabrera",
    "roberto@getDefaultNormalizer.com",
    true
  );
  return (
    <div>
      <div>Un nuevo usuario!! Bienvenido!</div>
      <ComponenteA usuarioNuevo={usuarioInvitado}></ComponenteA>
    </div>
  );
}

export default NuevosUsuarios;
