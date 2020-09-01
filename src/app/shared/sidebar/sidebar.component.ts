import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/service.index';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { ProyectoGradoService } from '../../services/proyectoGrado/proyecto-grado.service';


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
  noProyecto: string;
  EstadoAnte: string;
  EstadoProy: string;
  EstadoDoc: string;

  // Inyectamos el loginService para hacer el logOut directamente en el html
  constructor( public _loginService: LoginService,
    public SidebarService:SidebarService,
    public proyectogradoService: ProyectoGradoService
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
      if (JSON.parse(localStorage.getItem('estudiante')).modalidad) {
        let idproyectogrado = JSON.parse(localStorage.getItem('estudiante'))?.modalidad._id;
        this.proyectogradoService.getProyectogrado(idproyectogrado).subscribe((resp: any) => {
          console.log(resp)
          this.EstadoPreInsc = resp.proyectogrado?.estado;
          this.EstadoAnte = resp.proyectogrado?.estado_anteproyecto;
          this.EstadoProy= resp.proyectogrado?.estado_proyecto;
          this.EstadoDoc= resp.proyectogrado?.estado_documento_final;
        });

      }
      
      //this.EstadoPreInsc = JSON.parse(localStorage.getItem('estudiante')).modalidad.estado;
      this.noProyecto = JSON.parse(localStorage.getItem('estudiante')).modalidad

    }else {
      this.menuAdmin = this.SidebarService.menuAdmin;
    }
  }

}
