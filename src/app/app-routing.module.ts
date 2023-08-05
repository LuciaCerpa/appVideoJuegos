import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), AutenticacionModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
