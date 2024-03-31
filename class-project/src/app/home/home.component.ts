import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div style="text-align:center" class="content">
    <h1 class="lead">
      Home Dashboard To {{title}}!
    </h1>
    <div class="container-md ">
      <div class="row">
        <div class="col-2">&nbsp;</div>
        <div class="col-8">
          <span class="border border-primary">
            <a class="btn btn-primary" href="/model-driven">Model-Driven Form</a>
          </span>
          <span class="border border-secondary">
            <a class="btn btn-secondary" href="/template-driven">Template-Driven Form</a>
          </span>
        </div>
        <div class="col-2">&nbsp;</div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent {
  title = 'Choose Your Form';
}
