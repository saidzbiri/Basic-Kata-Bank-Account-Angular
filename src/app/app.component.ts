import { Operation } from './models/Operation';
import { OperationService } from './services/operation.service';
import { AccountService } from './services/account.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  public constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }


}
