import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';

import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectSliderComponent } from './projects/project-slider/project-slider.component';

@NgModule({
  declarations: [
    AboutComponent,
    CertificationsComponent,
    ContactComponent,
    ProjectSliderComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    ProjectSliderComponent
  ]
})

export class FeaturesModule {}