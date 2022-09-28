import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { OperationsHistoryComponent } from './components/operations-history/operations-history.component';
import { OperationComponent } from './components/operation/operation.component';
import { AuthGuard } from './services/auth-guard.service';
import { AccountStatementComponent } from './components/account-statement/account-statement.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './common/layouts/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
        {
          path: '',
          component: HomeComponent,

        },
        {
          path: 'account',
          component: AccountStatementComponent,
        },
        {
          path: 'operation',
          component: OperationComponent,
        },
        {
          path: 'history',
          component: OperationsHistoryComponent,
        }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
