import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SubirArchivoService } from '../../../../services/proyectoGrado/subir-archivo.service';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  uploadedFiles: Array<File>;
  info:any;
  nombreArchivo: string;
  MAX_SIZE_FILE: number = 25000000;
  proyecto = new FormData();

  constructor(private subirArchivoservice: SubirArchivoService) { }

  ngOnInit(): void {
    // Obtenemos la información del estudiante y se la pasamos a la variable info
    const estudiante = JSON.parse(localStorage.getItem('estudiante'));
    this.info = estudiante;
   
    
  }
  getFile(file: File) {
    
    if (file.size > this.MAX_SIZE_FILE) {

      Swal.fire({
  
        title: 'Lo Sentimos',
        html: `<p><b>${file.name}</b>, supera las 25 MB</p>`,
        icon: 'error',
        confirmButtonText: 'Ok',
        showCancelButton: false,
        confirmButtonColor: '#60D89C',
  
      }).then(() => {
        location.reload()
      });
    }else {
      this.nombreArchivo = file.name;
      let proyecto = <File>file;
      this.proyecto.append('proyecto',proyecto,proyecto.name);

    }
    
  }
  
  enviarpdf(){
    Swal.fire({
      title:`¿Seguro de subir este archivo? `,
      text:  this.nombreArchivo,
      icon: 'warning',
      cancelButtonText: 'NO',
      confirmButtonText: 'SI',

      showCancelButton: true,
      confirmButtonColor: '#60D89C',
      cancelButtonColor: '#d33',
      

    }).then((result) => {
      if (result.value) {
        let idEstudiante = JSON.parse(localStorage.getItem('estudiante'))._id;

          // call service
        this.subirArchivoservice.uploadFile(idEstudiante,this.proyecto).subscribe();
        

      }
    })
  }



  



  onFileChange(e){
    this.uploadedFiles = e.target.files;
  }

}
