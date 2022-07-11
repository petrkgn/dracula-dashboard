import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { WidgetsModule } from "./widgets/widgets.module";
import { FeaturesModule } from "./features/features.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    WidgetsModule,
    FeaturesModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
