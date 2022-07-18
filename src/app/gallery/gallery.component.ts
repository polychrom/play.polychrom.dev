import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { View } from '../enum';

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

  /*
  public isGalleryView = true;
  public isListView = false;
  public myData: any;
  */

  public data: any;
  public projects: any;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {
    this.apiService.$mydata.subscribe((res: any) => {
      this.projects = res.project;
    });
  }

  ngOnInit(): void {
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
