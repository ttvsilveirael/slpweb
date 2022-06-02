import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MenuComponent } from "./menu/menu.component";
import { MenuItemComponent } from "./menu-item/menu_itemcomponent";


@NgModule({
    declarations: [
        HomeComponent,
        ToolbarComponent,
        MenuComponent,
        MenuItemComponent,
    ],
    exports: [
        HomeComponent,
        ToolbarComponent,
        MenuComponent,
        MenuItemComponent
    ],
    
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,        
    ],
})
export class ComponentsModule { }
