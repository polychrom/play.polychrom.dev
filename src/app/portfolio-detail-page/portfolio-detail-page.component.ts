import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss'],
})
export class PortfolioDetailPageComponent implements OnInit {
  public project: any;
  public projectView = 0;
  private key = 'projectViews';
  private value = '1';
  private currentRoute = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    //this.updateProjectViews();
    // this.updateProjectsViewed();
  }

  ngOnInit(): void {
    /*
    this.apiService.getData().subscribe((response) => {
      this.project = response.project;

      this.project.forEach((item: any) => {
        if (item.project_dir === this.currentRoute) {
          this.project = item;
          console.log(this.project);
        }
      });
    });*/
  }

  updateProjectViews(): void {
    const key = 'projectViews';
    let iteratedViews: number;

    const currentViews = sessionStorage.getItem(key) || '0';
    iteratedViews = parseInt(currentViews) + 1;
    sessionStorage.setItem(key, iteratedViews.toString());
  }

  updateProjectsViewed(): void {
    const key = 'projectsViewed';
    let currentProjectRoute: any = [];
    const lastViewed = sessionStorage.getItem(key);

    if (lastViewed) {
      currentProjectRoute = lastViewed.split(',');
    }

    // check if route already exists as last item
    if (currentProjectRoute.slice(-1).indexOf(this.currentRoute) === -1) {
      currentProjectRoute.unshift(this.currentRoute);
    }
    sessionStorage.setItem(key, currentProjectRoute.toString());
  }
}
