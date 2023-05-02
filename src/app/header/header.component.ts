import { Component, AfterViewInit  } from '@angular/core';

declare const navSlide: () => void;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    navSlide();
  }
}
