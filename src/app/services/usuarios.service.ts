import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor() {}

  usuarios: Usuario[] = [
    {
      nombre: 'Lucia',
      email: 'lucia@mail.com',
      password: '12345',
      passwordC: '',
    },
  ];
  usuarioA!: Usuario;

  setUserA(usuario: Usuario){
    this.usuarioA = usuario;
  }

  getUserA(){
    return this.usuarioA
  }

  getUsuarios(){
    return this.usuarios
  }

  addUser(user: Usuario) {
    this.usuarios.push(user);
  }
}
