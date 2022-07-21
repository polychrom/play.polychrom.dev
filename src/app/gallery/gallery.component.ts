import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { View } from '../enum';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  readonly View = View;
  public galleryMode: any;
  public textOverlay: string = '';
  public posX: any;
  public posY: any;
  private _lastId: any;
  public viewed: any = [];
  public _routeMatch = false;
  public seen: any;
  public viewedFromStorage: any;

  viewportScroller: any;
  private column = {
    start: '3',
    width: '8',
  };

  public data: any;
  public projects: any;

  public $items = new BehaviorSubject(['test']);

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private _helperService: HelperService,
    private _router: Router,
    public cdr: ChangeDetectorRef
  ) {
    // restore gallery view when reloading app
    const viewModeFromQuery = this.activatedRoute.snapshot.queryParams['view'];
    if (viewModeFromQuery) {
      this.sharedService.$galleryMode.next(viewModeFromQuery);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('viewed')) {
      this.seen = JSON.parse(localStorage.getItem('viewed') || 'nix');
    }

    this.apiService.$data.subscribe((res: any) => {
      this.projects = res.project;
    });

    this.sharedService.$galleryMode.subscribe((currentMode) => {
      this.galleryMode = currentMode;
    });

    if (this._helperService.isBrowser()) {
      this._router.events.subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          let currentProject = this._router.routerState.snapshot.url;
          currentProject = currentProject.replace('/', '');

          //let viewed: any;

          // check if route is candidate for project match
          this._routeMatch = false;
          this.projects.forEach((project: any) => {
            if (currentProject.indexOf(project.title) > -1) {
              this._routeMatch = true;
            }
          });
          // check if storage exists and project is already stored
          if (this._routeMatch) {
            if (localStorage.getItem('viewed')) {
              this.viewedFromStorage = JSON.parse(
                localStorage.getItem('viewed') || ''
              );
            }

            // push item when storage does not exist or item not already saved
            if (
              !this.viewedFromStorage ||
              (this.viewedFromStorage &&
                !this.isInStorage(this.viewedFromStorage, currentProject))
            ) {
              this.viewed.push(currentProject);
              localStorage.setItem('viewed', JSON.stringify(this.viewed));
            }
          }
        }
      });
    }

    if (this._helperService.isBrowser()) {
      const mouseMove$ = fromEvent(window, 'mousemove');
      mouseMove$.subscribe((e: any) => {
        const offset = 30;
        this.posX = e.pageX + offset + 'px';
        this.posY = e.pageY + offset + 'px';
      });

      const click$ = fromEvent(window, 'mouseover');
      click$.subscribe((event: any) => {
        const _activeId = event.target.id;

        if (this.projects && _activeId) {
          this.projects.filter((project: any) => {
            if (project.title === _activeId) {
              this._lastId = _activeId;
              this.textOverlay = project.title;
            }
            // stop overlay when leaving image
            if (this._lastId !== _activeId) {
              this.textOverlay = '';
            }
          });
        }
      });
    }
  }

  isInStorage(viewed: any, current: string): boolean {
    let _found = false;

    viewed.forEach((element: any) => {
      if (element === current) {
        _found = true;
      }
    });
    return _found;
  }

  getSpan(width: number): string {
    const spanDefault: string =
      this.column.start + '/ span ' + this.column.width;
    if (width) {
      return this.column.start + '/ span ' + width;
    }
    return spanDefault;
  }
}
