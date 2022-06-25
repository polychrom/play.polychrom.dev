import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private router: Router) {}

  getWindowSize(): string {
    return 'hello from getWindowSize';
  }

  navigateByRoute(url: any): void {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([url]));
  }
}
