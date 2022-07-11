import { InjectionToken } from "@angular/core";
import { NewsWidgetComponent } from "@widgets/news-widget/news-widget.component";
import { WeatherWidgetComponent } from "@widgets/weather-widget/weather-widget.component";

export const WIDGET_LIST = new InjectionToken("widget list token", {
  factory: () => widgetMap,
});

const widgetMap: Map<string, any> = new Map([
  ["news", NewsWidgetComponent],
  // ["weather", WeatherWidgetComponent],
]);
