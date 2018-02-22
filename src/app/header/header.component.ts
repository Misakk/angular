import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {

  }

  a: boolean = false;
  b: boolean = false;
  c: boolean = false;
  d: boolean = false;



  drop() {
    if (this.a) {
      this.a = false;
    } else {
      this.a = true;
    }

  }

  dropNav() {
    if (this.b) {
      this.b = false;
    } else {
      this.b = true;
    }
  }
  dropNav1() {
    if (this.c) {
      this.c = false;
    } else {
      this.c = true;
    }
  }
  dropNav2() {
    if (this.d) {
      this.d = false;
    } else {
      this.d = true;
    }
  }
}
