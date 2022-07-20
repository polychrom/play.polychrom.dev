import { identifierName } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss'],
})
export class PortfolioDetailPageComponent implements OnInit, OnDestroy {
  public projects: any;
  public project: any;
  private _match: boolean = false;
  private _id: string = '';

  private _subscription!: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._subscription = this._apiService.$data.subscribe((res: any) => {
      this.projects = res.project;
      this._match = false;
      this.projects.forEach((item: any) => {
        this._id = this._activatedRoute.snapshot.params['id'];
        if (item.project_dir === this._id) {
          this.project = item;
          this._match = true;
        }
      });
      if (!this._match && this._id.indexOf('404') === -1) {
        this._router.navigate(['404']);
      }
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
