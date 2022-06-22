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

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    let id = route.snapshot.params;
    console.log('url', id);

    this.apiService.getData('test').subscribe((response) => {
      this.project = response.project;

      this.project.forEach((item: any) => {
        console.log(item.project_dir);
        console.log(route.snapshot.params);

        if (item.project_dir === route.snapshot.params['id']) {
          this.project = item;
          console.log('FOUND', this.project);
        }
      });
    });
  }

  //public routeParams: any;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = routeParams.get('projectId');
    console.log(routeParams);
  }
}
