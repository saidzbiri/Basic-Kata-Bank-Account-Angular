import { Account } from './../../models/account';
import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';

// testing account is 123
const accountNumber: number = 123;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  account: Account = <Account>{};

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    //this.getAccountStatement(accountNumber);
  }

  getAccountStatement(accountNumber: number): void {
    this.accountService.get(accountNumber)
      .subscribe(res => {
        this.account = res;
        this.accountService.setCurrentAccount(this.account);
      });
  }

}
