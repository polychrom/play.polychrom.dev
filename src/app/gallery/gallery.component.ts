import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { View } from '../enum';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
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

  viewportScroller: any;
  private column = {
    start: '3',
    width: '8',
  };

  public data: any;
  public projects: any;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private _helperService: HelperService
  ) {
    // restore gallery view when reloading app
    const viewModeFromQuery = this.activatedRoute.snapshot.queryParams['view'];
    if (viewModeFromQuery) {
      this.sharedService.$galleryMode.next(viewModeFromQuery);
    }
  }

  ngOnInit(): void {
    this.apiService.$data.subscribe((res: any) => {
      this.projects = res.project;
    });

    this.sharedService.$galleryMode.subscribe((currentMode) => {
      this.galleryMode = currentMode;
    });

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

  getSpan(width: number): string {
    const spanDefault: string =
      this.column.start + '/ span ' + this.column.width;
    if (width) {
      return this.column.start + '/ span ' + width;
    }
    return spanDefault;
  }
}
