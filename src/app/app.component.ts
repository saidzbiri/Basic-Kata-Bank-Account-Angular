import { Operation } from './models/Operation';
import { Account } from './models/account';
import { OperationService } from './services/operation.service';
import { AccountService } from './services/account.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

// testing account is 123
const accountNumber: number = 123;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  account: Account = <Account>{};


  public constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.getAccountStatement(accountNumber);
  }

  getAccountStatement(accountNumber: number): void {
    this.accountService.get(accountNumber)
      .subscribe(res => {
        this.account = res;
        this.accountService.setCurrentAccount(this.account);
      });
  }

}
