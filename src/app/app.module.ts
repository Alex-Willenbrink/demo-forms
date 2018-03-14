import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { UsersService } from "./users.service";
import { FormService } from "./form.service";

import { AppComponent } from "./app.component";
import { ReactiveDrivenFormComponent } from "./reactive-driven-form/reactive-driven-form.component";
import { ImportantInfoComponent } from "./important-info/important-info.component";
import { LessImportantInfoComponent } from "./less-important-info/less-important-info.component";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveDrivenFormComponent,
    ImportantInfoComponent,
    LessImportantInfoComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [UsersService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
