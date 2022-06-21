import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private locationStrategy: LocationStrategy) {}

  projectLink = 'project-a';
  baseUrl = this.locationStrategy.getBaseHref();

  ngOnInit(): void {}
}
