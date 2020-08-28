import { Component, OnInit } from '@angular/core';
import { ProyectoGradoService } from '../../../../services/proyectoGrado/proyecto-grado.service';
import { DocumentService } from '../../../../services/document/document.service';
import { Solicitud } from '../../../../models/solicitud';



declare function init_plugins();


@Component({
  selector: 'app-seguimiento-modalidad',
  templateUrl: './seguimiento-modalidad.component.html',
  styleUrls: ['./seguimiento-modalidad.component.css']
})

export class SeguimientoModalidadComponent implements OnInit {
  
  info: any; // Almacenará la info del estudiante (en JSON)
  proyectodegrado: Solicitud;
  proyectogrado: any;
  programa: string;

  _id: string;
  estado: string;
  notas: string;

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

  nombreEst2: string;
  nombreEst3: string;

  tutor: string

  personaCargo: string;
  correo: string;
  telefono: string;

  preInscripcion: any;
  nombreEmpresa: string;

  constructor(
    public proyectoGradoService: ProyectoGradoService,
    public _documentService: DocumentService,
    
  ) { }

  ngOnInit(): void {

    this.getSolicitud()
  }
  
    //init_plugins();

    /*
    this.getFormulario();

  // Obtenemos el programa y lo pasamos a la variable Programa
  /*getFormulario() {
   // this._documentService.getFormulario().subscribe((resp) => {
      let infoDocument = resp['document'];
      console.log(infoDocument);
      this.document = infoDocument.titulo_proyecto;
    }); */

  // Obtenemos la información del estudiante y se la pasamos a la variable info

    getSolicitud() {
      //const estudiante = JSON.parse(localStorage.getItem('estudiante'));
      //this.info = estudiante;

      let estudiante = JSON.parse(localStorage.getItem("estudiante"));
      this._id = estudiante.modalidad._id;
  
      this.proyectoGradoService.getSolicitud(this._id).subscribe((resp: any) => {
        this.proyectogrado = resp.proyectogrado;
        console.log(resp)
       
      });
  
    }
  
    getDataInfo(data: any) {
  
      this. proyectodegrado = data;
      console.log(this. proyectodegrado)
  
      this._id = data._id;
      this.estado = data.estado;
      this.notas = data.notas;
  
      this.nombreEst = data.estudiante.nombres;
      this.apellidoEst = data.estudiante.apellidos;
      this.codigoEst = data.estudiante.codigo;
      this.idEst = data.estudiante.identificacion;
      this.correoEst = data.estudiante.correo;
      this.telefonoEst = data.estudiante.telefono;

      this.tutor = data.proyectogrado.director_proyecto;
 
    }
}
