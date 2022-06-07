import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Guard } from './auth/auth-guard.service';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AulasComponent } from './components/aulas/aulas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { VideoPlayerComponent } from './components/video-player/video_player.component';

const routes: Routes = [
  { path: 'sobre', component: SobreComponent, canActivate: [Guard] },
  { path: 'aulas', component: AulasComponent, canActivate: [Guard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [Guard] },
  { path: 'agenda', component: AgendaComponent, canActivate: [Guard] },
  { path: 'dashboard', component: HomeComponent, canActivate: [Guard] },
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [Guard], component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
