import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenWeatherComponent } from './open-weather/open-weather.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule, MatTabGroup} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FutureComponent } from './future/future.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchWeatherDisplayComponent } from './search-weather-display/search-weather-display.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenWeatherComponent,
    FutureComponent,
    SearchWeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTabGroup,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
