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

  getSolicitudes() {

    let token = localStorage.getItem('token');
    let url = `${URL_SERVICES}/proyectogrado?token=${token}`;

    return this.http.get(url);

  }

  getProyectogrado(id: string) {

    let token = localStorage.getItem('token');
    let url = `${URL_SERVICES}/proyectogrado/${id}?token=${token}`;

    return this.http.get(url);

  }

  
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
    putSolicitud(id_Estudiante: string, solicitud: any){
        
        let token =localStorage.getItem("token")
  
        let url =`${URL_SERVICES}/proyectogrado/${id_Estudiante}?token=${token}`; 
  
  
        return this.http.put(url, solicitud).pipe(map((resp: any) => {
  
          if (resp.ok == true) {
    
            Swal.fire({
              title: '¡Bien Hecho!',
              text: `Se ha actualizado correctamente la solicitud`,
              icon: 'success'
            }).then(() => {
              location.reload();
            });
          }
    
          return true;
    
        }), catchError((err) => {
    
          Swal.fire({
            title: '¡Error al actualizar estado!',
        text: err.error.mensaje,
        icon: 'error',
            
          });
    
          return throwError(err);
    
        }));
  
      }

      getSolicitud(idSolicitud: string){
        let token =localStorage.getItem("token")
        let url =`${URL_SERVICES}/proyectogrado/${idSolicitud}?token=${token}`; 
        return this.http.get(url)
      }

}
