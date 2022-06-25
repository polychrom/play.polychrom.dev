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
  scrollPosition = 0;

  constructor(private router: Router, private apiService: ApiService) {
    const scrollPosition$ = fromEvent(window, 'scroll');
    scrollPosition$.subscribe(() => console.log());

    /*{
      this.scrollPosition = window.scrollY;
      console.log('scroll', Math.round(this.scrollPosition));
    });*/

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
