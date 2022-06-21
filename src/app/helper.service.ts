import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  getWindowSize(): string {
    return 'hello from getWindowSize';
  }
}
