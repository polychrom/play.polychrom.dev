import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subscribeOn, Subscription } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss'],
})
export class PortfolioDetailPageComponent implements OnInit, OnDestroy {
  public projects: any;
  public project: any;

  private _subscription!: Subscription;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this._subscription = this.apiService.$data.subscribe((res: any) => {
      this.projects = res.project;
      this.projects.forEach((item: any) => {
        if (item.project_dir === this.route.snapshot.params['id']) {
          this.project = item;
        }
      });
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
