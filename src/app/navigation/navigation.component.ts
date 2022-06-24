import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  $navigationModal = new BehaviorSubject(123);

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.$navigationModal.next(789);

    this.$navigationModal.subscribe((val) => console.log('modal', val));
  }

  closeModal(): void {
    this.sharedService.setNavigationState(false);
  }
}
