import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage-angular";
import { Iracha } from '../iracha';

@Injectable({
  providedIn: 'root'
})
export class BdlocalService {

private readonly STORAGE_KEY = 'racha';
private _storage: Storage | null=null;

  constructor(private storage: Storage) {
    this.Init();
  }

  async Init(){
const storage = await this.storage.create();
this._storage = storage;
  }

  async guardarRacha(racha: Iracha): Promise<void>{
    this._storage?.set(this.STORAGE_KEY,racha)
  }

  async obtenerRacha(): Promise<Iracha>{
    const racha = await this._storage?.get(this.STORAGE_KEY);
    return racha ? racha : { intRacha: 0 };
  }
  async resetearRacha(): Promise<void> {
    await this.guardarRacha({ intRacha: 0 });
  }
}
