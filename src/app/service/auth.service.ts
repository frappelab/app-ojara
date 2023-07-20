import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public baseUrl = 'http://localhost:3000/';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  options = { headers: this.headers };

  constructor(private httpClient: HttpClient) {}

  // public postSignup(): Observable<any> {
  //   return this.httpClient.post(this.baseUrl, );
  // }

  public postSignin(email: string, password: string): Observable<any> {
    let data = {
      email: email,
      password: password,
    };
    return this.httpClient.post(this.baseUrl + 'signin', data, this.options);
  }
}
