import { ViewportScroller } from '@angular/common';
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
import { HelperService } from './helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'play.polychrom.dev';
  scrollPosition = 0;
  isScrollTopActive = false;
  public elements = 3;
  public routeChanged = false;

  constructor(private router: Router, private helperService: HelperService) {
    if (this.helperService.isBrowser()) {
      const scrollPosition$ = fromEvent(window, 'scroll');
      scrollPosition$.subscribe(() => {
        //console.log('y', window.scrollY);
        if (window.scrollY > window.innerHeight / 2) {
          this.isScrollTopActive = true;
        } else {
          this.isScrollTopActive = false;
        }
      });

      const click$ = fromEvent(window, 'click');
      click$.subscribe((val) => {
        // console.log('click', val);
      });

      const resize$ = fromEvent(window, 'resize');
      resize$.subscribe((val) => console.log(window.innerWidth));

      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          // console.log('nav start');
        }

        if (event instanceof NavigationEnd) {
          // console.log('navigation finished');
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
        }
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
