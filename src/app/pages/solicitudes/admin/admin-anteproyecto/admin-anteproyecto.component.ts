import { Component, OnInit } from '@angular/core';
import { ProyectoGradoService } from '../../../../services/proyectoGrado/proyecto-grado.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProyectoAdmin } from '../../../../models/proyecto-admin';
import { Solicitud } from '../../../../models/solicitud';
import { TutoresService } from 'src/app/services/tutores/tutores.service';



@Component({
  selector: 'app-form-proyecto',
  templateUrl: './admin-anteproyecto.component.html',
  styleUrls: ['./admin-anteproyecto.component.css']
})
export class AdminAnteproyectoComponent implements OnInit {
  formulario: Solicitud;
  info: any;
  solicitudes: any[];
  programa: string;

  _id: string;
  estado: string;
  notas: string;
  tutor: string[];

  letra: string;
  titulo: string;
  //empresa: string;
  //ubicacion: string;
  modalidad: string;
  //tutores: string;
  tutores: any[] = [];
  tutorNombres: string;
  tutorApellidos: string;
  estado_propuesta: string;
  notas_propuesta: string;

//-----Estudiante Principal-------//
  nombreEst: string;
  apellidoEst: string;
  codigoEst: string;
  idEst: string;
  correoEst: string;
  
 

  proyectos: any[];
  

  preInscripcion: any;
 
 
 

  




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
          null,null,null,null,null,null,null,null,null,null,null,form.value.notas,form.value.estado)
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
    }

    
    this.idEst = data.estudiante._id;
    this.nombreEst = data.estudiante.nombres;
    this.apellidoEst = data.estudiante.apellidos;
    this.codigoEst = data.estudiante.codigo;
    this.idEst = data.estudiante.identificacion;
    this.correoEst = data.estudiante.correo;

        
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