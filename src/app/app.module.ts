import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  GoogleApiModule, NgGapiClientConfig,
  NG_GAPI_CONFIG
} from "ng-gapi";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Guard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { ComponentsModule } from './components/components.module';
import { YoutubeService } from './services/youtube';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "CLIENT_ID",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/analytics"
  ].join(" ")
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [AuthService, Guard, YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }