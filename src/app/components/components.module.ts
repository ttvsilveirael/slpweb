import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";



@NgModule({
    declarations: [
        HomeComponent,
        ToolbarComponent,
    ],
    exports: [
        HomeComponent,
        ToolbarComponent,
        
        
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        
    ],
})
export class ComponentsModule { }
