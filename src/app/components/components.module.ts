import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MenuComponent } from "./menu/menu.component";
import { MenuItemComponent } from "./menu-item/menu_itemcomponent";
import { MyTextInputComponent } from "./my_text_input/my_text_input.component";
import { MyButtonComponent } from "./my_button_input/my_button.component";
import { LoginComponent } from "./login/login.component";
import { AulasComponent } from "./aulas/aulas.component";
import { AulaComponent } from "./aula/aula.component";


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
        AulaComponent
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
        AulaComponent
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
    ],
})
export class ComponentsModule { }
