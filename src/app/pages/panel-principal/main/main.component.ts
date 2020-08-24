import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit {
  info:any;

  constructor() { }

  ngOnInit(): void {
    // Obtenemos la información del estudiante y se la pasamos a la variable info
    const estudiante = JSON.parse(localStorage.getItem('estudiante'));
    this.info = estudiante;
   
    
  }

}
