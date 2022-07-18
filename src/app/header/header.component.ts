import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { View } from '../enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public galleryMode = 'Index';

  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {}
  toggleView() {
    if (this.galleryMode === View.Default) {
      this.sharedService.$galleryMode.next(View.Default);
      this.galleryMode = View.Index;
    } else {
      this.sharedService.$galleryMode.next(View.Index);
      this.galleryMode = View.Default;
    }
  }
}
