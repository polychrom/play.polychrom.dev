import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public isGalleryView = false;
  public isListView = true;
  public myData: any;

  public data: any;
  public projects: any;
  // public myData: any; // =  'hello';

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((response) => {
      this.projects = response.project;
      this.myData = response.project;
      console.log('resp', this.projects);
    });
  }

  ngOnInit(): void {
    console.log('mydata', this.myData);
  }

  toggleView() {
    if (this.isGalleryView) {
      this.isGalleryView = false;
    } else {
      this.isGalleryView = true;
    }
  }
}
