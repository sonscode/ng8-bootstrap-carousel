import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
val: boolean = false
appear(){
  this.val = !this.val;
}
close(){
  this.val = false;
}
firstname : string ='';

about: boolean=false;
/*aboutUs(){
  about: true;
  comp: true;
  MainNav: false;
  footer: false;
  sideNav: false;
  services: false;
  services:  false; 
  
  }*/
  /*services : boolean = false;
  services(){
    services: Boolean =true;
    about: Boolean = false;
  }*/
  constructor() {
 
    
   }

  ngOnInit(): void {
  }
login(){
alert ("Hello" + " " + this.firstname + ", welcome and thanks for subscribing...");
}

}
