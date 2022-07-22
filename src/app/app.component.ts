import { Component } from '@angular/core';

import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  ActivatedRoute,
} from '@angular/router';
import { fromEvent } from 'rxjs';
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
  public is404: boolean = false;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _helperService: HelperService
  ) {
    if (this._helperService.isBrowser()) {
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

      this._router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
        }

        if (event instanceof NavigationEnd) {
          console.log('navigation finished');
          const currentUrl = this._router.routerState.snapshot.url;
          if (currentUrl.indexOf('404') > -1) {
            this.is404 = true;
          } else {
            this.is404 = false;
          }
        }

        if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
        }
      });
    }
  }

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
