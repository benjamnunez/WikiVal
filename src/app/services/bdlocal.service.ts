import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {
  private isLoggedIn?: boolean;
  usuario: Users[] = [];
  token = '';
  private _storage: Storage | null=null;

  constructor(private storage : Storage) {
    this.Init();
    this.cargarDatos();
  }
  async Init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  logIn(uName:string, ingresado: boolean){
    this.usuario.unshift({username:uName, joined: ingresado})
    this._storage?.set('usuario',this.usuario);
    console.log('Usuario guardado')
  }

  async cargarDatos(){
    const miUsuario= await this.storage.get('usuario');
    if(miUsuario){
      this.usuario=miUsuario;
    }
  }

  async isAuth(){
    
  }
}
