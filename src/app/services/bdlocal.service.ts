import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

  private _storage: Storage | null=null;

  constructor(private storage : Storage) {
    this.Init();
  }
  async Init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Guardar token en el almacenamiento local
  async setToken(token: String){
    await this._storage?.set('authToken', token);
    console.log(token);
  }

  //Obtener el token de autenticación
  async getToken(){
    await this.Init();
    return await this._storage?.get('authToken') || null;
  }

  //verificar si el usuario está autenticado
  async isAuthenticated(){
    const token = await this.getToken();
    console.log(!!token)
    return !!token; // Si el token existe retorna true
  }

  //Eliminar el token para cerrar sesión
  async logout(){
    await this._storage?.remove('authToken');
  }
  /*
  logIn(uName:string, ingresado: boolean){
    const estado = this.usuario.find(c => c.username === uName)
    if (!estado){
      this.usuario.unshift({username:uName, joined: ingresado})
      this._storage?.set('usuario',this.usuario);
      console.log('Usuario guardado')
    }
  }

  async cargarDatos(){
    const miUsuario= await this.storage.get('usuario');
    if(miUsuario){
      this.usuario=miUsuario;
    }
  }

  async isAuth(){
    const estado = this.usuario.find(c => c.joined === true);
    console.log(!!estado)
    return !!estado
  }
*/
}
