import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule],
  declarations: [AppComponent, WeatherWidgetComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
