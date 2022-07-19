import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { View } from '../enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  readonly View = View;
  public galleryMode: any;

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
    private activatedRoute: ActivatedRoute
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
