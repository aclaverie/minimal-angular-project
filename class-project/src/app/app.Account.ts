// Purpose: A simple banking system that allows for the creation of Savings and Fixed Deposit accounts
// Author: Anthony V. Claverie
// Last Modified: 2024-19-02

// Global variable to hold the registered Account users
var globalRegisteredAccounts:Account[] = [];

enum AccountType {
  Savings = 0,
  FixedDeposit = 1
}
export default class Account {
  // Properties of the Account class
  acctNumber: number;
  acctFirstName: string;
  acctLastName: string;
  acctEmail: string;
  acctBalance: number;
  acctType: number // 0 for Savings, 1 for Fixed Deposit
  
  // Constructor to initialize the account details
  constructor(acctFirstName: string, acctLastName: string,  acctBalance: number, acctEmail: string, acctType: number){
    this.acctNumber = this.getAcctNumber();
    this.acctFirstName = acctFirstName;
    this.acctLastName = acctLastName;
    this.acctEmail = acctEmail;
    this.acctBalance = acctBalance;
    this.acctType = acctType;
    console.log(`${acctFirstName} ${acctLastName} account created successfully with ${acctBalance}`);
  }

  // Method to generate account number
  getAcctNumber(): number{
    let aNum = Math.floor(Math.random() * 1000) + 1;
    if(this.acctNumberCheck(aNum, globalRegisteredAccounts)){
      return this.getAcctNumber();  
    } else {        
      return aNum;
    }
  }

  // Method to check if the account number already exists
  acctNumberCheck(acctNumber: number, registeredUsers: any[]): boolean{
    let found = false;
    registeredUsers.forEach((user) => {
      if(user.acctNumber == acctNumber){
        found = true;
      }
    });
    return found;
  }
  
  // Method to deposit into the account
  withdraw(amount: number): void{
    this.acctBalance -= amount;
    console.log(`Success! New account balance: ${this.acctBalance}`);
  }

  // Method to get the account balance
  getBalance(): number{
    return this.acctBalance;
  }  
  
  getAccountDetails(): void{
  // Looping through the global account registered users to display the account details
      globalRegisteredAccounts.forEach((account) => {
      
      // Variable to hold the account type
      let acctType:string = "";

      // Checking the account type and assigning the appropriate value to acctType
      switch(account.acctType){    
        case 0: acctType = AccountType[0].toString();
        break;
        case 1: acctType = AccountType[1].toString();
        break;
        default: acctType = "Invalid Account Type";
        break;
      }

      // Displaying the account details
      console.log(`
      Account Number: ${account.acctNumber} \t 
      Account Name: ${account.acctFirstName} ${account.acctLastName} \t 
      Account Balance: ${account.acctBalance} \t 
      Account Email: ${account.acctEmail} \t
      Account Type: ${acctType}`);
    });
  }
}

// Ideposit interface
// This interface has a deposit method
interface Ideposit{
  deposit(amount: number): void;
}

// Savings Account class that extends Account class and implements Ideposit interface
// Savings Account can only be created with any amount
class SavingsAccount extends Account implements Ideposit{
  constructor(acctFirstName: string, acctLastName: string, acctBalance: number, acctEmail: string){
    super(acctFirstName, acctLastName, acctBalance, acctEmail, AccountType.Savings);
  }

  // Overriding the deposit method  
  deposit(amount: number): void{
    this.acctBalance += amount;
    console.log(`Success! New account balance: ${this.acctBalance}`);
  }    
}

// Fixed Deposit Account class that extends Account class and implements Ideposit interface
// Fixed Deposit Account can only be created with a minimum of 1000
// Fixed Deposit Account can only be deposited with a minimum of 1000
class FixedAccount extends Account implements Ideposit{
  constructor(acctFirstName: string, acctLastName: string,  acctBalance: number = 1000, acctEmail: string){
    super(acctFirstName, acctLastName, acctBalance, acctEmail, AccountType.FixedDeposit);
  }

  // Overriding the deposit method
  deposit(amount: number): void{
    if(amount >= 1000){
      this.acctBalance += amount;
      console.log(`Success! New account balance: ${this.acctBalance}`);
    } else {
      console.log(`You cannot deposit less than 1000.`);
    }      
  }    
}


// Creating an instance of Savings Account
var savingsAcct = new SavingsAccount('John', 'Doe', 1000, 'john.doe@example.com');

// Adding the created account to the global account registered users
globalRegisteredAccounts.push(savingsAcct);
var savingsAcct2 = new SavingsAccount('Jane', 'Moe', 2000, 'jane.moe@example.com');
globalRegisteredAccounts.push(savingsAcct2);
var savingsAcct3 = new SavingsAccount('Jude', 'Loe', 3000, 'jude.loe@example.com');
globalRegisteredAccounts.push(savingsAcct3);
var savingsAcct4 = new SavingsAccount('Jude','Moe', 3000, 'jude.moe@example.com');
globalRegisteredAccounts.push(savingsAcct4);

// Creating an instance of Fixed Deposit Account
var fixedAcct = new FixedAccount('Jane', 'Moe', 2000, 'jane.moe@example.com');

// Adding the created account to the global account registered users
globalRegisteredAccounts.push(fixedAcct);

// Depositing and Withdrawing from the created accounts
savingsAcct.deposit(200);
savingsAcct.withdraw(100);
fixedAcct.deposit(200);
fixedAcct.deposit(1000);

// Displaying the account details
let balance = savingsAcct.getBalance();
console.log(`${savingsAcct.acctFirstName} ${savingsAcct.acctLastName} account Balance: ${balance}`);

