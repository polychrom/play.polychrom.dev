import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  private scrollState = 0;
  private gallery_items = document.getElementsByClassName('gallery_item');

  viewportScroller: any;

  @ViewChild('filterName') redel: any;

  private i = 0;
  public speed = 50; /* The speed/duration of the effect in milliseconds */
  public txt;
  public activeElement = 0;

  public isGalleryView = true;
  public galleryMode = 'grid';
  public isListView = false;
  public myData: any;
  private list: any;
  public searchResults: number = 0;

  public data: any;
  public projects: any;
  public inputValue = '';

  public changeCount: any;
  // public myData: any; // =  'hello';

  public elements = 3;

  private keyLeft = 37;
  private keyRight = 39;
  private keyUp = 38;
  private keyDown = 40;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {
    this.apiService.getData().subscribe((response) => {
      this.projects = response.project;
      this.myData = response.project;
      console.log('resp', this.projects);
      this.searchResults = this.myData.length;
    });

    this.txt = 'Lorem ipsum typing effect!'; /* The text */

    const keyDown$ = fromEvent(window, 'keydown');
    keyDown$.subscribe((event: any) => {
      console.log('aE', this.activeElement);
      // 40 arrow down
      console.log('amount items', this.gallery_items.length);
      console.log('amount state', this.scrollState);

      // scroll down

      console.log('left', event.keyCode);

      // move left
      if (event.keyCode === this.keyLeft) {
        this.activeElement -= 1;
      }

      //move right
      if (event.keyCode === this.keyRight) {
        this.activeElement += 1;
      }
      console.log('state before if', this.activeElement);

      if (event.keyCode == this.keyDown && this.scrollState > 12) {
        console.log('state Scroll to begin');
        this.viewportScroller.scrollToPosition([0, 0]);
        this.scrollState = 3;
        this.scrollByRow(this.scrollState, event);

        event.preventDefault();
      } else if (
        (event.keyCode == this.keyDown &&
          this.scrollState <= this.gallery_items.length) ||
        (event.keyCode == this.keyRight && this.activeElement % 3 === 0)
      ) {
        this.scrollState += 3;
        console.log('state down', this.scrollState);

        this.scrollByRow(this.scrollState, event);

        event.preventDefault();
      }
      // scroll up
      else if (event.keyCode == this.keyUp) {
        if (this.scrollState > 0) {
          this.scrollState -= 3;
        }
        console.log('xx up', this.scrollState);
        this.scrollByRow(this.scrollState, event);
        event.preventDefault();
      }
    });
  }

  ngOnInit(): void {
    this.sharedService.$galleryView.subscribe((value) => {
      console.log('Subscription got', value); // Subscription got b,
      this.galleryMode = value;
      // ^ This would not happen
      // for a generic observable
      // or generic subject by default
    });

    console.log('mydata', this.myData);
    this.typeWriter();
  }

  filterByValue(event: Event): void {
    // always init with empty array
    this.list = [];

    this.inputValue = (event.target as HTMLInputElement).value;
    console.log('search', this.inputValue, this.inputValue.length);

    this.myData.forEach((item: any) => {
      if (item.title.indexOf(this.inputValue) > -1) {
        console.log('item', item);
        this.list.push(item);
      }
    });
    console.log('length', this.list.length);
    this.searchResults = this.list.length;

    this.projects = this.list;
  }

  resetFilter(): void {
    this.projects = this.myData;
  }

  typeWriter(): void {
    console.log(this.txt);
    /*
    if (this.i < this.txt.length) {
      const element = document.getElementById('title');
      if (element) {
        console.log('element', element);
        element.innerHTML += this.txt.charAt(this.i);
        this.i++;
      }
      setTimeout(this.typeWriter, this.speed);
    }*/
  }

  scrollByRow(num: number, x: any) {
    const nextItem = this.gallery_items[num];

    nextItem.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }
}
