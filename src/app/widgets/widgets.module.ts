import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsWidgetComponent } from "./news-widget/news-widget.component";
import { WeatherWidgetComponent } from "./weather-widget/weather-widget.component";
import { AsyncDataDirective } from "../shared/directives/async-data.directive";

@NgModule({
  declarations: [
    NewsWidgetComponent,
    WeatherWidgetComponent,
    AsyncDataDirective,
  ],
  imports: [CommonModule],
  exports: [NewsWidgetComponent],
})
export class WidgetsModule {}
