import { Component, OnInit } from '@angular/core';
import { ProyectoGradoService } from '../../../../services/proyectoGrado/proyecto-grado.service';
import { DocumentService } from '../../../../services/document/document.service';


declare function init_plugins();


@Component({
  selector: 'app-seguimiento-modalidad',
  templateUrl: './seguimiento-modalidad.component.html',
  styleUrls: ['./seguimiento-modalidad.component.css']
})

export class SeguimientoModalidadComponent implements OnInit {
  info: any; // Almacenará la info del estudiante (en JSON)

  constructor(
    public proyectoGradoService: ProyectoGradoService,
    public _documentService: DocumentService,
    
  ) { }

  ngOnInit(): void {
    
    init_plugins();
    /*this.getFormulario();
    

  }
  // Obtenemos el programa y lo pasamos a la variable Programa
  /*getFormulario() {
   // this._documentService.getFormulario().subscribe((resp) => {
      let infoDocument = resp['document'];
      console.log(infoDocument);
      this.document = infoDocument.titulo_proyecto;
    });*/


  // Obtenemos la información del estudiante y se la pasamos a la variable info
    const estudiante = JSON.parse(localStorage.getItem('estudiante'));
    this.info = estudiante;

  
  
}
}
