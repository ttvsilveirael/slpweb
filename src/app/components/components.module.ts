import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { MyTextInputComponent } from "./my_text_input/my_text_input.component";


@NgModule({
    declarations: [
        HomeComponent,
        MyTextInputComponent
    ],
    exports: [
        HomeComponent,
        MyTextInputComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
    ],
})
export class ComponentsModule { }
