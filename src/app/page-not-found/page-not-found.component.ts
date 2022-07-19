import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(private _helperService: HelperService) {}

  public size = '';

  ngOnInit(): void {
    // this.size = this._helperService.getWindowSize();
  }
}
