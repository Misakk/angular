import { Component } from '@angular/core';
import { DisplayDirective } from '../../display.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {

  }
a: boolean = false;

  drop() {
    if (this.a) {
      this.a = false;
    } else {
      this.a = true;
    }

  }

}

