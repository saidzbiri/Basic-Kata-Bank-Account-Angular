import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/loginRequest';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tokenStorage: TokenStorageService) { }


  ngOnInit(): void {
  }

  signIn(credentials: LoginRequest) {
    this.authService.login(credentials)
      .subscribe(
        result => {
          if (result) {
            this.tokenStorage.saveToken(result.accessToken);
            this.tokenStorage.saveUser(result);
            const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([returnUrl || '/']);
          }
          else
            this.invalidLogin = true;
        },
        error => {
          this.invalidLogin = true;
        });
  }

}
