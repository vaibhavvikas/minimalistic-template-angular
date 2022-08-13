import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-title-mobile',
  templateUrl: './header-title-mobile.component.html',
  styleUrls: ['./header-title-mobile.component.scss']
})
export class HeaderTitleMobileComponent implements OnInit {

  heading!: string;

  constructor() { }

  ngOnInit(): void {
    this.heading = environment.heading;
  }
}
