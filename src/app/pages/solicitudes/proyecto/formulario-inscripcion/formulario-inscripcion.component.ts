import { Component, OnInit } from '@angular/core';
import { LoginService, ProgramaService, ProyectoGradoService } from 'src/app/services/service.index';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Solicitud } from '../../../../models/solicitud';
declare function init_plugins();
@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent implements OnInit {
 // Obtenemos toda la información del usuario
 info: any;
 tipoUsuario: string;
 programa: String;
 mostrardatos:Boolean;
 

  constructor(
    public _loginService: LoginService,
    public _programaService: ProgramaService,
    public router: Router,
    public _solicitudService: ProyectoGradoService,

  ) { }

  ngOnInit(): void {
    init_plugins();
    this.getPrograma();
    this.setInfo();

  }
  // Obtenemos el programa y lo pasamos a la variable Programa
  getPrograma() {
    this._programaService.getPrograma().subscribe((resp) => {
      let infoPrograma = resp['programa'];
      console.log(infoPrograma);
      this.programa = infoPrograma.nombre;
    });
  }
   // "Ponemos" el restod e información a las variables globales
   setInfo() {
    let estudiante = localStorage.getItem('estudiante');
    let administrativo = localStorage.getItem('administrativo');

    if (estudiante) {
      this.tipoUsuario = 'estudiante';
      this.info = JSON.parse(estudiante);
    } else {
      this.tipoUsuario = 'administrativo';
      this.info = JSON.parse(administrativo);
    }
  }

  postSolicitud(form: NgForm){
    let idEstudiante = localStorage.getItem("id")

    Swal.fire({
      title: '¿hacer solicitud ?',
      text: `proceso de solicitud para proyecto de grado `,
      icon: 'warning',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      //background: '#8F141B',

      showCancelButton: true,
      confirmButtonColor: '#60D89C',
      cancelButtonColor: '#d33'

    }).then((result) => {
      if (result.value) {

        let solicitud = new Solicitud(
          form.value.nombreEst2,
          form.value.codigoEst2,
          form.value.identificacionEst2,
          form.value.programaEst2,
          form.value.correoEst2,
          form.value.nombreEst3,
          form.value.codigoEst3,
          form.value.identificacionEst3,
          form.value.programaEst3,
          form.value.correoEst3,
          form.value.tituloProyecto,
          form.value.lineaInvestigacion,
          form.value.directorProyecto,
          form.value.problema,
          form.value.alcance,
          form.value.metodologia
        )
      this._solicitudService.postSolicitud(solicitud, idEstudiante).subscribe();


      }
    })

  }
  active():void{
    this.mostrardatos=true;

  }
  inactive():void{
    this.mostrardatos=false;

  }


 // Función que direcciona cuando se da click en "perfil"
 irPerfil() {
  this.router.navigate(['/perfil']);
}

}
