import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
 /* menuEstudiante: any[] = [
    {
      titulo: 'Formulario Inscripción ',
      icono: 'assets/svg/find_in_page.svg',
      url: '/solicitud-proyecto-de-grado'
      
    },
   {
     titulo: 'Fase de modalidad',
      submenu: [
       {icono: 'assets/svg/sync-b.svg',titulo:'Anteproyecto', url: '/anteproyecto'},
       {icono: 'assets/svg/sync-b.svg',titulo:'Anteproyecto', url: '/proyecto'},
        {icono: 'assets/svg/sync-b.svg',titulo:'Anteproyecto', url: '/Documento Final'}
      ]
     
      
    },
    {
      titulo: 'Seguimiento modalidad ',
      icono: 'assets/svg/find_in_page.svg',
      url: '/seguimiento-proyecto-de-grado'
      
    }
  ]

  //
  menuAdmin: any[] = [
    {
      titulo: 'Formulario ',
      icono: 'assets/svg/find_in_page.svg',
      url: '/solicitud-proyecto-de-grado'
      
    },
   {
     titulo: 'Fase ',
      submenu: [
       {icono: 'assets/svg/sync-b.svg',titulo:'Antepro', url: '/anteproyecto'},
       {icono: 'assets/svg/sync-b.svg',titulo:'Antepro', url: '/proyecto'},
        {icono: 'assets/svg/sync-b.svg',titulo:'Antep', url: '/Documento Final'}
      ]
     
      
    },
    {
      titulo: 'Seguimiento modalidad ',
      icono: 'assets/svg/find_in_page.svg',
      url: '/seguimiento-proyecto-de-grado'
      
    }
  ]
*/
menuAdmin: any = [
  {
    titulo: 'Proyecto de Grado',
    icono: 'fa fa-book',
    submenu: [
      { titulo: 'formularios de Inscripción', url: '/formulario' },
      { titulo: 'Anteproyectos', url: '/anteproyectos' },
      { titulo: 'Proyectos', url: '/proyectos' },
      { titulo: 'Documentos Finales', url: '/docFinales' },
      
    ]
  },
  {
    titulo: 'Semilleros',
    icono: 'mdi mdi-school',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'Progress Bar', url: '/progress' },
      { titulo: 'Graficas', url: '/graficas1' },
      { titulo: 'Promesas', url: '/promesas' },
      { titulo: 'Rxjs', url: '/rxjs' },
    ]
  },
  {
    titulo: 'Pasantía',
    icono: 'fa fa-briefcase',
    submenu: [
      { titulo: 'Gestión de Empresas', url: '/empresas' },
      { titulo: 'Gestión de Vacantes', url: '/vacantes' },
      { titulo: 'Solicitudes Por Vacantes', url: '/solicitudes' },
      { titulo: 'Propuestas de Pasantía', url: '/propuestas' },
    ]
  }
];



menuTutor: any = [
  {
    titulo: 'Proyecto de Grado',
    icono: 'fa fa-book',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'Progress Bar', url: '/progress' },
      { titulo: 'Graficas', url: '/graficas1' },
      { titulo: 'Promesas', url: '/promesas' },
      { titulo: 'Rxjs', url: '/rxjs' },
    ]
  },
  {
    titulo: 'Semilleros',
    icono: 'mdi mdi-school',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'Progress Bar', url: '/progress' },
      { titulo: 'Graficas', url: '/graficas1' },
      { titulo: 'Promesas', url: '/promesas' },
      { titulo: 'Rxjs', url: '/rxjs' },
    ]
  },
  {
    titulo: 'Pasantías',
    icono: 'fa fa-briefcase',
    submenu: [
      { titulo: 'Tutorías Asignadas', url: '/pasantias-asignadas' },
    ]
  }
];


menuEstudiante: any[] = [
  {
    titulo: 'Formulario de inscripcion',
    icono: 'fa fa-check-square-o',
    submenu: [
      { titulo: 'Formulario', url: '/solicitud-proyecto-de-grado' },
    ]
  },
  {
    titulo: 'Seguimiento',
    icono: 'fa fa-book',
    submenu: [
      { titulo: 'ver seguimiento', url: '/seguimiento-proyecto-de-grado' },

    ]
  },
  {
    titulo: 'Fases de la modalidad',
    icono: 'fa fa-file-pdf-o',
    submenu: [
      { titulo: 'Anteproyecto', url: '/anteproyecto' },
      { titulo: 'Proyecto', url: '/proyecto' },
      { titulo: 'Documento Final', url: '/documento-final' }]
  },
  {
    titulo: 'Sustentación',
    icono: 'fa fa-file-text-o',
    submenu: [
      { titulo: 'sustentacion', url: '/sustentacion' },
    ]
  }
]
  constructor() { }
  
}
