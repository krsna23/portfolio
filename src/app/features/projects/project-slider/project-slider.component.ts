import { Component, Input } from '@angular/core';
import { SlideInterface } from '../types/slide.interface';

@Component({
  selector: 'app-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.css']
})
export class ProjectSliderComponent {

  @Input() slides: SlideInterface[] = [];

  currentIndex=5;

  getImage(): string {

    return `url('${this.slides[this.currentIndex].url}')`
  }
  
}