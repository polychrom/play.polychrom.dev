import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HelperService } from '../helper.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public projectViews: any;
  public projectsViewed: any;
  $navigationModal = new BehaviorSubject(123);

  constructor(
    private sharedService: SharedService,
    private router: Router,
    public helperService: HelperService
  ) {}

  ngOnInit(): void {
    this.$navigationModal.next(789);

    this.$navigationModal.subscribe((val) => console.log('modal', val));

    this.projectViews = sessionStorage.getItem('projectViews');
    const viewed = sessionStorage.getItem('projectsViewed');
    this.projectsViewed = viewed ? viewed.split(',') : [];
    console.info('xxx', this.projectsViewed);
  }

  closeModal(): void {
    this.sharedService.setNavigationState(false);
  }
}
