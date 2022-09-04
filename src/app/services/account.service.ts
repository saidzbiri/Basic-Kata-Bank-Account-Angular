import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Account } from './../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends DataService {

  private currentAccount: BehaviorSubject<Account> = new BehaviorSubject<Account>(<Account>{});

  constructor(http: HttpClient) {
    super('/api/accounts', http);
  }

  setCurrentAccount(account: Account) {
    this.currentAccount.next(account);
  }

  getCurrentAccount(): Observable<Account> {
    return this.currentAccount.asObservable();
  }

}
