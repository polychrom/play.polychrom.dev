import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private modal = new Subject<boolean>();

  constructor() {}

  setNavigationState(state: boolean) {
    this.modal.next(state);
    console.log('shared', state);
  }
  getNavigationState(): Observable<any> {
    return this.modal.asObservable();
  }
}
