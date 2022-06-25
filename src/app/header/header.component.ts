import { Component, ElementRef, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

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
    private _eref: ElementRef,
    private router: Router,
    private sharedService: SharedService
  ) {}

  onClick(event: { target: any }) {
    console.log('element', this._eref.nativeElement);
    if (!this._eref.nativeElement.contains(event.target)) this.open = false;
    console.log('triggered');
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.open ? (this.open = false) : null;
    });

    this.sharedService
      .getNavigationState()
      .subscribe((navigationState: boolean) => {
        this.open = navigationState;
      });
  }

  openModal(): void {
    this.open = true;
  }

  closeModal(): void {
    this.open = false;
  }
}
