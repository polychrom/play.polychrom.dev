import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { View } from '../enum';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly View = View;

  public projects: any;
  public modalState: boolean = false;

  constructor(
    public apiService: ApiService,
    public sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.$data.subscribe((res: any) => {
      this.projects = res.project;
    });
  }

  openModal(): void {
    this.modalState = true;
  }

  closeModal(): void {
    this.modalState = false;
  }

  navigate(view: View) {
    this.router.navigate(['']);
    this.sharedService.$galleryMode.next(view);
  }

  viewMode(view: View): void {
    this.sharedService.$galleryMode.next(view);
  }

  /*
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
  }*/
}
