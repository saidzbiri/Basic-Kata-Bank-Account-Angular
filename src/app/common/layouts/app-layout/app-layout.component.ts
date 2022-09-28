import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Account } from './../../../models/account';
// testing account is 123
const accountNumber: number = 123;

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  account: Account = <Account>{};

  constructor(private accountService: AccountService) { }

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
