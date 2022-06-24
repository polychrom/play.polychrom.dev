import { Component, ElementRef, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public open = false;
  constructor(
    private locationStrategy: LocationStrategy,
    private _eref: ElementRef
  ) {}

  onClick(event: { target: any }) {
    console.log('element', this._eref.nativeElement);
    if (!this._eref.nativeElement.contains(event.target))
      this.open = false;
      console.log('triggered');
  }

  projectLink = 'project-a';
  baseUrl = this.locationStrategy.getBaseHref();

  ngOnInit(): void {}

  openModal(): void {
    this.open = true;
  }

  closeModal(): void {
    this.open = false;
  }
}
