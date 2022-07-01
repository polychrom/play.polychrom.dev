import { Component, ElementRef, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { fromEvent } from 'rxjs';

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

  private keyLeft = 37;
  private keyRight = 39;
  private keyUp = 38;
  private keyDown = 40;
  public keyText = 'text';
  public galleryMode = 'grid';

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
    // draggable navigation
    const nav = document.getElementById('control');
    let dragged: any = null;

    document.addEventListener('dragstart', (event) => {
      // store a ref. on the dragged elem
      dragged = event.target;
    });

    document.addEventListener('dragover', (event) => {
      // prevent default to allow drop
      event.preventDefault();
    });

    document.addEventListener('drop', (event) => {
      // prevent default action (open as link for some elements)

      event.preventDefault();
      const myTarget = event.target as HTMLTextAreaElement;
      console.log('drop', myTarget ? myTarget.className : '');

      // move dragged element to the selected drop target
      if (myTarget && myTarget.className == 'dropzone') {
        dragged.parentNode.removeChild(dragged);
        myTarget.appendChild(dragged);
      }
    });

    if (nav) {
      nav.addEventListener('dragstart', this.handleDragEnd);
      nav.addEventListener('dragend', this.handleDragEnd);
      nav.addEventListener('drop', this.dropNav);
    }

    this.router.events.subscribe(() => {
      this.open ? (this.open = false) : null;
    });

    this.sharedService
      .getNavigationState()
      .subscribe((navigationState: boolean) => {
        this.open = navigationState;
      });

    const keyDown$ = fromEvent(window, 'keydown');
    keyDown$.subscribe((event: any) => {
      // move left
      if (event.keyCode === this.keyLeft) {
        this.keyText = 'left';
      }

      //move right
      if (event.keyCode === this.keyRight) {
        this.keyText = 'right';
      }

      if (event.keyCode == this.keyDown) {
        this.keyText = 'down';
      }

      // scroll up
      if (event.keyCode == this.keyUp) {
        this.keyText = 'up';
      }
    });
  }
  toggleView() {
    if (this.galleryMode === 'grid') {
      this.galleryMode = 'list';
    } else {
      this.galleryMode = 'grid';
    }
  }

  setGalleryView(data: string): void {
    this.sharedService.$galleryView.next(data);
    this.galleryMode = data;
  }

  openModal(): void {
    this.open = true;
  }

  closeModal(): void {
    this.open = false;
  }

  handleDragEnd(e: Event): void {
    console.log('event', e.target);
  }

  dropNav(e: Event): void {
    e.preventDefault();

    console.log('drop', e);
  }
}
