import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { View } from '../enum';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  readonly View = View;

  public projects: any;
  public modalState: boolean = false;

  posX: any;
  posY: any;
  offSetX = 0;
  active = false;

  constructor(
    public apiService: ApiService,
    public sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.$data.subscribe((res: any) => {
      this.projects = res.project;
    });

    const mouseMove$ = fromEvent(window, 'mousemove');
    mouseMove$.subscribe((event: any) => {
      //console.log('mouse sub active');
      const offsetY = 30;
      this.posX = event.pageX - 30 + 'px';
      this.posY = event.pageY - 30 + 'px';

      if (event.target.role === 'hoverState') {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }

  navigate(view: View) {
    this.router.navigate(['']);
    this.sharedService.$galleryMode.next(view);
  }

  viewMode(view: View): void {
    this.sharedService.$galleryMode.next(view);
  }
}
