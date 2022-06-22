import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'https://play.polychrom.dev/assets/json/showcase.json';
  base: string = './assets/json/showcase.json';

  constructor(private http: HttpClient) {}

  getData(userName: string): Observable<any> {
    return this.http.get(this.base);
  }
}

//https://play.polychrom.dev/assets/json/showcase.json
