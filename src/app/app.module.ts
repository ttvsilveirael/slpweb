import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Guard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './components/home/home.component';
import { MyTextInputComponent } from './components/my_text_input/my_text_input.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [AuthService, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
