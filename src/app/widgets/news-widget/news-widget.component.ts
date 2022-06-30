import { Component, Input } from "@angular/core";

@Component({
  selector: "app-news-widget",
  templateUrl: "./news-widget.component.html",
  styleUrls: ["./news-widget.component.scss"],
})
export class NewsWidgetComponent {
  @Input() currentWidgetContent: any;
  constructor() {}
}
