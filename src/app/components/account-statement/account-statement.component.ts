import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Account } from './../../models/account';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {

  account: Account = <Account>{};

  constructor(private accountService: AccountService) {
    this.accountService.getCurrentAccount().subscribe(currentAccount => this.account = currentAccount);
  }

  ngOnInit(): void {
  }

}
