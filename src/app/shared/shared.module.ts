import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    RouterModule
  ], 
  declarations: [
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent
   
  ],
  providers:[
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent, 
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
