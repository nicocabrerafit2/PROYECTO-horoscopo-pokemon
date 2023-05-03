import React from "react";
import PropTypes from "prop-types";
import { UsuarioNuevo } from "../models/usuarioNuevoClass";

const ComponenteA = ({ usuarioNuevo }) => {
  return (
    <div>
      <h2>Nombre:{usuarioNuevo.name}</h2>
      <h2>Apellido:{usuarioNuevo.lastName}</h2>
      <h2>Email: {usuarioNuevo.email}</h2>
      <h2>
        Estado de conexión:
        {usuarioNuevo.conectedStatus
          ? "Contacto En Línea"
          : "Contacto No Disponible"}
      </h2>
    </div>
  );
};

ComponenteA.propTypes = {
  usuarioNuevo: PropTypes.instanceOf(UsuarioNuevo),
};

export default ComponenteA;
