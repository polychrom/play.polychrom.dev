import { Component, Input } from '@angular/core';

import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { fromEvent } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'play.polychrom.dev';

  constructor(private router: Router, private apiService: ApiService) {
    const source = fromEvent(window, 'scroll');

    source.subscribe((val) => console.log('scroll', val));

    const click$ = fromEvent(window, 'click');
    //click$.subscribe((val) => console.log('click', val));

    const resize$ = fromEvent(window, 'resize');
    resize$.subscribe((val) => console.log(window.innerWidth));

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('nav start');
      }

      if (event instanceof NavigationEnd) {
        console.log('nav end');
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });
  }
}
