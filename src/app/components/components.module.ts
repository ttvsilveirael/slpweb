import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AulaComponent } from "./aula/aula.component";
import { AulasComponent } from "./aulas/aulas.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MenuItemComponent } from "./menu-item/menu_itemcomponent";
import { MenuComponent } from "./menu/menu.component";
import { ModuleComponent } from './module/module.component';
import { MyButtonComponent } from "./my_button_input/my_button.component";
import { MyTextInputComponent } from "./my_text_input/my_text_input.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    MenuComponent,
    MenuItemComponent,
    LoginComponent,
    MyButtonComponent,
    MyTextInputComponent,
    AulasComponent,
    AulaComponent,
    ModuleComponent
  ],
  exports: [
    HomeComponent,
    ToolbarComponent,
    MenuComponent,
    MenuItemComponent,
    LoginComponent,
    MyButtonComponent,
    MyTextInputComponent,
    AulasComponent,
    AulaComponent,
    ModuleComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],

})
export class ComponentsModule { }
