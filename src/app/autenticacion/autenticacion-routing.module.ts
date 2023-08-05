import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PrincipalRoutingModule } from '../principal/principal-routing.module';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:"", component: InicioSesionComponent},
  {path:"registro", component: RegistroComponent},
  {path:"**", component: InicioSesionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes), PrincipalRoutingModule],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
