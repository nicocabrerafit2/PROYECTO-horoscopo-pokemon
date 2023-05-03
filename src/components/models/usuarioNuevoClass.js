export class UsuarioNuevo {
  name = "";
  lastName = "";
  email = "";
  conectedStatus = true;

  constructor(name, lastName, email, conectedStatus) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.conectedStatus = conectedStatus;
  }
}
