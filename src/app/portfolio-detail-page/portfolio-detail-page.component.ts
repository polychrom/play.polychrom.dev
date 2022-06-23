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

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((response) => {
      console.log('from pdp');
      this.project = response.project;

      this.project.forEach((item: any) => {
        if (item.project_dir === this.route.snapshot.params['id']) {
          this.project = item;
          console.log(this.project);
        }
      });
    });
  }
}
