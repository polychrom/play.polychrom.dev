import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private modal = new Subject<boolean>();

  public $galleryView = new BehaviorSubject('grid');

  constructor() {}

  setNavigationState(state: boolean) {
    this.modal.next(state);
    console.log('shared', state);
  }
  getNavigationState(): Observable<any> {
    return this.modal.asObservable();
  }
}
