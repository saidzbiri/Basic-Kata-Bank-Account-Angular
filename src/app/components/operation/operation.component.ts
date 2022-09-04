import { AccountService } from './../../services/account.service';
import { Account } from './../../models/account';
import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/app/models/Operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  defaultOperationType: string = '';
  executedOperation: string = '';
  showSuccessMsg: boolean = false;
  operationTypes = [
    {id: 1, name: 'Deposit'},
    {id: 2, name: 'Withdrawal'},
  ];

  account: Account = <Account>{};

  constructor(
    private operationService: OperationService,
    private accountService: AccountService
    ) {
      this.accountService.getCurrentAccount().subscribe(currentAccount => this.account = currentAccount);
    }


  ngOnInit(): void {
    this.defaultOperationType = 'Deposit';
  }

  onSubmit(f: any) {
    if (f.valid) {
      let operation = f.value.operation;
      if (operation.operationType == 'Withdrawal' && operation.amount > this.account.balance) {
        console.log('ERROR');
        f.form.setErrors({'invalidOperation': true});
      } else {
        this.executeOperation(operation);
        this.resetForm(f);
      }
    }
  }

  resetForm(f: any) {
    f.reset();
    setTimeout(() => {
      this.defaultOperationType = 'Deposit';
      this.showSuccessMsg = false;
    }, 2000);
  }

  executeOperation(operation: Operation): void {
    let newOperation: Operation = {
      operationType: operation.operationType,
      amount: operation.amount,
      account: this.account
    }
    this.operationService.create(newOperation)
      .subscribe(res => {
        this.updateAccount(res.account)
        this.showSuccessMsg = true;
        this.executedOperation = operation.operationType;

      });
  }

  updateAccount(account: Account) {
    this.accountService.setCurrentAccount(account);
  }
}
