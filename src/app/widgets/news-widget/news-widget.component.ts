import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-news-widget",
  templateUrl: "./news-widget.component.html",
  styleUrls: ["./news-widget.component.scss"],
})
export class NewsWidgetComponent {
  @Input() currentWidgetContent: Observable<any> | null = null;
}
