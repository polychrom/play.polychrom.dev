import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public data: any;
  public projects: any;
  @Input() myData: any;

  constructor(private apiService: ApiService) {
    this.apiService.getData('test').subscribe((response) => {
      this.projects = response.project;
      this.myData = response.project;
      console.log('resp', this.projects);
    });
  }

  ngOnInit(): void {}
}
