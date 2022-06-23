import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, share, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL: string = 'https://play.polychrom.dev/assets/json/showcase.json';
  base: string = './assets/json/showcase.json';
  data: Observable<any> | undefined;

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData(): Observable<any> {
    console.info('get', this.data);
    if (this.data) {
      return this.data;
    } else {
      this.data = this.http.get<any>(this.base).pipe(shareReplay(1));
      return this.data;
    }
  }
}
