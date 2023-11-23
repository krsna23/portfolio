import { Component } from '@angular/core';
import { SlideInterface } from './types/slide.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  slides: SlideInterface[] = [
    {url: '../../../assets/images/image1.jpeg',title:'one'},
    {url: '../../../assets/images/image2.jpeg',title:'two'},
    {url: '../../../assets/images/image3.jpeg', title: 'three'},
    {url: '../../../assets/images/image4.jpeg', title: 'four'},
    {url: '../../../assets/images/image5.jpeg', title: 'five'},
    {url: '../../../assets/images/image6.jpg', title: 'six'}
  ]
}
