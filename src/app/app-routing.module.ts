import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';

import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { ContentComponent } from './Home/content/content.component';
import { ModalComponent } from './shared/modal/modal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./Home/content/content-routing.module')
  .then(m => m.ContentRoutingModule) },
  {  path: 'about', loadChildren: () => import('./features/about/about-routing.module')
  .then(m => m.AboutRoutingModule) },
  {path: 'projects', loadChildren: () => import('./features/projects/projects-routing.module')
  .then(m => m.ProjectsRoutingModule)},
  {path: 'contacts', component: ContactComponent},
  { path: 'modal', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}