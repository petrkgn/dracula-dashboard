import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { WidgetContainerComponent } from "@features/widget-create/widget-container/widget-container.component";

@Component({
  selector: "app-news-widget",
  templateUrl: "./news-widget.component.html",
  styleUrls: ["./news-widget.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsWidgetComponent {
  // @Input() currentWidgetContent: Observable<any> | null = null;

  constructor(public widgetContainer: WidgetContainerComponent) {}
}
