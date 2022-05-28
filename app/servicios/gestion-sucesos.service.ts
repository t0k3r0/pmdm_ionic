import { Injectable } from '@angular/core';


export interface IElemento3{
  nombre3: string;
  icono: string;
  enlace: string;

}
@Injectable({
  providedIn: 'root'
})
export class GestionSucesosService {
 public listaSucesos: IElemento3[] = [
    { nombre3: 'nombre1', icono: 'alarm-outline', enlace: '/tab1' },
    { nombre3: 'nombre2', icono: 'alarm-outline', enlace: '/tab2' },
    { nombre3: 'nombre3', icono: 'alarm-outline', enlace: '/tab3' }
  ];
  constructor() { }


  public getSucesos() {

    return this.listaSucesos;
  }
}
