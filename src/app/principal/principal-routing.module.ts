import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasDescargadosComponent } from './mas-descargados/mas-descargados.component';
import { MasPopularesComponent } from './mas-populares/mas-populares.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { AgregarJuegoComponent } from './agregar-juego/agregar-juego.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { principalGuard } from '../principal.guard';

const routes: Routes = [
  { path: "home", component: ContenedorComponent, canActivate: [principalGuard], 
    children: [
      { path: "masPopulares", component: MasPopularesComponent },
  { path: "masDescargados", component: MasDescargadosComponent },
  { path: "proximamente", component: ProximamenteComponent },
  { path: "agregarJuego", component: AgregarJuegoComponent }
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
