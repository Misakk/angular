import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor() { 
 
  }

  a :string = 'none';
  b :string = 'none';
  c :string = 'none';
  isClassVisible:boolean = false;
      drop1(){
      if (this.a == 'none') {
        this.a = 'block';
        this.b = 'none';
        this.c = 'none';
      }else{
        this.a = 'none'
      }
      
    };
       drop2(){
      if (this.b == 'none') {
        this.b = 'block'
        this.a = 'none';
        this.c = 'none';

      }else{
        this.b = 'none'
      }
      
    };
       drop3(){
      if (this.c == 'none') {
        this.c = 'block'
        this.b = 'none';
        this.a = 'none';
      }else{
        this.c = 'none'
      }
      
    };
  
}
