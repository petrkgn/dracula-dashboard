import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";

import { WidgetContentService } from "../services/widget-content.service";
import { WIDGET_CONFIG } from "../widget-config.token";
import { WIDGET_LIST } from "../widget-list.token";

@Component({
  selector: "app-widget-container",
  templateUrl: "./widget-container.component.html",
  styleUrls: ["./widget-container.component.scss"],
  providers: [WidgetContentService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetContainerComponent implements OnInit, DoCheck {
  public widgetContext: string = "news";
  public currentWidgetContent: Observable<any> = {} as Observable<any>;
  public widgetTemplate: any;

  constructor(
    @Inject(WIDGET_CONFIG) private widgetConfig: Record<string, any>,
    @Inject(WIDGET_LIST) private readonly widgetList: Map<string, {}>,
    private readonly contentService: WidgetContentService
  ) // private readonly cdr: ChangeDetectorRef
  {}

  ngOnInit(): void {
    this.setWidgetTemplate();
    this.setCurrentWidgetContent();
  }

  ngDoCheck(): void {
    // this.cdr.markForCheck();
  }

  setWidgetTemplate() {
    this.widgetTemplate = this.widgetList.get(this.widgetContext);
  }

  setCurrentWidgetContent() {
    this.currentWidgetContent = this.contentService.getContentFromApi(
      this.widgetConfig[this.widgetContext].requestConfig,
      this.widgetConfig[this.widgetContext].responseAdapter,
      this.widgetConfig[this.widgetContext].contentAdapter
    );
  }
}
