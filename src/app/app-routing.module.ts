import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './auth/auth-guard.service';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'perfil', component: HomeComponent, canActivate: [Guard] },
  { path: 'aulas', component: HomeComponent, canActivate: [Guard] },
  { path: 'aula', component: HomeComponent, canActivate: [Guard] },
  { path: 'dashboard', component: HomeComponent, canActivate: [Guard] },
  { path: 'login', component: HomeComponent },
  { path: '', canActivate: [Guard], component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
