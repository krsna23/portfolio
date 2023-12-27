import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';

import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectSliderComponent } from './projects/project-slider/project-slider.component';
import { ModalVideoComponent } from './projects/modal-video/modal-video.component';

@NgModule({
  declarations: [
    AboutComponent,
    CertificationsComponent,
    ContactComponent,
    ProjectSliderComponent,
    ModalVideoComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    ProjectSliderComponent,
    ModalVideoComponent
  ]
})

export class FeaturesModule {}