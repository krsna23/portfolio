import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.css']
})
export class ModalVideoComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() embedid: any;
  @Input() title!: string;
  sanitizedSrc!: SafeResourceUrl;

  embedUrl!: string;

  ngOnInit() {
    this.embedUrl = `https://www.youtube.com/embed/${this.embedid}`;
    this.sanitizedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.embedUrl);
  }

  displayStyle = "none";


  openPopup() {
    this.displayStyle = "block";
    console.log("DAta url:", this.embedUrl);
  }
  
  closePopup() {
    this.displayStyle = "none";
  }
}
