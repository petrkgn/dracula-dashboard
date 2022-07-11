import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetContainerComponent } from "./widget-create/widget-container/widget-container.component";

@NgModule({
  declarations: [WidgetContainerComponent],
  imports: [CommonModule],
  exports: [WidgetContainerComponent],
})
export class FeaturesModule {}
