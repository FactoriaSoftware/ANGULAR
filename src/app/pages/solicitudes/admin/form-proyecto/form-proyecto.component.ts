import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {
  info: any;
  solicitudes: any[];
  programa: string;

  _id: string;
  estado: string;
  notas: string;
  tutor: string[];

  letra: string;
  titulo: string;
  empresa: string;
  ubicacion: string;
  modalidad: string;
  funciones: string;

  nombreEst: string;
  apellidoEst: string;
  codigoEst: string;
  idEst: string;
  correoEst: string;
  telefonoEst: string;

  personaCargo: string;
  correo: string;
  telefono: string;

  preInscripcion: any;
  nombreEmpresa: string;

  tutores: any[] = [];


  constructor() { }

  ngOnInit(): void {
    this.info = JSON.parse(localStorage.getItem("estudiante"));
    this.getSolicitudes();
  }
  putSolicitud(form: NgForm) {

    Swal.fire({
      title: '¿Actualizar Solicitud?',
      icon: 'warning',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',

      showCancelButton: true,
      confirmButtonColor: '#60D89C',
      cancelButtonColor: '#d33'

    })

  }


  getSolicitudes() {

    let administrativo = JSON.parse(localStorage.getItem("administrativo"));
    this.programa = administrativo.programa._id;

   
  }

  getDataInfo(data: any) {

    console.log(data)

    this._id = data._id;
    this.estado = data.estado
    this.notas = data.notas;
    //this.tutor = [data.tutor.nombres, data.tutor.apellidos];

    this.letra = data.vacante.letra;
    this.titulo = data.vacante.titulo;
    this.empresa = data.empresa.nombre;
    this.ubicacion = data.vacante.ubicacion;
    this.modalidad = data.vacante.modalidad;
    this.funciones = data.vacante.funciones;

    this.nombreEst = data.estudiante.nombres;
    this.apellidoEst = data.estudiante.apellidos;
    this.codigoEst = data.estudiante.codigo;
    this.idEst = data.estudiante.identificacion;
    this.correoEst = data.estudiante.correo;
    this.telefonoEst = data.estudiante.telefono;

    this.personaCargo = data.empresa.nombre_persona;
    this.correo = data.empresa.correo_persona;
    this.telefono = data.empresa.telefono_persona;
  }



  getDataBuscar(data) {

  }


}
