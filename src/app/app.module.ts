import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ServicesDetailsComponent } from './view-page/services-details/services-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPageComponent,
    ServicesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
