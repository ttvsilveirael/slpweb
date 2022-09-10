import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './auth/auth-guard.service';
import { AulaComponent } from './components/aula/aula.component';
import { AulasComponent } from './components/aulas/aulas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'aulas', component: AulasComponent, canActivate: [Guard] },
  { path: 'aula', component: AulaComponent, canActivate: [Guard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [Guard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
