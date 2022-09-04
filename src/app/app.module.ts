import { OperationsHistoryComponent } from './components/operations-history/operations-history.component';
import { OperationComponent } from './components/operation/operation.component';
import { AccountService } from './services/account.service';
import { OperationService } from './services/operation.service';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AccountStatementComponent,
    HomeComponent,
    OperationComponent,
    OperationsHistoryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'account',
        component: AccountStatementComponent
      },
      {
        path: 'operation',
        component: OperationComponent
      },
      {
        path: 'history',
        component: OperationsHistoryComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    DataService,
    AccountService,
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
