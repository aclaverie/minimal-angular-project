import { Component } from '@angular/core';
import Account  from '../app.Account';

@Component({
  selector: 'app-model-d',
  template: `
    <div style="text-align:center" class="content">
      <h1 class="lead">
        Model-Driven {{title}}!
      </h1>
      <br />
      <div class="container-md ">
        <div class="row">
          <div class="col">&nbsp;</div>
          <div class="col-6 bg-light text-dark border border-primary p-4">
            <p class="lead">Kindly fill out the below form to create an account</p>
            <form #acctForm=ngForm (ngSubmit)="onSubmit(acctForm.value)">
              <div class="mb-3">
                <label for="inputFirstName" class="form-label">First Name</label>
                <input type="text" class="form-control" 
                  id="inputFirstName" 
                  #inputFirstName="ngModel" 
                  name="inputFirstName" 
                  required
                  minlength="3"
                  ngModel>
                <span *ngIf="inputFirstName.valid && inputFirstName.touched" class="text-danger">First Name is required</span>
              </div>
              <div class="mb-3">
                <label for="inputLastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" 
                  id="inputLastName" 
                  #inputLastName="ngModel" 
                  name="inputLastName" 
                  required
                  minlength="3"
                  ngModel>
                <span *ngIf="inputLastName.valid && inputLastName.touched" class="text-danger">Last Name is required</span>
              </div>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email address</label>
                <input type="email" class="form-control" id="inputEmail" #inputEmail="ngModel" name="inputEmail" aria-describedby="emailHelp" ngModel>
                <span *ngIf="inputEmail.valid && inputEmail.touched" class="text-danger">Email is required</span>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="inputDeposit" class="form-label">Opening Balance</label>
                <input type="text" class="form-control" 
                  id="inputDeposit" 
                  #inputDeposit="ngModel" 
                  name="inputDeposit" 
                  required
                  minlength="3"
                  ngModel>
                <span *ngIf="inputDeposit.valid && inputDeposit.touched" class="text-danger">An opening Balance is required</span>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="savingOrFixed" #savingOrFixed="ngModel" name="savingOrFixed" ngModel>
                <span *ngIf="savingOrFixed.valid && savingOrFixed.touched" class="text-danger">Please check if it is not a regular savings but a fixed deposit</span>
                <label class="form-check-label" for="savingOrFixed">Check if it is not a regular savings but a fixed deposit</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col">&nbsp;</div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ModelDComponent {
  title = 'Account Registeration Form';

  onSubmit(formValue: any) {
    formValue.savingOrFixed === true ? formValue.savingOrFixed = 1 : formValue.savingOrFixed = 0;
    let acct1 = new Account(
      formValue.inputFirstName, 
      formValue.inputLastName, 
      formValue.inputEmail, 
      formValue.inputDeposit, 
      formValue.savingOrFixed);
    console.log('Form Value = ', formValue);
    console.log('Account Details = ', acct1);
    console.log('Account Balance = ', acct1.getAccountDetails());
  }
}
