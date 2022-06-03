import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './auth/auth-guard.service';
import { AulasComponent } from './components/aulas/aulas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'aulas', component: AulasComponent, canActivate: [Guard] },
  { path: 'perfil', component: HomeComponent, canActivate: [Guard] },
  { path: 'aula', component: HomeComponent, canActivate: [Guard] },
  { path: 'dashboard', component: HomeComponent, canActivate: [Guard] },
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [Guard], component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
