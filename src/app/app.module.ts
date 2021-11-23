import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ServicesDetailsComponent } from './view-page/services-details/services-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewPageComponent,
    ServicesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
