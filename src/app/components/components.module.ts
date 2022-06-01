import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { MenuItemComponent } from "./menu-item/menu_itemcomponent";
import { VideoPlayerComponent } from "./video-player/video_player.component";


@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent,
        MenuItemComponent,
        VideoPlayerComponent
    ],
    exports: [
        HomeComponent,
        MenuComponent,
        MenuItemComponent,
        VideoPlayerComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
    ],
})
export class ComponentsModule { }
