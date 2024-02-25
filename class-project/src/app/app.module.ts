import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ModelDComponent } from './model-d/model-d.component';
import { TemplateDComponent } from './template-d/template-d.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelDComponent,
    TemplateDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
