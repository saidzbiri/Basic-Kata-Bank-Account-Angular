import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "src/app/services/token-storage.service";


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authRequest = request;
    const token = this.tokenStorage.getToken();
    if (token != null) {
      authRequest = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authRequest);
  }
}
