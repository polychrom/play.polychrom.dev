import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { View } from './enum';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public $galleryMode = new BehaviorSubject(View.Default);

  constructor() {}
}
