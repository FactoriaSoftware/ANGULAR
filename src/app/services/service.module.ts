import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SharedService,
  LoginService,
  SidebarService,
  RequisitosService,
  LoginGuardGuard,
  ProgramaService,
  ModalidadService,
  ProyectoGradoService


} from './service.index'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule    
  ], providers: [
    LoginService,
    SharedService,
    SidebarService,
    RequisitosService,
    LoginGuardGuard,
    ProgramaService,
    ModalidadService,
    ProyectoGradoService
  ]
})
export class ServiceModule { }
