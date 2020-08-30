import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { MainComponent } from './panel-principal/main/main.component';
import { LoginGuardGuard } from '../services/service.index';
import { PerfilComponent } from './panel-principal/perfil/perfil.component';
import { PasantiaComponent } from './solicitudes/pasantia/pasantia/pasantia.component';
import { FormularioInscripcionComponent } from './solicitudes/proyecto/formulario-inscripcion/formulario-inscripcion.component';
import { SemilleroComponent } from './solicitudes/semillero/semillero/semillero.component';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { SeguimientoModalidadComponent } from './solicitudes/proyecto/seguimiento-modalidad/seguimiento-modalidad.component';
import { AnteproyectoComponent } from './solicitudes/proyecto/anteproyecto/anteproyecto.component';
import { ProyectoComponent } from './solicitudes/proyecto/proyecto/proyecto.component';
import { DocFinalComponent } from './solicitudes/proyecto/doc-final/doc-final.component';
import { SustentacionComponent } from './solicitudes/proyecto/sustentacion/sustentacion.component';
import { FormProyectoComponent } from './solicitudes/admin/form-proyecto/form-proyecto.component';
import { AdminAnteproyectoComponent } from './solicitudes/admin/admin-anteproyecto/admin-anteproyecto.component';
import { AdminProyectoComponent } from './solicitudes/admin/admin-proyecto/admin-proyecto.component';
import { AdminDocFinalComponent } from './solicitudes/admin/admin-doc-final/admin-doc-final.component';




const pagesRoutes: Routes = [
    
    {path: 'modalidades', component: ModalidadesComponent, data: { titulo: 'Modalidades Disponibles'}, canActivate: [ LoginGuardGuard ]},
    {path: 'solicitud-pasantia-supervisada', component: PasantiaComponent, data: { titulo: 'Solicitud Pasantía'}, canActivate:[LoginGuardGuard]}, 
    {path: 'solicitud-semillero-de-investigacion', component: SemilleroComponent, data: { titulo: 'Solicitud Semillero'}, canActivate:[LoginGuardGuard]},
    {path: 'solicitud-proyecto-de-grado', component: FormularioInscripcionComponent, data: { titulo: 'Solicitud Proyecto'},canActivate:[LoginGuardGuard]},
    
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'panel-principal', component: MainComponent, data: { titulo: 'Panel Principal'}},
            { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de Usuario' } },
            {path: 'seguimiento-proyecto-de-grado', component: SeguimientoModalidadComponent, data: { titulo: 'Seguimiento Proyecto'},canActivate:[LoginGuardGuard]},
            {path: 'anteproyecto', component: AnteproyectoComponent, data: { titulo: 'anteproyecto'},canActivate:[LoginGuardGuard]},
            {path: 'proyecto', component: ProyectoComponent, data: { titulo: 'proyecto'},canActivate:[LoginGuardGuard]},
            {path: 'documento-final', component: DocFinalComponent, data: { titulo: 'anteproyecto'},canActivate:[LoginGuardGuard]},
            {path: 'sustentacion', component: SustentacionComponent, data: { titulo: 'sustentacion'},canActivate:[LoginGuardGuard]},
            {path: 'formulario', component: FormProyectoComponent, data: { titulo: 'formularios'},canActivate:[LoginGuardGuard]},
            {path: 'Admin-anteproyecto', component: AdminAnteproyectoComponent, data: { titulo: 'Anteproyectos'},canActivate:[LoginGuardGuard]},
            {path: 'Admin-proyecto', component: AdminProyectoComponent, data: { titulo: 'Proyectos'},canActivate:[LoginGuardGuard]},
            {path: 'Admin-docfinal', component: AdminDocFinalComponent, data: { titulo: 'Documentos finales'},canActivate:[LoginGuardGuard]},

            { path: '', redirectTo: '/panel-principal', pathMatch: 'full'}
        ]
    },
    
];

export const PAGES_ROUTES = RouterModule.forRoot( pagesRoutes, { useHash:true } );