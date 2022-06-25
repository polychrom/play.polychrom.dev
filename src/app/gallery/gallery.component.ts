import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @ViewChild('filterName') redel: any;

  private i = 0;
  public speed = 50; /* The speed/duration of the effect in milliseconds */
  public txt;

  public isGalleryView = true;
  public isListView = false;
  public myData: any;
  private list: any;
  public searchResults: number = 0;

  public data: any;
  public projects: any;
  public inputValue = '';

  public changeCount: any;
  // public myData: any; // =  'hello';

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((response) => {
      this.projects = response.project;
      this.myData = response.project;
      console.log('resp', this.projects);
      this.searchResults = this.myData.length;
    });

    this.txt = 'Lorem ipsum typing effect!'; /* The text */
  }

  ngOnInit(): void {
    console.log('mydata', this.myData);
    this.typeWriter();
  }

  toggleView() {
    if (this.isGalleryView) {
      this.isGalleryView = false;
    } else {
      this.isGalleryView = true;
    }
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
}
