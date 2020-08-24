import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { MainComponent } from './panel-principal/main/main.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PerfilComponent } from './panel-principal/perfil/perfil.component';
import { PasantiaComponent } from './solicitudes/pasantia/pasantia/pasantia.component';
import { SemilleroComponent } from './solicitudes/semillero/semillero/semillero.component';
import { ModalidadesComponent } from './modalidades/modalidades.component';


// Rutas de pages
import { PAGES_ROUTES } from './pages.routes';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormularioInscripcionComponent } from './solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component';
import { SeguimientoModalidadComponent } from './solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component';
import { AnteproyectoComponent } from './solicitudes/proyecto/anteproyecto/anteproyecto.component';
import { ProyectoComponent } from './solicitudes/proyecto/proyecto/proyecto.component';
import { DocFinalComponent } from './solicitudes/proyecto/doc-final/doc-final.component';
import { FormsModule } from '@angular/forms';
import { SustentacionComponent } from './solicitudes/proyecto/sustentacion/sustentacion.component';
import { FormProyectoComponent } from './solicitudes/admin/form-proyecto/form-proyecto.component';


@NgModule({
  declarations: [
    PagesComponent,
    MainComponent,
    PerfilComponent,
    PasantiaComponent,
    FormularioInscripcionComponent,
    SemilleroComponent,
    ModalidadesComponent,
    FormularioInscripcionComponent,
    SeguimientoModalidadComponent,
    AnteproyectoComponent,
    ProyectoComponent,
    DocFinalComponent,
    SustentacionComponent,
    FormProyectoComponent

  ],
  exports: [
    CommonModule,
    PagesComponent,
    MainComponent,
    PerfilComponent,
    PasantiaComponent,
    FormularioInscripcionComponent,
    SemilleroComponent,
    ModalidadesComponent,
    ProyectoComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    PipesModule,
    BrowserModule,
    FormsModule
  ]
})
export class PagesModule { }
