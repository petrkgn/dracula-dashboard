import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';



@NgModule({
  declarations: [NewsWidgetComponent, WeatherWidgetComponent],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
