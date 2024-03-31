import { Component } from '@angular/core';
import Account  from '../app.Account';
import { AccountType } from '../app.Account';

@Component({
  selector: 'app-template-d',
  template: `
    <div style="text-align:center" class="content">
      <h1 class="lead">
        Template-Driven {{title}}!
      </h1>
      <div class="container-md ">
        <div class="row">
          <div class="col-2">&nbsp;</div>
          <div class="col-8 bg-light text-dark border border-primary p-4">
            
            <form #acctForm=ngForm (ngSubmit)="onSubmit(acctForm.value)">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" 
                id="inputFirstName" 
                #inputFirstName="ngModel" 
                name="inputFirstName" 
                required
                minlength="3"
                placeholder="First Name"
                ngModel>
                <label for="inputFirstName" aria-label="inputFirstName">First Name</label>
                
                <span *ngIf="inputFirstName.invalid && inputFirstName.touched" class="text-danger">First Name is required</span>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" 
                  id="inputLastName" 
                  #inputLastName="ngModel" 
                  name="inputLastName" 
                  required
                  minlength="3"
                  placeholder="Last Name"
                  ngModel>
                <label for="inputLastName">Last Name</label>
                
                <span *ngIf="inputLastName.invalid && inputLastName.touched" class="text-danger">Last Name is required</span>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" 
                  id="inputEmail" 
                  #inputEmail="ngModel" 
                  name="inputEmail" 
                  required
                  placeholder="Email Address" 
                  ngModel>
                <label for="inputEmail">Email address</label>
                <span *ngIf="inputEmail.invalid && inputEmail.touched" class="text-danger">Email is required</span>
              </div>
              <div class="form-floating mb-3">
                <input type="text" class="form-control" 
                  id="inputDeposit" 
                  #inputDeposit="ngModel" 
                  name="inputDeposit" 
                  required
                  pattern="[0-9]*"
                  minlength="3"
                  placeholder="Opening Balance"
                  ngModel>
                <label for="inputDeposit">Opening Balance</label>
                <span *ngIf="inputDeposit.invalid && inputDeposit.touched" class="text-danger">An opening Balance is required</span>
              </div>
              <div class="form-floating mb-3">
                <select class="form-select" 
                  id="savingOrFixed" 
                  #savingOrFixed="ngModel" 
                  name="savingOrFixed" 
                  required
                  placeholder="Savings or Fixed Deposit"
                  ngModel>
                  <option value="0" id="Savings">Savings</option>
                  <option value="1" id="FixedDeposit">Fixed Deposit</option>
                </select>
                <label for="savingOrFixed">Savings or Fixed Deposit</label>
                <span *ngIf="savingOrFixed.invalid && savingOrFixed.touched" class="text-danger">Please select an option</span>
              </div>
              <button id="SubmitBtn" type="submit" [disabled]='acctForm.invalid' class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div class="col-2">
            <div class="newAcct">
              <div  [innerHTML]="BankAcct"></div>              
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
    
    </div>

  `,
  styleUrls: ['./template-d.component.css']
})
export class TemplateDComponent {
  title = 'Account Registeration Form';
  BankAcct: String = 'Kindly fill out the relevant information';
  
  onSubmit(formValue: any) {
    formValue.savingOrFixed === true ? formValue.savingOrFixed = 0 : formValue.savingOrFixed = 1;
    let acct1 = new Account(
      formValue.inputFirstName, 
      formValue.inputLastName,
      formValue.inputDeposit,  
      formValue.inputEmail, 
      formValue.savingOrFixed);
    console.log('Form Value = ', formValue);
    console.log('Account Details = ', acct1);
    console.log('Account Register = ', acct1.getAccountDetails());
    console.log('Account Balance = ', acct1.getBalance());

    this.BankAcct = 
     `Account Number    :<br /> ${acct1.acctNumber}<br /><br />
     Account Name      :<br /> ${acct1.acctFirstName} ${acct1.acctLastName}<br /><br />
     Account Balance   :<br /> ${acct1.acctBalance}<br /><br />
     Account Email     :<br /> ${acct1.acctEmail}<br /><br />
     Account Type      :<br /> ${AccountType[acct1.acctType].toString()}<br /><br />`;
  }
}
