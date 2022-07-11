import { Component } from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public currentContent$: Observable<any> = of([
    { title: "News day", description: "lorem ipsum" },
  ]);
}
