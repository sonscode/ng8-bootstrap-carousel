import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap' ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home={
    title: 'Home',
   subtitle: 'Welcome to Apparc application, with apparc you can...',
    content: 'Services like...',
    image: '../../assets/images/Join.png',
    image1: '../../assets/images/splashing-165192__480.jpg',
    image2: '../../assets/images/tree-276014__340.png',
    image3: '../../assets/images/woman-1509956__480.jpg',
    image4: '../../assets/images/mountain.jpg',
    image5: '../../assets/images/woman-1807533__480.jpg'
    
  };
 constructor(config: NgbCarouselConfig) {
    config.interval=2000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false;
   }
   
  ngOnInit(): void {
  }

}
