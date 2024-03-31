import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Account  from '../app.Account';

@Component({
  selector: 'app-model-d',
  template: `
    <div style="text-align:center" class="content">
      <h1 class="lead">
        Model-Driven {{title}}!
      </h1>
      <div class="container-md ">
        <div class="row">
          <div class="col-2">&nbsp;</div>
          <div class="col-8 bg-light text-dark border border-primary p-4">
            
            <form 
              [formGroup]="form"
              (ngSubmit)="onSubmit(form.value)">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" 
                id="inputFirstName"
                name="inputFirstName" 
                required
                minlength="3"
                placeholder="First Name"
                formControlName="inputFirstName">
                <label for="inputFirstName" aria-label="inputFirstName">First Name</label>
                
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" 
                  id="inputLastName"
                  name="inputLastName" 
                  required
                  minlength="3"
                  placeholder="Last Name"
                  formControlName="inputLastName">
                <label for="inputLastName">Last Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" 
                  id="inputEmail"
                  name="inputEmail" 
                  required
                  placeholder="Email Address" 
                  formControlName="inputEmail">
                <label for="inputEmail">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" 
                  id="inputDeposit"
                  name="inputDeposit" 
                  required
                  minlength="3"
                  placeholder="Opening Balance"
                  formControlName="inputDeposit">
                <label for="inputDeposit">Opening Balance</label>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" 
                  id="savingOrFixed"
                  name="savingOrFixed" 
                  required
                  placeholder="Savings or Fixed Deposit"
                  formControlName="savingOrFixed">
                  <option value="0">Savings</option>
                  <option value="1">Fixed Deposit</option>
                </select>
                <label for="savingOrFixed">Savings or Fixed Deposit</label>
              </div>
              <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-2">&nbsp;</div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ModelDComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  // form: FormGroup;
  // [\\w\\-\\s\\/]+
  ngOnInit(): void {
      this.form = new FormGroup({
        inputFirstName: new FormControl('', Validators.compose([
          Validators.pattern('[\\w\\-\\s\\/]+'), 
          Validators.required
        ])),
        inputLastName: new FormControl('', Validators.compose([
          Validators.pattern('[\\w\\-\\s\\/]+'), 
          Validators.required
        ])),
        inputEmail: new FormControl('', Validators.compose([
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}'), 
          Validators.required
        ])),
        inputDeposit: new FormControl('', Validators.compose([
          Validators.pattern('[0-9]+'), 
          Validators.required
        ])),
        savingOrFixed: new FormControl('', Validators.required),
      });
  }

  title = 'Account Registeration Form';
  


  onSubmit(formValue: any) {
    formValue.savingOrFixed === true ? formValue.savingOrFixed = 1 : formValue.savingOrFixed = 0;
    let acct1 = new Account(
      formValue.inputFirstName, 
      formValue.inputLastName,       
      formValue.inputDeposit,
      formValue.inputEmail, 
      formValue.savingOrFixed
    );
    console.log('Form Value = ', formValue);
    console.log('Account Details = ', acct1);
    console.log(acct1.getAccountDetails());
    console.log('Account Balance = ', acct1.getBalance());
  }
}
