import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { View } from '../enum';
import { distinctUntilChanged, take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly View = View;
  public galleryMode = View.Index;

  public currentMode: any;

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {}

  nextViewMode(): void {
    this.sharedService.$galleryMode.pipe(take(1)).subscribe((mode) => {
      this.currentMode = mode;
    });

    if (this.currentMode === View.Default) {
      this.sharedService.$galleryMode.next(View.Index);
      this.galleryMode = View.Grid;
    }
    if (this.currentMode === View.Index) {
      this.sharedService.$galleryMode.next(View.Grid);
      this.galleryMode = View.Default;
    }
    if (this.currentMode === View.Grid) {
      this.sharedService.$galleryMode.next(View.Default);
      this.galleryMode = View.Index;
    }
  }
}
