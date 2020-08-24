import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';



@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {
  
  constructor( private http:HttpClient,private router:Router){}

  uploadFile(idEstudiante:string,anteproyecto:FormData){
    let token = localStorage.getItem('token')
    let urlApi = `http://localhost:3000/uploadFile/${idEstudiante}?token=${token}`;
    return this.http.put(urlApi,anteproyecto).pipe(map((resp: any) => {

      if (resp.ok == true) {

        Swal.fire({
          title: '¡Bien Hecho!',
          text: `Se ha enviado correctamente el documento`,
          icon: 'success'
        }).then(() => {
          this.router.navigate(['/mi-modalidad'])
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


}
