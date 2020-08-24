import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {
   // Alamacenaremos la info del usuario
  formulario: any;

  constructor(public http: HttpClient) {}

  // Función para obtener el programa que corresponde el estudiante
  getFormulario() {
    // Si es estudiante...
    if (localStorage.getItem('estudiante')) {
      this.formulario = JSON.parse(localStorage.getItem('estudiante'));
    } else {
      this.formulario = JSON.parse(localStorage.getItem('administrativo'));
    }

    // Obtenemos el id del programa que corresponde al usuario
    let idModalidad = this.formulario.proyectogrado._id;

    // Se obtiene del backend
    let url = URL_SERVICES + '/formulario/' + idModalidad;
    return this.http.get(url);
  }
}
