import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Solicitud } from '../../models/solicitud';
import { URL_SERVICES } from 'src/app/config/config';
import { map } from 'rxjs/internal/operators/map';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ProyectoGradoService {

  constructor(public http:HttpClient, public router: Router) { }
  
  postSolicitud(solicitud:Solicitud,
    id_Estudiante:string){
      
      let token =localStorage.getItem("token")

      let url =`${URL_SERVICES}/proyectogrado/${id_Estudiante}?token=${token}`; 


      return this.http.post(url, solicitud).pipe(map((resp: any) => {

        if (resp.ok == true) {
  
          Swal.fire({
            title: '¡Bien Hecho!',
            text:'espera a que acepten tu solicitud',
            html: `Su solicitud fue exitosa, el radicado de su solicitud es: <b> ${resp.solicitudGuardada._id}</b>. <br> <center> Por favor vuelva a Iniciar Sesión </center>`,
            icon: 'success'
          }).then(() => {
            this.router.navigate(['/login'])
          });
        }
  
        return true;
  
      }), catchError((err) => {
  
        Swal.fire({
          title: '¡Error!',
          text: err.error.mensaje,
          icon: 'error',
        });
  
        return throwError(err);
  
      }));

    }
    getSolicitud(solicitud:Solicitud,
      id_Estudiante:string){
        
        let token =localStorage.getItem("token")
  
        let url =`${URL_SERVICES}/proyectogrado/${id_Estudiante}?token=${token}`; 
  
  
        return this.http.post(url, solicitud).pipe(map((resp: any) => {
  
          if (resp.ok == true) {
    
            Swal.fire({
              title: '¡integrante agredado correctamente!',
              text:'',
              html: `Su solicitud fue exitosa, el radicado de su solicitud es: <b> ${resp.solicitudGuardada._id}</b>. <br> <center> Por favor vuelva a Iniciar Sesión </center>`,
              icon: 'success'
            }).then(() => {
              this.router.navigate(['/login'])
            });
          }
    
          return true;
    
        }), catchError((err) => {
    
          Swal.fire({
            title: '¡No se pudo agregar el integrante!',
            text: err.error.mensaje,
            icon: 'error',
            
          });
    
          return throwError(err);
    
        }));
  
      }

}
