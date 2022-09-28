import { OperationsHistoryComponent } from './components/operations-history/operations-history.component';
import { OperationComponent } from './components/operation/operation.component';
import { AccountService } from './services/account.service';
import { OperationService } from './services/operation.service';
import { DataService } from './services/data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './common/helpers/auth-interceptor';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutComponent } from './common/layouts/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AccountStatementComponent,
    HomeComponent,
    OperationComponent,
    OperationsHistoryComponent,
    NotFoundComponent,
    LoginComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    AccountService,
    OperationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
