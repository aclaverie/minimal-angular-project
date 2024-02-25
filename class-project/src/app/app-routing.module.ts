import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelDComponent } from './model-d/model-d.component';
import { TemplateDComponent } from './template-d/template-d.component';


const routes: Routes = [
  { path: 'modelD', component: ModelDComponent },
  { path: 'templateD', component: TemplateDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
