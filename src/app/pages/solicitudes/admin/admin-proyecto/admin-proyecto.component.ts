import { Component, OnInit } from '@angular/core';
import { ProyectoGradoService } from '../../../../services/proyectoGrado/proyecto-grado.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProyectoAdmin } from '../../../../models/proyecto-admin';
import { Solicitud } from '../../../../models/solicitud';
import { TutoresService } from 'src/app/services/tutores/tutores.service';



@Component({
  selector: 'app-form-proyecto',
  templateUrl: './admin-proyecto.component.html',
  styleUrls: ['./admin-proyecto.component.css']
})
export class AdminProyectoComponent implements OnInit {
  formulario: Solicitud;
  info: any;
  solicitudes: any[];
  programa: string;

  _id: string;
  estado: string;
  notas: string;
  tutor: string[];
  titulo: string;
  //empresa: string;
  //ubicacion: string;
  modalidad: string;
  //tutores: string;
  tutores: any[] = [];
  tutorNombres: string;
  tutorApellidos: string;
  estado_anteproyecto: string;
  estado_proyecto: string;
  notas_propuesta: string;

//-----Estudiante Principal-------//
  idEstudiante: string;
  nombreEst: string;
  apellidoEst: string;
  codigoEst: string;
  idEst: string;
  correoEst: string;
  
 

  proyectos: any[];
  

  preInscripcion: any;
 
 
  tutor_id : string;

  

  constructor(public proyectoGradoService : ProyectoGradoService, public _tutoresService: TutoresService) { }

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

    }).then((result) => {
      if (result.value) {

        let solicitud = new Solicitud (null,null,null,null,null,null,null,null,null,null,null,null,null,null,
          null,null,this.tutor_id,null,this.estado_anteproyecto,null,null,form.value.estado_proyecto,null,null,null,null,form.value.notas,"Aprobada")
        this.proyectoGradoService.putSolicitud(this._id, solicitud).subscribe();

      }
    })

  }
  getSolicitudes() {
    let administrativo = JSON.parse(localStorage.getItem("administrativo"));
    this.programa = administrativo.programa._id;
    this.proyectoGradoService.getSolicitudes().subscribe((resp: any) => {
      this.solicitudes = resp.proyectogrados;
      console.log(resp);
    }); 
  }

  getDataInfo(data: any) {

    this.formulario = data;
    
    this._id = data._id;
    this.estado = data.estado
    this.notas = data.notas;
    if (!data?.tutor) {
      this.tutorNombres = null;
      this.tutorApellidos = null;

    } else {
      this.tutorNombres = data.tutor.nombres;
      this.tutorApellidos = data.tutor.apellidos;
      this.tutor_id = data.tutor._id;
    }

    
    this.idEst = data.estudiante._id;
    this.nombreEst = data.estudiante.nombres;
    this.apellidoEst = data.estudiante.apellidos;
    this.codigoEst = data.estudiante.codigo;
    this.idEst = data.estudiante.identificacion;
    this.correoEst = data.estudiante.correo;
    this.idEstudiante = data.estudiante._id;

    this.estado_proyecto = data.estado_proyecto;
    this.estado_anteproyecto = data.estado_anteproyecto;

        
  }

  getTutores() {
    let data = JSON.parse(localStorage.getItem('administrativo'));
    let idPrograma = data.programa._id;
    this._tutoresService.getTutores(idPrograma).subscribe((resp: any) => {
      this.tutores = resp.admins;
    });
  }


  getDataBuscar(data) {

  }

}