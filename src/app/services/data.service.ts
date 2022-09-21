import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const SEPARATOR = '/';

@Injectable()
export class DataService {

  constructor(@Inject('url') private url: string, private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(this.url + SEPARATOR + id)
      .pipe(
        catchError((error: Response) => this.handleError(error))
      );
  }

  getAll(accountNumber: number): Observable<any> {
    let params = new HttpParams()
        .set('accountNumber', accountNumber)
        .set('page', 0)
        .set('size', 10);
    return this.http.get(this.url, { params: params})
      .pipe(
        catchError((error: Response) => this.handleError(error))
      );
  }

  create(resource: any): Observable<any> {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    return this.http.post(this.url, JSON.stringify(resource), {headers: myHeaders})
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: Response): Observable<Error> {
    console.log(error);
    return of(new Error());
  }

}
