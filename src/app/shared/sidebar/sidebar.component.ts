import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/service.index';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  menuEstudiante: any[];
  menuAdmin: any[];
  EstadoPreInsc: string;
  EstadoAnte: string;
  EstadoProy: string;
  EstadoDoc: string;

  // Inyectamos el loginService para hacer el logOut directamente en el html
  constructor( public _loginService: LoginService,
    public SidebarService:SidebarService
    ) { 
      /*this.menuItems = SidebarService.menu;
      console.log(this.menuItems);
      */
    }

  ngOnInit(): void {
    this.getMenu()
    
    /*this.EstadoPreInsc = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado;
    this.EstadoAnte = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado_anteproyecto;
    this.EstadoProy = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado_proyecto;
    this.EstadoDoc = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado_documento_final;*/
  }

  getMenu() {
    if (localStorage.getItem('estudiante')){
      this.menuEstudiante = this.SidebarService.menuEstudiante;
    }else{
      this.menuAdmin = this.SidebarService.menuAdmin;
    }
  }

}
