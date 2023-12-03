import { Component, OnInit } from '@angular/core';
import { SlideInterface } from './interface/slide-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSmallScreen!: boolean;

  ngOnInit(){
    this.isSmallScreen = window.screen.width<768;
    console.log(this.isSmallScreen);
  }
}
