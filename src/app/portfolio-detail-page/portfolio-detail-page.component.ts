import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail-page',
  templateUrl: './portfolio-detail-page.component.html',
  styleUrls: ['./portfolio-detail-page.component.scss'],
})
export class PortfolioDetailPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  //public routeParams: any;

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = routeParams.get('projectId');
    console.log(routeParams);
  }
}
