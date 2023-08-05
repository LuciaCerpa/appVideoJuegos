import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { NavBarComponent } from '../componentes/nav-bar/nav-bar.component';
import { MasPopularesComponent } from './mas-populares/mas-populares.component';
import { TarjetaComponent } from '../componentes/tarjeta/tarjeta.component';
import { MasDescargadosComponent } from './mas-descargados/mas-descargados.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { AgregarJuegoComponent } from './agregar-juego/agregar-juego.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContenedorComponent,
    NavBarComponent,
    MasPopularesComponent,
    TarjetaComponent,
    MasDescargadosComponent,
    ProximamenteComponent,
    AgregarJuegoComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
